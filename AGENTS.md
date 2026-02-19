# Guia para Agentes (DevAI)

Este documento serve como contexto e guia para agentes de IA que atuam no desenvolvimento do projeto **DevAI**. Ele consolida informações cruciais sobre regras de negócio, arquitetura técnica e estrutura atual.

## 1. Contexto do Produto

**DevAI** é uma plataforma de e-commerce simplificada para microempreendedores.
- **Objetivo**: Resolver a falta de controle em pedidos e pagamentos.
- **Solução**: Fluxo duplo (Vitrine para Cliente + Gestão para Empreendedor).
- **Perfis**:
  - **Cliente**: Visualiza vitrine, faz pedidos (não precisa de login para navegar, apenas para fechar).
  - **Administrador**: Gerencia produtos, categorias, clientes e pedidos.

> **Regra de Ouro**: Simplicidade Radical. O sistema deve ser extremamente fácil de usar.

Para detalhes completos de regras de negócio, consulte [docs/prd.md](docs/prd.md).

## 2. Documentação de Referência

Sempre baseie suas implementações nas especificações oficiais:
- **Regras de Negócio**: [docs/prd.md](docs/prd.md)
- **Interface e Fluxos**: [docs/spec_ui.md](docs/spec_ui.md)
- **Tecnologia e Arquitetura**: [docs/spec_tech.md](docs/spec_tech.md)

## 3. Stack Tecnológica (Frontend)

O frontend foi inicializado seguindo a stack definida em [docs/spec_tech.md](docs/spec_tech.md):

- **Framework**: Next.js 16+ (App Router).
- **Linguagem**: TypeScript.
- **Estilização**: Tailwind CSS (com Design System customizado).
- **Ícones**: Lucide React.
- **Utilitários**: `clsx`, `tailwind-merge`, `class-variance-authority`.

## 4. Estrutura do Projeto Frontend

O código-fonte reside em `frontend/src`. A estrutura deve ser mantida da seguinte forma:

```
frontend/src/
├── app/                  # App Router (páginas e layouts)
│   ├── cart/             # Rota: Carrinho de Compras (INT-03)
│   ├── login/            # Rota: Login (INT-02)
│   ├── features/         # (Reservado) Funcionalidades específicas
│   ├── globals.css       # Estilos globais e variéveis CSS
│   ├── layout.tsx        # Root Layout (com Header/Footer)
│   └── page.tsx          # Home/Vitrine (INT-01)
├── components/           # Componentes React
│   ├── features/         # Componentes de negócio (ex: ProductList)
│   ├── layout/           # Componentes estruturais (Header, Footer)
│   └── ui/               # Componentes base do Design System (Button, Badge, etc.)
└── lib/                  # Utilitários e lógica compartilhada
    ├── data.ts           # Dados mockados (temporário para MVP)
    └── utils.ts          # Helpers (cn, formatters)
```

## 5. Diretrizes de Desenvolvimento

Ao gerar código ou realizar refatorações, siga estas regras:

### Design System & UI
- **Não use cores hardcoded**. Utilize sempre os tokens do Tailwind configurados (`brand-*`, `surface-*`, `feedback-*`).
- Consulte [docs/spec_ui.md](docs/spec_ui.md) para especificações de componentes (ex: Badges de status).
- Mantenha a acessibilidade (tags semânticas, navegação por teclado).

### Padrões Técnicos
- **Simplicidade**: Evite over-engineering. O MVP deve ser funcional e direto.
- **Dados**: No estágio atual, use mocks em `src/lib/data.ts`. Não tente conectar a APIs externas a menos que solicitado.
- **Componentização**: Prefira componentes pequenos e reutilizáveis em `src/components/ui`.
- **Rotas**: Use o App Router do Next.js.

### Restrições Atuais
- O projeto opera em modo **monotenant** (premissa de MVP).
- Não há backend real conectado; toda a persistência é simulada ou local.
