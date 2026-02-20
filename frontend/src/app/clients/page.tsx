import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Plus, User, Pencil, Trash2 } from "lucide-react";
import { clients } from "@/lib/data";

export default function ClientsPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <h1 className="text-3xl font-bold tracking-tight text-text-main">Clientes</h1>
                <Button className="w-full sm:w-auto">
                    <Plus className="mr-2 h-4 w-4" /> Novo Cliente
                </Button>
            </div>

            <div className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                        type="search"
                        placeholder="Buscar clientes..."
                        className="pl-8 w-full max-w-sm"
                    />
                </div>
            </div>

            <div className="grid gap-4">
                {clients.map((client) => (
                    <Card key={client.id} className="bg-white hover:shadow-md transition-shadow">
                        <CardContent className="p-4 flex flex-col sm:flex-row items-center gap-4">
                            <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                                <User className="h-6 w-6 text-gray-500" />
                            </div>

                            <div className="flex-1 min-w-0 text-center sm:text-left">
                                <h3 className="text-lg font-semibold text-gray-900 truncate">{client.name}</h3>
                                <div className="text-sm text-gray-500 flex flex-col sm:flex-row sm:gap-4">
                                    <span>{client.email}</span>
                                    <span className="hidden sm:inline">•</span>
                                    <span>{client.phone}</span>
                                </div>
                                <div className="text-xs text-gray-400 mt-1">
                                    {client.city} - {client.state}
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-brand-primary">
                                    <Pencil className="h-4 w-4" />
                                    <span className="sr-only">Editar</span>
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-500 hover:text-feedback-error">
                                    <Trash2 className="h-4 w-4" />
                                    <span className="sr-only">Excluir</span>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
