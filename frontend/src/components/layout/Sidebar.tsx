"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, Users, ShoppingBag, Folder } from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
    { name: "Todos os Produtos", href: "/", icon: Package, section: "vitrine" },
    { name: "Lançamentos", href: "/#new", icon: Folder, section: "vitrine" },
    { name: "Mais Vendidos", href: "/#trending", icon: ShoppingBag, section: "vitrine" },
    { name: "Promoções", href: "/#sales", icon: ShoppingBag, section: "vitrine" },
];

const adminItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Categorias", href: "/categories", icon: Folder },
    { name: "Produtos", href: "/products", icon: Package },
    { name: "Clientes", href: "/clients", icon: Users },
    { name: "Pedidos", href: "/orders", icon: ShoppingBag },
];

export default function AppSidebar() {
    const pathname = usePathname();

    if (pathname === "/login") return null;

    const getLinkStyle = (isActive: boolean) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '8px 12px',
        fontSize: '14px',
        fontWeight: 500,
        borderRadius: '8px',
        transition: 'all 0.2s',
        backgroundColor: isActive ? 'rgba(37, 99, 235, 0.1)' : 'transparent',
        color: isActive ? 'var(--brand-primary)' : '#4B5563',
        marginBottom: '4px'
    });

    return (
        <aside style={{
            width: '256px',
            flexShrink: 0,
            borderRight: '1px solid #F1F5F9',
            paddingRight: '24px'
        }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                    <h3 style={{
                        padding: '0 12px',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#9CA3AF',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: '8px'
                    }}>Vitrine</h3>
                    <nav>
                        {navigationItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    style={getLinkStyle(isActive)}
                                >
                                    <item.icon size={20} color={isActive ? 'var(--brand-primary)' : '#9CA3AF'} />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                <div>
                    <h3 style={{
                        padding: '0 12px',
                        fontSize: '12px',
                        fontWeight: 600,
                        color: '#9CA3AF',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: '8px'
                    }}>Administração</h3>
                    <nav>
                        {adminItems.map((item) => {
                            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    style={getLinkStyle(isActive)}
                                >
                                    <item.icon size={20} color={isActive ? 'var(--brand-primary)' : '#9CA3AF'} />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </aside>
    );
}
