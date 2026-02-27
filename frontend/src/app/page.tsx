import { products } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--text-main)' }}>Vitrine de Produtos</h1>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '24px',
        marginBottom: '64px'
      }}>
        {products.map((product) => (
          <Card key={product.id} className="product-card" style={{ display: 'flex', flexDirection: 'column' }}>
            <CardHeader style={{ padding: 0 }}>
              <div style={{ position: 'relative', aspectRatio: '1/1', width: '100%', overflow: 'hidden', backgroundColor: '#F9FAFB', borderRadius: '8px' }}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </CardHeader>
            <CardContent style={{ padding: '12px 0 0 0', flex: 1 }}>
              <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#9CA3AF', fontWeight: 700, marginBottom: '4px' }}>
                {product.category}
              </div>
              <CardTitle style={{ fontSize: '14px', fontWeight: 600, marginBottom: '8px', minHeight: '40px' }} className="product-card-title">
                {product.name}
              </CardTitle>
              <div className="product-card-price">
                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
              </div>
            </CardContent>
            <CardFooter style={{ padding: '12px 0 0 0' }}>
              <Button style={{ width: '100%' }}>
                Comprar
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Diferenciais Section */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '32px',
        padding: '48px 0',
        borderTop: '1px solid #F1F5F9'
      }}>
        {[
          { title: "Frete Inteligente", desc: "Logística otimizada por IA", icon: "🚚" },
          { title: "Segurança DevAI", desc: "Proteção antifraude avançada", icon: "🛡️" },
          { title: "Curadoria IA", desc: "Sugestões personalizadas", icon: "✨" },
          { title: "Suporte DevBot", desc: "Sempre pronto para ajudar", icon: "🤖" },
        ].map((item, idx) => (
          <div key={idx} style={{ textAlign: 'center' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: 'rgba(37, 99, 235, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              margin: '0 auto 16px auto'
            }}>
              {item.icon}
            </div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', marginBottom: '4px' }}>{item.title}</h3>
            <p style={{ fontSize: '14px', color: '#6B7280' }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
