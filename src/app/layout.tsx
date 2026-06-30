import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://elemental-l3ao.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "ELEMENTAL · Consultora de crecimiento digital impulsada por IA",
  description:
    "Construimos sistemas digitales que hacen crecer empresas. Branding, marketing, desarrollo web, IA y automatización. Diseño. Tecnología. Inteligencia.",
  authors: [{ name: "ELEMENTAL" }],
  creator: "ELEMENTAL",
  openGraph: {
    title: "ELEMENTAL · Consultora de crecimiento digital impulsada por IA",
    description:
      "Diseño. Tecnología. Inteligencia. Marketing, automatización e IA aplicada para que vendas más, ahorres tiempo y tomes mejores decisiones.",
    siteName: "ELEMENTAL",
    type: "website",
    url: siteUrl,
    locale: "es_CO",
  },
  twitter: {
    card: "summary_large_image",
    title: "ELEMENTAL · Consultora de crecimiento digital impulsada por IA",
    description:
      "Construimos sistemas digitales que hacen crecer empresas.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "es-CO": siteUrl,
      "en-US": `${siteUrl}/?lang=en`,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0D0D0D",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

// JSON-LD structured data for SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ELEMENTAL",
  description:
    "Consultora de crecimiento digital impulsada por IA. Branding, marketing, desarrollo web, IA y automatización.",
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  sameAs: [
    "https://instagram.com/elemental",
    "https://linkedin.com/company/elemental",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: "+57-301-4069793",
    availableLanguage: ["Spanish", "English"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
        style={{ backgroundColor: "#0d0d0d", color: "#ffffff" }}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[#c8d400] focus:px-4 focus:py-2 focus:text-[#0d0d0d] focus:shadow-lg"
        >
          Saltar al contenido principal
        </a>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
