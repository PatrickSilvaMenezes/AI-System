import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function LoginPage() {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 'calc(100vh - 200px)' }}>
            <Card style={{ width: '100%', maxWidth: '400px' }}>
                <CardHeader>
                    <CardTitle style={{ textAlign: 'center', fontSize: '24px' }}>Acesse sua conta</CardTitle>
                    <CardDescription style={{ textAlign: 'center' }}>
                        Entre com seu e-mail e senha para continuar
                    </CardDescription>
                </CardHeader>
                <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label htmlFor="email" style={{ fontSize: '14px', fontWeight: 500 }}>
                            E-mail
                        </label>
                        <Input id="email" type="email" placeholder="seu@email.com" />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <label htmlFor="password" style={{ fontSize: '14px', fontWeight: 500 }}>
                            Senha
                        </label>
                        <Input id="password" type="password" />
                    </div>
                </CardContent>
                <CardFooter style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <Button style={{ width: '100%', height: '48px', fontSize: '18px' }}>Entrar</Button>
                    <div style={{ fontSize: '14px', textAlign: 'center', color: '#6B7280' }}>
                        Não tem uma conta?{" "}
                        <Link href="/register" style={{ color: 'var(--brand-primary)', fontWeight: 500 }}>
                            Criar conta
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
