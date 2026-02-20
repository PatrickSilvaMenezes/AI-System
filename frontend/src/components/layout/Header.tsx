import Link from "next/link";
import { ShoppingBag, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";



export function Header() {
    return (
        <header style={{
            position: 'sticky',
            top: 0,
            zIndex: 50,
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid #F1F5F9'
        }}>
            <div className="container" style={{
                display: 'flex',
                height: '64px',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '16px'
            }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                        backgroundColor: 'var(--brand-primary)',
                        color: 'white',
                        padding: '6px',
                        borderRadius: '8px',
                        display: 'flex'
                    }}>
                        <ShoppingBag size={20} />
                    </div>
                    <span style={{
                        fontSize: '20px',
                        fontWeight: 900,
                        letterSpacing: '-0.025em',
                        color: 'var(--text-main)'
                    }}>
                        SYSTEM<span style={{ color: 'var(--brand-primary)' }}>AI</span>
                    </span>
                </Link>

                <div style={{ flex: 1, maxWidth: '400px', position: 'relative' }}>
                    <Search size={16} style={{
                        position: 'absolute',
                        left: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#9CA3AF'
                    }} />
                    <Input
                        placeholder="Buscar produtos..."
                        style={{ paddingLeft: '40px', borderRadius: '999px', backgroundColor: '#F9FAFB', border: 'none' }}
                    />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <Button variant="ghost" size="icon" style={{ position: 'relative' }}>
                        <ShoppingBag size={20} />
                        <span style={{
                            position: 'absolute',
                            top: '4px',
                            right: '4px',
                            height: '8px',
                            width: '8px',
                            backgroundColor: 'var(--brand-primary)',
                            borderRadius: '50%',
                            border: '2px solid white'
                        }}></span>
                    </Button>
                    <SignedOut>
                        <SignInButton mode="modal">
                            <Button style={{ borderRadius: '999px', padding: '0 24px' }}>
                                Entrar
                            </Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                </div>

            </div>
        </header>
    );
}
