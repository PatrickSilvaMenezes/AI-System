import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Eye } from "lucide-react";
import { orders } from "@/lib/data";

const getStatusVariant = (status: string) => {
    switch (status) {
        case "Novo": return "neutral";
        case "Pago": return "success";
        case "Preparação": return "info";
        case "Faturado": return "info";
        case "Despachado": return "info";
        case "Entregue": return "success";
        case "Cancelado": return "destructive";
        default: return "default";
    }
};

export default function OrdersPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight text-text-main">Pedidos</h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                        type="search"
                        placeholder="Buscar por número ou cliente..."
                        className="pl-8"
                    />
                </div>
                <Button variant="outline" className="sm:w-auto">
                    <Filter className="mr-2 h-4 w-4" />
                    Filtrar Status
                </Button>
            </div>

            <Card className="bg-white shadow-sm border-gray-200 overflow-hidden">
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-50 text-gray-500 uppercase border-b">
                                <tr>
                                    <th className="px-6 py-4 font-medium">Pedido</th>
                                    <th className="px-6 py-4 font-medium">Cliente</th>
                                    <th className="px-6 py-4 font-medium">Data</th>
                                    <th className="px-6 py-4 font-medium">Total</th>
                                    <th className="px-6 py-4 font-medium">Status</th>
                                    <th className="px-6 py-4 font-medium text-right">Ações</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {orders.map((order) => (
                                    <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-gray-900">{order.id}</td>
                                        <td className="px-6 py-4 text-gray-600">{order.customer}</td>
                                        <td className="px-6 py-4 text-gray-600">{order.date}</td>
                                        <td className="px-6 py-4 text-gray-900 font-medium">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(order.total)}</td>
                                        <td className="px-6 py-4">
                                            <Badge variant={getStatusVariant(order.status) as any}>
                                                {order.status}
                                            </Badge>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                                <Eye className="h-4 w-4 text-gray-500" />
                                                <span className="sr-only">Ver detalhes</span>
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
