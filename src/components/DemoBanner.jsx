import React from "react";
import { Github, KeyRound, ExternalLink } from "lucide-react";

export default function DemoBanner() {
  const content = (
    <div className="flex items-center space-x-4 px-12 shrink-0">
      <span className="flex items-center justify-center h-7 w-7 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 shrink-0">
        <KeyRound className="h-4 w-4" />
      </span>
      <span className="text-base font-medium text-gray-100 tracking-wide">
        ¿Necesitas cuentas para probar el sistema? Las credenciales de demo (Clientes y 2FA) están publicadas en GitHub:
      </span>
      <a
        href="https://github.com/RafaelCastroRR/Nova-Bank#--cuentas-de-prueba-para-testing-clientes"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yellow-400/10 hover:bg-yellow-400 text-yellow-300 hover:text-gray-950 border border-yellow-400/40 text-sm font-semibold transition-all duration-200 shadow-sm shrink-0"
      >
        <Github className="h-4 w-4" />
        <span>Ver Credenciales en GitHub</span>
        <ExternalLink className="h-3.5 w-3.5" />
      </a>
    </div>
  );

  return (
    <aside
      aria-label="Credenciales de Demostración"
      className="sticky top-0 z-50 w-full bg-gradient-to-r from-teal-900 via-cyan-900 to-teal-950 text-white shadow-lg overflow-hidden py-3 select-none border-b border-teal-500/30 backdrop-blur-md"
    >
      <div className="flex w-max animate-marquee-smooth hover:[animation-play-state:paused] items-center cursor-pointer will-change-transform">
        {content}
        {content}
      </div>
    </aside>
  );
}
