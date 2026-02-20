---
name: vercel
description: Skill para deploy de aplicações na Vercel utilizando o time CloudTeam (patrick-silva-menezes-projects).
---

# Vercel Deployment Skill

Este skill permite realizar o deploy da aplicação `frontend` diretamente para o time **CloudTeam** na Vercel.

## Configuração

O skill utiliza o token definido em `.env.local` (`VERCEL_API_TOKEN`).

## Comandos

### Deploy para Produção

```bash
npx vercel deploy --prod --yes --token $VERCEL_API_TOKEN --scope patrick-silva-menezes-projects
```

### Link do Projeto

```bash
npx vercel link --yes --token $VERCEL_API_TOKEN --scope patrick-silva-menezes-projects
```

## Informações do Time
- **Nome:** CloudTeam
- **Slug:** patrick-silva-menezes-projects
- **ID:** team_o9MDeZgXAsxwvQAmtmuXook7
