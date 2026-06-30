# ELEMENTAL — Entrega completa

Sistema de marca, web, portafolio y plan de contenido para ELEMENTAL, consultora creativo-tecnológica.

---

## 📦 Contenido de este ZIP

### 1. `sitio-web/` — Sitio web Next.js 16 (bilingüe ES/EN)
Aplicación completa lista para producción. Para ejecutar localmente:
```bash
cd sitio-web
bun install   # o npm install
bun run dev   # abre http://localhost:3000
```

**Características:**
- Dark premium (#0D0D0D + acentos lima #C8D400)
- Bilingüe ES/EN con switch persistente
- 10 secciones en single-page: Hero, Servicios, IA & Automatización, Calculadora ROI, Portafolio, Diagnóstico IA, Blog, Contacto
- Logo real integrado en header, footer y mobile menu
- WhatsApp +57 301 4069793 configurado en todos los CTAs
- Formularios con validación (react-hook-form + zod)
- Animaciones con framer-motion
- Mobile-first responsive

### 2. `documentos/` — PDFs y Excel entregables
- `ELEMENTAL_BrandBook.pdf` — Manual de marca (11 págs, 332 KB)
- `ELEMENTAL_Propuesta_Comercial.pdf` — Propuesta con paquetes USD (11 págs, 397 KB)
- `ELEMENTAL_Portafolio_Casos.pdf` — 3 casos de éxito (9 págs, 237 KB)
- `ELEMENTAL_Calendario_Contenido.xlsx` — Plan 4 semanas, 5 hojas (25 KB)

### 3. `logo/` — Variantes del logo
- `logo_fullcolor.png` — Versión a color (lima + gris)
- `logo_icon_only.png` — Solo isotipo (hexágono)
- `logo_black_on_white.png` — Versión negro sobre blanco
- `logo_white_on_black.png` — Versión blanco sobre negro (usada en web)

### 4. `plan-original/` — Documento base
- `ELEMENTAL_Branding_Web_Portafolio_Plan.pdf` — PDF original que dio origen a este proyecto

---

## 🎨 Sistema de marca

| Token | Valor |
|-------|-------|
| Fondo principal | `#0D0D0D` |
| Surface | `#1A1A1A` |
| Surface elevada | `#262626` |
| Borde | `#333333` |
| Texto primario | `#FFFFFF` |
| Texto secundario | `#F2F2F2` |
| Acento (CTA) | `#C8D400` |
| Acento hover | `#B5C200` |

**Tipografías:** Space Grotesk (titulares) + Inter (cuerpo) + JetBrains Mono (microtextos)

**Regla 60-30-10:** 60% fondo oscuro, 30% grises/contenido, 10% lima (solo CTAs y datos clave)

---

## 📞 Datos de contacto configurados
- WhatsApp: +57 301 4069793
- Email: hola@elemental.co (placeholder — actualízalo en `sitio-web/src/components/elemental/contact.tsx`)

---

## 🚀 Próximos pasos sugeridos

1. **Personaliza el email** — Abre `sitio-web/src/components/elemental/contact.tsx` y cambia `hola@elemental.co` por tu email real
2. **Sube el sitio a producción** — Recomendado: Vercel. Conecta el repo, deploy automático
3. **Configura el backend de formularios** — Actualmente los formularios guardan en localStorage. Para recibir leads reales, integra con:
   - Resend / SendGrid (email)
   - WhatsApp Business API
   - Notion API o Airtable (CRM básico)
4. **Edita el contenido del blog** — Los 6 posts actuales son placeholders. Reemplaza con artículos reales en `sitio-web/src/components/elemental/blog.tsx`
5. **Iteración** — Si necesitas cambios (secciones, copy, paquetes, casos), edita y recompila

---

## 🛠️ Stack técnico web
- Next.js 16 (App Router)
- TypeScript 5
- Tailwind CSS 4
- shadcn/ui + Lucide icons
- Framer Motion
- Zustand (state management)
- React Hook Form + Zod (formularios)

---

**ELEMENTAL · Diseño. Tecnología. Inteligencia.**
*© 2026 ELEMENTAL. Todos los derechos reservados.*
