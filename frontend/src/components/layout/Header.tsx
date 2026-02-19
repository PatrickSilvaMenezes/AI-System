import Link from "next/link";
import { ShoppingCart, User, Search, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-surface-bg/95 backdrop-blur supports-[backdrop-filter]:bg-surface-bg/60">
            <div className="container flex h-16 items-center px-4 max-w-[1200px] mx-auto">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <Store className="h-6 w-6 text-brand-primary" />
                    <span className="hidden font-bold sm:inline-block">
                        DevAI
                    </span>
                </Link>
                <div className="flex flex-1 items-center justify-center px-4">
                    <div className="relative w-full max-w-sm">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                        <Input
                            type="search"
                            placeholder="Buscar produtos..."
                            className="w-full pl-8 bg-white"
                        />
                    </div>
                </div>
                <nav className="flex items-center space-x-4">
                    <Link href="/cart">
                        <Button variant="ghost" size="icon" aria-label="Carrinho">
                            <ShoppingCart className="h-5 w-5" />
                        </Button>
                    </Link>
                    <Link href="/login">
                        <Button variant="ghost" size="icon" aria-label="Login">
                            <User className="h-5 w-5" />
                        </Button>
                    </Link>
                </nav>
            </div>
        </header>
    );
}
