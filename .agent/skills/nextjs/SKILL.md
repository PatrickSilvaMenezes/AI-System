---
name: nextjs
description: Agent Skill for Next.js App Router - Production Patterns, version 16.1.1.
---

# Next.js App Router Patterns

## Key Concepts and Code Snippets

### Caching and Revalidation
```typescript
"use cache"
revalidateTag()
updateTag()
refresh()
```

### Data Fetching and Params
```typescript
// ✅ Correct: await params and searchParams
export default async function Page({ params, searchParams }: { params: Promise<{ slug: string }> searchParams: Promise<{ query: string }>}) {
  const { slug } = await params // ✅ Await the promise
  const { query } = await searchParams // ✅ Await the promise
  return <div>{slug}</div>
}

// ❌ Before
import { cookies, headers } from 'next/headers'
export function MyComponent() {
  const cookieStore = cookies() // ❌ Sync access
  const headersList = headers() // ❌ Sync access
}
// ✅ After
import { cookies, headers } from 'next/headers'
export async function MyComponent() {
  const cookieStore = await cookies() // ✅ Async access
  const headersList = await headers() // ✅ Async access
}
```

### Middleware vs Proxy
```typescript
// middleware.ts ❌ Deprecated in Next.js 16
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  response.headers.set('x-custom-header', 'value')
  return response
}
export const config = { matcher: '/api/:path*',}

// proxy.ts ✅ New in Next.js 16
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
export function proxy(request: NextRequest) {
  const response = NextResponse.next()
  response.headers.set('x-custom-header', 'value')
  return response
}
export const config = { matcher: '/api/:path*',}
```

### Caching Strategies
```typescript
// app/components/expensive-component.tsx
'use cache'
export async function ExpensiveComponent() {
  const data = await fetch('https://api.example.com/data')
  const json = await data.json()
  return (
    <div>
      <h1>{json.title}</h1>
      <p>{json.description}</p>
    </div>
  )
}
```

### Local Data Fetching
```typescript
// lib/data.ts
'use cache'
export async function getExpensiveData(id: string) {
  const response = await fetch(`https://api.example.com/items/${id}`)
  return response.json()
}
// Usage in component
import { getExpensiveData } from '@/lib/data'
export async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = await getExpensiveData(id) // Cached
  return <div>{product.name}</div>
}
```

### Parallel Routes & Defaults
```typescript
// app/layout.tsx
export default function Layout({ children, auth, dashboard,}: { children: React.ReactNode auth: React.ReactNode dashboard: React.ReactNode}) {
  return ( <html> <body> {auth} {dashboard} {children} </body> </html> )
}

// app/@auth/default.tsx
export default function AuthDefault() { return null }
```

### Turbopack & Config
```typescript
// next.config.ts
const config: NextConfig = {
  experimental: { turbo: false, },
  images: {
    remotePatterns: [ { protocol: 'https', hostname: 'example.com', }, ],
  },
}
```

## When to Use This Skill
- Debugging or migrating an existing Next.js application to version 16.
- Implementing advanced patterns like caching strategies and optimized route handlers.
- Understanding the implications of React 19 features in Next.js 16.

## Pro Tips
- 💡 Review 'Next.js 16 Breaking Changes' before upgrade.
- 💡 Leverage `use cache` for performance.
- 💡 Use Turbopack for faster dev builds.

## Recommended Workflows
- **Ultimate Next.js SEO Setup**: Complete checklist for sitemap, robots, manifest.

## Recommended MCP Servers
- **CTERA Edge Filer**: Intelligent edge caching.

## How to Use
### For Claude Code (CLI)
Copy rule content to custom instructions or use Add-Skill CLI.

### For Cursor & Windsurf
Use in "Rules for AI" section.

[Read the Master Guide: Mastering Agent Skills](https://antigravity.codes/blog/mastering-agent-skills)
