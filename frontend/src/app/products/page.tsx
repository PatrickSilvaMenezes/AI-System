"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Pencil, Trash2, Loader2, X, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";
import Image from "next/image";

interface Product {
    id: string;
    name: string;
    image: string;
    stock: number;
    price: number;
    category_id: string;
    categories: {
        name: string;
    } | null;
}

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editForm, setEditForm] = useState({ name: "", price: 0, stock: 0 });

    useEffect(() => {
        fetchProducts();
    }, []);

    async function fetchProducts() {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from('products')
                .select('*, categories(name)')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setProducts(data || []);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    }

    async function handleDelete(id: string) {
        if (!confirm("Tem certeza que deseja remover este produto?")) return;

        try {
            const { error } = await supabase
                .from('products')
                .delete()
                .eq('id', id);

            if (error) throw error;
            setProducts(products.filter(p => p.id !== id));
        } catch (error) {
            console.error('Error deleting product:', error);
            alert("Erro ao remover produto.");
        }
    }

    async function handleEdit(product: Product) {
        setEditingId(product.id);
        setEditForm({ name: product.name, price: Number(product.price), stock: product.stock });
    }

    async function saveEdit() {
        if (!editingId) return;

        try {
            const { error } = await supabase
                .from('products')
                .update({
                    name: editForm.name,
                    price: editForm.price,
                    stock: editForm.stock
                })
                .eq('id', editingId);

            if (error) throw error;

            setProducts(products.map(p =>
                p.id === editingId ? { ...p, ...editForm } : p
            ));
            setEditingId(null);
        } catch (error) {
            console.error('Error updating product:', error);
            alert("Erro ao atualizar produto.");
        }
    }

    const filteredProducts = products.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
    );

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
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            {loading ? (
                <div style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}>
                    <Loader2 className="animate-spin" size={32} color="var(--brand-primary)" />
                </div>
            ) : (
                <div style={{ display: 'grid', gap: '16px' }}>
                    {filteredProducts.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '40px', color: '#6B7280' }}>
                            Nenhum produto encontrado.
                        </div>
                    ) : (
                        filteredProducts.map((product) => (
                            <Card key={product.id}>
                                <CardContent style={{ padding: 0 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', padding: '16px' }}>
                                        <div style={{ height: '64px', width: '64px', backgroundColor: '#F9FAFB', borderRadius: '8px', overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
                                            <Image
                                                src={product.image || 'https://via.placeholder.com/64'}
                                                alt={product.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>

                                        <div style={{ marginLeft: '16px', flex: 1, minWidth: 0 }}>
                                            {editingId === product.id ? (
                                                <div style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
                                                    <Input
                                                        value={editForm.name}
                                                        onChange={e => setEditForm({ ...editForm, name: e.target.value })}
                                                        placeholder="Nome do produto"
                                                    />
                                                    <div style={{ display: 'flex', gap: '8px' }}>
                                                        <Input
                                                            type="number"
                                                            value={editForm.price}
                                                            onChange={e => setEditForm({ ...editForm, price: Number(e.target.value) })}
                                                            placeholder="Preço"
                                                        />
                                                        <Input
                                                            type="number"
                                                            value={editForm.stock}
                                                            onChange={e => setEditForm({ ...editForm, stock: Number(e.target.value) })}
                                                            placeholder="Estoque"
                                                        />
                                                    </div>
                                                </div>
                                            ) : (
                                                <>
                                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                                                        <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', margin: 0 }}>{product.name}</h3>
                                                        <Badge variant={product.stock > 0 ? "success" : "error"}>
                                                            {product.stock > 0 ? "Ativo" : "Inativo"}
                                                        </Badge>
                                                    </div>
                                                    <div style={{ display: 'flex', gap: '16px', fontSize: '14px', color: '#6B7280' }}>
                                                        <span>Categoria: {product.categories?.name || 'Sem categoria'}</span>
                                                        <span>Estoque: {product.stock} un.</span>
                                                        <span style={{ fontWeight: 600, color: 'var(--brand-primary)' }}>
                                                            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
                                                        </span>
                                                    </div>
                                                </>
                                            )}
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: '16px' }}>
                                            {editingId === product.id ? (
                                                <>
                                                    <Button variant="ghost" size="icon" onClick={saveEdit}>
                                                        <Check size={16} color="#10B981" />
                                                    </Button>
                                                    <Button variant="ghost" size="icon" onClick={() => setEditingId(null)}>
                                                        <X size={16} color="#EF4444" />
                                                    </Button>
                                                </>
                                            ) : (
                                                <>
                                                    <Button variant="ghost" size="icon" onClick={() => handleEdit(product)}>
                                                        <Pencil size={16} color="#6B7280" />
                                                    </Button>
                                                    <Button variant="ghost" size="icon" onClick={() => handleDelete(product.id)}>
                                                        <Trash2 size={16} color="#EF4444" />
                                                    </Button>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}
