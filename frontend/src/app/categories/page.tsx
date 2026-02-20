import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Pencil, Folder, List } from "lucide-react";
import { categories } from "@/lib/data";

export default function CategoriesPage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                <h1 style={{ fontSize: '24px', fontWeight: 700 }}>Categorias</h1>
                <Button>
                    <Plus size={16} style={{ marginRight: '8px' }} /> Nova Categoria
                </Button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'white', padding: '16px', borderRadius: '8px', border: '1px solid #F1F5F9' }}>
                <div style={{ flex: 1, position: 'relative' }}>
                    <Search size={16} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF' }} />
                    <Input
                        type="search"
                        placeholder="Buscar categorias..."
                        style={{ paddingLeft: '32px', maxWidth: '300px' }}
                    />
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
                {categories.map((category) => (
                    <Card key={category.id}>
                        <CardContent style={{ padding: '24px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                                <div style={{
                                    padding: '12px',
                                    backgroundColor: 'rgba(37, 99, 235, 0.05)',
                                    color: 'var(--brand-primary)',
                                    borderRadius: '8px',
                                    display: 'flex'
                                }}>
                                    <Folder size={24} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#111827', margin: 0 }}>{category.name}</h3>
                                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px', gap: '8px' }}>
                                        <Badge variant={category.active ? "success" : "neutral"}>
                                            {category.active ? "Ativo" : "Inativo"}
                                        </Badge>
                                        <span style={{ fontSize: '12px', color: '#6B7280', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                            <List size={12} />
                                            {category.productsCount} produtos
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <Button variant="ghost" size="icon" style={{ height: '32px', width: '32px' }}>
                                <Pencil size={16} color="#9CA3AF" />
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
