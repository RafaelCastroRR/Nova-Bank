import React from "react";
import { Github, KeyRound, ExternalLink } from "lucide-react";

export default function DemoBanner() {
  return (
    <aside
      aria-label="Credenciales de Demostración"
      className="sticky top-0 z-50 w-full bg-gradient-to-r from-teal-700 via-cyan-700 to-teal-800 text-white shadow-md overflow-hidden py-2 select-none border-b border-teal-500/30"
    >
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center space-x-12 cursor-pointer">
        <div className="flex items-center space-x-3 text-sm font-medium px-4">
          <KeyRound className="h-4 w-4 text-teal-200 shrink-0" />
          <span>
            <strong>¿Necesitas cuentas para probar el sistema?</strong> Las credenciales de demostración (Clientes y 2FA) están publicadas en nuestro GitHub:
          </span>
          <a
            href="https://github.com/RafaelCastroRR/Nova-Bank#--cuentas-de-prueba-para-testing-clientes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 underline underline-offset-4 font-semibold text-yellow-300 hover:text-white transition-colors ml-1"
          >
            <Github className="h-4 w-4" />
            <span>Ver Credenciales en GitHub</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="flex items-center space-x-3 text-sm font-medium px-4">
          <KeyRound className="h-4 w-4 text-teal-200 shrink-0" />
          <span>
            <strong>¿Necesitas cuentas para probar el sistema?</strong> Las credenciales de demostración (Clientes y 2FA) están publicadas en nuestro GitHub:
          </span>
          <a
            href="https://github.com/RafaelCastroRR/Nova-Bank#--cuentas-de-prueba-para-testing-clientes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 underline underline-offset-4 font-semibold text-yellow-300 hover:text-white transition-colors ml-1"
          >
            <Github className="h-4 w-4" />
            <span>Ver Credenciales en GitHub</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </aside>
  );
}
