import { ShoppingBag } from "lucide-react";

export function Footer() {
    return (
        <footer style={{
            borderTop: '1px solid #F1F5F9',
            padding: '48px 0',
            backgroundColor: '#F9FAFB'
        }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '48px' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                            <div style={{
                                backgroundColor: 'var(--brand-primary)',
                                color: 'white',
                                padding: '6px',
                                borderRadius: '8px',
                                display: 'flex'
                            }}>
                                <ShoppingBag size={20} />
                            </div>
                            <span style={{
                                fontSize: '20px',
                                fontWeight: 900,
                                letterSpacing: '-0.025em',
                                color: 'var(--text-main)'
                            }}>
                                SYSTEM<span style={{ color: 'var(--brand-primary)' }}>AI</span>
                            </span>
                        </div>
                        <p style={{
                            fontSize: '14px',
                            color: '#6B7280',
                            maxWidth: '300px',
                            lineHeight: '1.6'
                        }}>
                            Plataforma inteligente para gestão e venda de produtos,
                            especialmente desenhada para microempreendedores.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
