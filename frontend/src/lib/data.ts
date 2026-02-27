export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
    stock: number;
}

export interface Order {
    id: string;
    customer: string;
    date: string;
    total: number;
    status: string;
}

export interface Category {
    id: string;
    name: string;
    active: boolean;
    productsCount: number;
}

export const products: Product[] = [
    {
        id: "1",
        name: "Smartwatch Series 5 Pro",
        price: 899.90,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop",
        category: "Tecnologia",
        stock: 15
    },
    {
        id: "2",
        name: "Tênis Esportivo Runner X",
        price: 349.90,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop",
        category: "Calçados",
        stock: 22
    },
    {
        id: "3",
        name: "Headphone Wireless Bass Boost",
        price: 599.90,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
        category: "Áudio",
        stock: 8
    },
    {
        id: "4",
        name: "Jaqueta de Lã Premium",
        price: 450.00,
        image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=1000&auto=format&fit=crop",
        category: "Moda",
        stock: 12
    },
    {
        id: "5",
        name: "Luminária de Mesa Articulada",
        price: 189.90,
        image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=1000&auto=format&fit=crop",
        category: "Casa",
        stock: 30
    },
    {
        id: "6",
        name: "Kit Mini Suculentas Naturais",
        price: 79.90,
        image: "https://images.unsplash.com/photo-1446071103084-c257b5f70672?q=80&w=1000&auto=format&fit=crop",
        category: "Decoração",
        stock: 45
    }
];

export const clients = [
    { id: "1", name: "João Silva", email: "joao@email.com", phone: "(11) 99999-9999", city: "São Paulo", state: "SP" },
    { id: "2", name: "Maria Souza", email: "maria@email.com", phone: "(21) 98888-8888", city: "Rio de Janeiro", state: "RJ" },
    { id: "3", name: "Carlos Oliveira", email: "carlos@email.com", phone: "(31) 97777-7777", city: "Belo Horizonte", state: "MG" },
    { id: "4", name: "Ana Costa", email: "ana@email.com", phone: "(41) 96666-6666", city: "Curitiba", state: "PR" },
    { id: "5", name: "Pedro Santos", email: "pedro@email.com", phone: "(51) 95555-5555", city: "Porto Alegre", state: "RS" },
];

export const orders: Order[] = [
    { id: "PED-001", customer: "João Silva", date: "19/02/2026", total: 150.00, status: "Novo" },
    { id: "PED-002", customer: "Maria Souza", date: "18/02/2026", total: 450.00, status: "Pago" },
    { id: "PED-003", customer: "Carlos Oliveira", date: "18/02/2026", total: 89.90, status: "Preparação" },
    { id: "PED-004", customer: "Ana Costa", date: "17/02/2026", total: 1200.00, status: "Entregue" },
    { id: "PED-005", customer: "Pedro Santos", date: "16/02/2026", total: 32.50, status: "Cancelado" },
    { id: "PED-006", customer: "João Silva", date: "15/02/2026", total: 210.00, status: "Entregue" },
    { id: "PED-007", customer: "Maria Souza", date: "14/02/2026", total: 99.90, status: "Entregue" },
];

export const categories: Category[] = [
    { id: "1", name: "Roupas", active: true, productsCount: 20 },
    { id: "2", name: "Calçados", active: true, productsCount: 15 },
    { id: "3", name: "Acessórios", active: true, productsCount: 35 },
    { id: "4", name: "Eletrônicos", active: true, productsCount: 10 },
    { id: "5", name: "Utilidades", active: true, productsCount: 8 },
    { id: "6", name: "Móveis", active: false, productsCount: 0 },
];

