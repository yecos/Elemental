import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://localhost:3000"
  ),
  title: "ELEMENTAL · Consultora de crecimiento digital impulsada por IA",
  description:
    "Construimos sistemas digitales que hacen crecer empresas. Branding, marketing, desarrollo web, IA y automatización. Diseño. Tecnología. Inteligencia.",
  keywords: [
    "ELEMENTAL",
    "IA",
    "automatización",
    "crecimiento digital",
    "consultora",
    "marketing",
    "branding",
    "desarrollo web",
    "chatbots",
    "WhatsApp IA",
  ],
  authors: [{ name: "ELEMENTAL" }],
  openGraph: {
    title: "ELEMENTAL · Consultora de crecimiento digital impulsada por IA",
    description:
      "Diseño. Tecnología. Inteligencia. Marketing, automatización e IA aplicada para que vendas más, ahorres tiempo y tomes mejores decisiones.",
    siteName: "ELEMENTAL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ELEMENTAL · Automatizamos el crecimiento",
    description:
      "Construimos sistemas digitales que hacen crecer empresas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="dark">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
        style={{ backgroundColor: "#0d0d0d", color: "#ffffff" }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
