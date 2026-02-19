# DevAI Frontend 🛍️

> Interface moderna e acessível para o e-commerce de microempreendedores DevAI.

![Project Status](https://img.shields.io/badge/status-development-orange)
![License](https://img.shields.io/badge/license-MIT-blue)
![Next.js](https://img.shields.io/badge/Next.js-16.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

## 📖 Sobre o Projeto

O **DevAI Frontend** é a camada de interface do usuário para a plataforma DevAI. Focado na simplicidade radical e eficiência para microempreendedores, o projeto implementa um Design System rigoroso e utiliza as mais recentes tecnologias do ecossistema React.

Este projeto segue as especificações de UI (`INT-01` a `INT-03`) e diretrizes técnicas definidas na documentação do sistema.

## 🚀 Tecnologias

O projeto foi desenvolvido com as seguintes tecnologias:

- [Next.js 16](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) (Ícones)
- [Class Variance Authority](https://cva.style/) (Variantes de componentes)

## 📦 Funcionalidades Implementadas

- **Vitrine de Produtos (Home)**: Visualização de produtos em grid com cards interativos e responsivos.
- **Carrinho de Compras**: Gerenciamento de itens, resumo de valores e simulação de pedido.
- **Autenticação (UI)**: Interface de login moderna e acessível.
- **Design System**: Implementação fiel de tokens de cor, tipografia e componentes base (Botões, Inputs, Cards, Badges).

## 🛠️ Instalação e Execução

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (v18 ou superior)
- [npm](https://www.npmjs.com/)

### Passo a passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/AI-System.git
   cd AI-System/frontend
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse o projeto**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📂 Estrutura do Projeto

```
frontend/
├── src/
│   ├── app/                 # Rotas e Páginas (App Router)
│   │   ├── cart/            # Página do Carrinho
│   │   ├── login/           # Página de Login
│   │   ├── layout.tsx       # Layout raiz (RootLayout)
│   │   └── page.tsx         # Página Principal (Home)
│   ├── components/
│   │   ├── layout/          # Header, Footer, etc.
│   │   └── ui/              # Componentes do Design System (Button, Card, Input...)
│   ├── lib/                 # Utilitários e Dados Mockados
│   └── styles/              # Estilos globais
├── public/                  # Arquivos estáticos
├── tailwind.config.ts       # Configuração de tokens e temas
└── package.json
```

## 🎨 Design System

O projeto utiliza uma paleta de cores semântica definida em `tailwind.config.ts`:

- **Primary**: `#2563EB` (Ações principais)
- **Surface**: `#F9FAFB` (Fundos de área)
- **Feedback**:  `#10B981` (Sucesso), `#EF4444` (Erro)
- **Text**: `#111827` (Cor principal do texto)

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor, leia as diretrizes de contribuição antes de enviar um Pull Request.

1. Faça um Fork do projeto
2. Crie sua Feature Branch (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona: MinhaFeature'`)
4. Push para a Branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença [MIT](./LICENSE).

---
Desenvolvido com 💙 por DevAI Team
