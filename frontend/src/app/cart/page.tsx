import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import { products } from "@/lib/data";
import { SignedIn, SignedOut, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";


// Mock cart items based on products
const cartItems = [
    { ...products[0], quantity: 2 },
    { ...products[2], quantity: 1 }
];

export default function CartPage() {
    const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <section className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-text-main">Carrinho de Compras</h1>

            <div className="grid gap-8 md:grid-cols-3">
                <div className="md:col-span-2 space-y-4">
                    {cartItems.map((item) => (
                        <Card key={item.id} className="flex flex-row items-center p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 relative">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover object-center"
                                />
                            </div>
                            <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>{item.name}</h3>
                                        <p className="ml-4">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.price * item.quantity)}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qtd {item.quantity}</p>
                                    <div className="flex">
                                        <Button variant="ghost" size="sm" className="text-feedback-error hover:text-red-700 hover:bg-red-50 p-2 h-auto">
                                            <Trash2 className="h-4 w-4 mr-1" />
                                            Excluir
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="md:col-span-1">
                    <Card className="bg-white p-6 shadow-md sticky top-24">
                        <CardTitle className="text-lg font-medium text-gray-900 mb-4">Resumo do Pedido</CardTitle>
                        <div className="flow-root">
                            <dl className="-my-4 divide-y divide-gray-200 text-sm">
                                <div className="flex items-center justify-between py-4">
                                    <dt className="text-gray-600">Subtotal</dt>
                                    <dd className="font-medium text-gray-900">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}</dd>
                                </div>
                                <div className="flex items-center justify-between py-4 border-t border-gray-200">
                                    <dt className="text-base font-bold text-gray-900">Total</dt>
                                    <dd className="text-xl font-bold text-brand-primary">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(total)}</dd>
                                </div>
                            </dl>
                        </div>
                        <div className="mt-6">
                            <SignedIn>
                                <Button className="w-full text-lg h-12 shadow-md">Confirmar Pedido</Button>
                            </SignedIn>
                            <SignedOut>
                                <SignUpButton mode="modal">
                                    <Button className="w-full text-lg h-12 shadow-md">Finalizar Compra</Button>
                                </SignUpButton>
                            </SignedOut>
                        </div>

                    </Card>
                </div>
            </div>
        </section>
    );
}
