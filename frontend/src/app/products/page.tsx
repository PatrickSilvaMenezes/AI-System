import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { products } from "@/lib/data";
import { Search, Plus, Pencil, Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ProductsPage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                <h1 style={{ fontSize: '24px', fontWeight: 700 }}>Produtos</h1>
                <Button>
                    <Plus size={16} style={{ marginRight: '8px' }} /> Novo Produto
                </Button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'white', padding: '16px', borderRadius: '8px', border: '1px solid #F1F5F9' }}>
                <div style={{ flex: 1, position: 'relative' }}>
                    <Search size={16} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF' }} />
                    <Input
                        type="search"
                        placeholder="Buscar produtos..."
                        style={{ paddingLeft: '32px', maxWidth: '300px' }}
                    />
                </div>
            </div>

            <div style={{ display: 'grid', gap: '16px' }}>
                {products.map((product) => (
                    <Card key={product.id}>
                        <CardContent style={{ padding: 0 }}>
                            <div style={{ display: 'flex', alignItems: 'center', padding: '16px' }}>
                                <div style={{ height: '64px', width: '64px', backgroundColor: '#F9FAFB', borderRadius: '8px', overflow: 'hidden', flexShrink: 0 }}>
                                    <img src={product.image} alt={product.name} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ marginLeft: '16px', flex: 1, minWidth: 0 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                                        <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', margin: 0 }}>{product.name}</h3>
                                        <Badge variant={product.stock > 0 ? "success" : "error"}>
                                            {product.stock > 0 ? "Ativo" : "Inativo"}
                                        </Badge>
                                    </div>
                                    <div style={{ display: 'flex', gap: '16px', fontSize: '14px', color: '#6B7280' }}>
                                        <span>Categoria: {product.category}</span>
                                        <span>Estoque: {product.stock} un.</span>
                                        <span style={{ fontWeight: 600, color: 'var(--brand-primary)' }}>
                                            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
                                        </span>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '16px' }}>
                                    <Button variant="ghost" size="icon" style={{ height: '32px', width: '32px' }}>
                                        <Pencil size={16} color="#6B7280" />
                                    </Button>
                                    <Button variant="ghost" size="icon" style={{ height: '32px', width: '32px' }}>
                                        <Trash2 size={16} color="#EF4444" />
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
