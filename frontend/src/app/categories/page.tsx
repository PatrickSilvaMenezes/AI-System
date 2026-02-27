"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Pencil, Folder, List, Loader2, Trash2, Check, X } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { type Category } from "@/lib/data";

export default function CategoriesPage() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editName, setEditName] = useState("");

    useEffect(() => {
        fetchCategories();
    }, []);

    async function fetchCategories() {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from('categories')
                .select(`
                    *,
                    products:products(count)
                `)
                .order('name');

            if (error) throw error;

            const formatted: Category[] = data?.map(cat => ({
                id: cat.id,
                name: cat.name,
                active: cat.active,
                productsCount: cat.products?.[0]?.count || 0
            })) || [];

            setCategories(formatted);
        } catch (error) {
            console.error('Error fetching categories:', error);
        } finally {
            setLoading(false);
        }
    }

    async function handleDelete(id: string, productsCount: number) {
        if (productsCount > 0) {
            alert("Não é possível remover uma categoria que possui produtos vinculados.");
            return;
        }

        if (!confirm("Tem certeza que deseja remover esta categoria?")) return;

        try {
            const { error } = await supabase
                .from('categories')
                .delete()
                .eq('id', id);

            if (error) throw error;
            setCategories(categories.filter(c => c.id !== id));
        } catch (error) {
            console.error('Error deleting category:', error);
            alert("Erro ao remover categoria.");
        }
    }

    async function handleEdit(category: Category) {
        setEditingId(category.id);
        setEditName(category.name);
    }

    async function saveEdit() {
        if (!editingId || !editName.trim()) return;

        try {
            const { error } = await supabase
                .from('categories')
                .update({ name: editName })
                .eq('id', editingId);

            if (error) throw error;

            setCategories(categories.map(c =>
                c.id === editingId ? { ...c, name: editName } : c
            ));
            setEditingId(null);
        } catch (error) {
            console.error('Error updating category:', error);
            alert("Erro ao atualizar categoria.");
        }
    }

    const filteredCategories = categories.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase())
    );

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
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
                    {filteredCategories.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '40px', color: '#6B7280', gridColumn: '1 / -1' }}>
                            Nenhuma categoria encontrada.
                        </div>
                    ) : (
                        filteredCategories.map((category) => (
                            <Card key={category.id}>
                                <CardContent style={{ padding: '24px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', flex: 1 }}>
                                        <div style={{
                                            padding: '12px',
                                            backgroundColor: 'rgba(37, 99, 235, 0.05)',
                                            color: 'var(--brand-primary)',
                                            borderRadius: '8px',
                                            display: 'flex'
                                        }}>
                                            <Folder size={24} />
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            {editingId === category.id ? (
                                                <Input
                                                    value={editName}
                                                    onChange={e => setEditName(e.target.value)}
                                                    style={{ marginBottom: '8px' }}
                                                />
                                            ) : (
                                                <>
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
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: '4px' }}>
                                        {editingId === category.id ? (
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
                                                <Button variant="ghost" size="icon" onClick={() => handleEdit(category)}>
                                                    <Pencil size={16} color="#9CA3AF" />
                                                </Button>
                                                <Button variant="ghost" size="icon" onClick={() => handleDelete(category.id, category.productsCount)}>
                                                    <Trash2 size={16} color="#EF4444" />
                                                </Button>
                                            </>
                                        )}
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
