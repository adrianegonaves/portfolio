
# Portfolio — Adriane Gonçalves

Site pessoal **full-stack** em **Next.js 16**, **Node.js** (Server Actions), **React 19**, **Tailwind CSS 4**, **next-intl** (pt/en), **Zod** e **Resend**.

## Desenvolvimento

```bash
cd portfolio
yarn install
yarn dev
```

> Use **só Yarn** neste projeto (`yarn.lock`). Misturar `npm install` e `yarn` corrompe `node_modules` e causa erros como `Cannot find module '@swc/helpers'` ou `next-intl`.

### Se `yarn dev` falhar

```bash
pkill -f "next dev"   # para servidores antigos
rm -rf .next node_modules
yarn install
yarn dev
```

Idiomas: `/pt` (Portugal), `/pt-BR` (Brasil), `/en`. A raiz redireciona para `/pt`.

Abra [http://localhost:3000/pt-BR](http://localhost:3000/pt-BR) para português do Brasil.

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha as chaves (Resend).

## Estrutura (`src/`)

| Pasta | Uso |
|-------|-----|
| `app/[locale]/` | Rotas, layout, Server Actions |
| `components/sections/` | Hero, About, Projects, Experience, Contact |
| `components/layout/` | Menu, tema, idioma, sublinhado de títulos |
| `components/contact/` | Formulário e ilustração SVG |
| `components/ui/` | shadcn |
| `content/` | Dados estáticos (site, projetos, experiência, skills) |
| `messages/` | Traduções `pt`, `pt-BR`, `en` |
| `i18n/` | next-intl (routing, request) |
| `lib/` | Utilitários e validações Zod |

## Conteúdo e links

- `src/content/site.ts` — contactos e projetos  
- `src/content/experience.ts` — ordem das experiências  
- `src/content/skills.ts` — competências na secção About  
- Traduções: `src/messages/*.json`

## Scripts

- `yarn dev` — servidor de desenvolvimento
- `yarn build` — build de produção
- `yarn lint` — ESLint
>>>>>>> 5311af3 (Refactor code structure for improved readability and maintainability)
