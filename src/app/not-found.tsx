import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="flex min-h-screen flex-col items-center justify-center bg-[#0d0d0d] px-6 text-center"
    >
      <div className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-[#c8d400]">
        Error 404
      </div>
      <h1 className="font-display text-7xl font-bold tracking-tight text-white sm:text-9xl">
        4<span className="text-[#c8d400]">0</span>4
      </h1>
      <p className="mt-6 max-w-md text-lg text-[#f2f2f2]/70">
        La página que buscas no existe o fue movida. Quizá un sistema IA la
        automatizó y la reubicó.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-[#c8d400] px-8 text-sm font-semibold text-[#0d0d0d] transition-colors hover:bg-[#b5c200]"
      >
        Volver al inicio
      </Link>
      <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.2em] text-[#8a8a8a]">
        ELEMENTAL · Diseño. Tecnología. Inteligencia.
      </p>
    </main>
  );
}
