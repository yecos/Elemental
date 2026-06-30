import { Header } from "@/components/elemental/header";
import { Hero } from "@/components/elemental/hero";
import { Services } from "@/components/elemental/services";
import { AiAutomation } from "@/components/elemental/ai-automation";
import { Portfolio } from "@/components/elemental/portfolio";
import { DiagnosticForm } from "@/components/elemental/diagnostic-form";
import { Blog } from "@/components/elemental/blog";
import { Contact } from "@/components/elemental/contact";
import { Footer } from "@/components/elemental/footer";

export default function Home() {
  return (
    <div
      className="flex min-h-screen flex-col"
      style={{ backgroundColor: "#0d0d0d" }}
    >
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <AiAutomation />
        <Portfolio />
        <DiagnosticForm />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
