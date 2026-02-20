import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, ShoppingBag } from "lucide-react";

import { orders as allOrders } from "@/lib/data";

const dashboardStats = [
    {
        title: "Total de Vendas",
        value: "R$ 12.450,00",
        description: "+12.5% em relação ao mês anterior",
        icon: TrendingUp,
        color: "var(--brand-primary)",
    },
    {
        title: "Pedidos Realizados",
        value: "86",
        description: "+18 novos hoje",
        icon: ShoppingBag,
        color: "var(--brand-primary)",
    },
    {
        title: "Ticket Médio",
        value: "R$ 144,76",
        description: "-2.1% em relação ao mês anterior",
        icon: DollarSign,
        color: "var(--brand-primary)",
    },
];

const recentOrders = allOrders.slice(0, 5);

const getStatusVariant = (status: string) => {
    switch (status) {
        case "Novo": return "neutral";
        case "Pago": return "success";
        case "Entregue": return "success";
        case "Cancelado": return "error";
        default: return "neutral";
    }
};

export default function DashboardPage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h1 style={{ fontSize: '24px', fontWeight: 700 }}>Dashboard</h1>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
                {dashboardStats.map((stat, index) => (
                    <Card key={index}>
                        <CardHeader style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '8px' }}>
                            <CardTitle style={{ fontSize: '14px', fontWeight: 500, color: '#6B7280' }}>
                                {stat.title}
                            </CardTitle>
                            <stat.icon size={16} color={stat.color} />
                        </CardHeader>
                        <CardContent>
                            <div style={{ fontSize: '24px', fontWeight: 700, color: '#111827' }}>{stat.value}</div>
                            <p style={{ fontSize: '12px', color: '#6B7280', marginTop: '4px' }}>{stat.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div>
                <Card>
                    <CardHeader>
                        <CardTitle>Últimos Pedidos</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', textAlign: 'left' }}>
                                <thead style={{ backgroundColor: '#F9FAFB', color: '#6B7280', textTransform: 'uppercase' }}>
                                    <tr>
                                        <th style={{ padding: '12px 16px', fontWeight: 500 }}>Pedido</th>
                                        <th style={{ padding: '12px 16px', fontWeight: 500 }}>Cliente</th>
                                        <th style={{ padding: '12px 16px', fontWeight: 500 }}>Data</th>
                                        <th style={{ padding: '12px 16px', fontWeight: 500 }}>Total</th>
                                        <th style={{ padding: '12px 16px', fontWeight: 500 }}>Status</th>
                                    </tr>
                                </thead>
                                <tbody style={{ color: '#4B5563' }}>
                                    {recentOrders.map((order: any) => (
                                        <tr key={order.id} style={{ borderTop: '1px solid #F1F5F9' }}>
                                            <td style={{ padding: '12px 16px', fontWeight: 500, color: '#111827' }}>{order.id}</td>
                                            <td style={{ padding: '12px 16px' }}>{order.customer}</td>
                                            <td style={{ padding: '12px 16px' }}>{order.date}</td>
                                            <td style={{ padding: '12px 16px', fontWeight: 500, color: '#111827' }}>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(order.total)}</td>
                                            <td style={{ padding: '12px 16px' }}>
                                                <Badge variant={getStatusVariant(order.status) as any}>
                                                    {order.status}
                                                </Badge>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
