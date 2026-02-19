export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
}

export const products: Product[] = [
    { id: "1", name: "Camiseta Básica", price: 49.90, image: "https://placehold.co/400x400/2563EB/FFFFFF/png?text=Camiseta", category: "Roupas" },
    { id: "2", name: "Tênis Esportivo", price: 199.90, image: "https://placehold.co/400x400/2563EB/FFFFFF/png?text=Tenis", category: "Calçados" },
    { id: "3", name: "Relógio Digital", price: 129.90, image: "https://placehold.co/400x400/2563EB/FFFFFF/png?text=Relogio", category: "Acessórios" },
    { id: "4", name: "Boné Trucker", price: 39.90, image: "https://placehold.co/400x400/2563EB/FFFFFF/png?text=Bone", category: "Acessórios" },
    { id: "5", name: "Jaqueta Jeans", price: 159.90, image: "https://placehold.co/400x400/2563EB/FFFFFF/png?text=Jaqueta", category: "Roupas" },
    { id: "6", name: "Mochila Escolar", price: 89.90, image: "https://placehold.co/400x400/2563EB/FFFFFF/png?text=Mochila", category: "Acessórios" },
    { id: "7", name: "Fone de Ouvido", price: 59.90, image: "https://placehold.co/400x400/2563EB/FFFFFF/png?text=Fone", category: "Eletrônicos" },
    { id: "8", name: "Garrafa Térmica", price: 29.90, image: "https://placehold.co/400x400/2563EB/FFFFFF/png?text=Garrafa", category: "Utilidades" },
];
