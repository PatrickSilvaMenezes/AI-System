import { products } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-text-main">Vitrine de Produtos</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="group overflow-hidden bg-white hover:shadow-lg transition-all duration-300 border-gray-200">
            <CardHeader className="p-0">
              <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
                {/* Using standard img for simplicity in mock, would use Image in prod */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="text-sm text-gray-500 mb-1">{product.category}</div>
              <CardTitle className="text-lg font-semibold line-clamp-1 mb-2 text-text-main group-hover:text-brand-primary transition-colors">
                {product.name}
              </CardTitle>
              <div className="text-2xl font-bold text-brand-primary">
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full font-semibold shadow-sm hover:shadow-md transition-all">
                Adicionar ao Carrinho
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
