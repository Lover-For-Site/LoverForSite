import React from "react";

export function Footer() {
  return (
    <footer
      className="
        bg-[#191A23]
        w-full
        text-white
        px-4
        sm:px-8
        py-12
        rounded-t-[30px]
        sm:rounded-t-[40px]
        max-w-7xl
        mx-auto
      "
    >
      <div className="max-w-7xl mx-auto">
    
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 w-full md:w-auto">
            <img
              src="/logoWhite.svg"
              alt="LoveForSite"
              className="h-[60px] md:h-[90px]"
            />

            <nav className="flex flex-row flex-wrap gap-4 sm:gap-6 text-sm text-center md:text-left">
              <a href="#sobre" className="hover:text-[#FF0B0B] underline">
                Sobre nós
              </a>
              <a href="#servicos" className="hover:text-[#FF0B0B] underline">
                Servicos
              </a>
              <a href="#cases" className="hover:text-[#FF0B0B] underline">
                Cases
              </a>
            </nav>

          </div>

   
          <div className="flex flex-col gap-4 self-center md:self-auto">
            <a
              href="https://wa.me/5511916972547"
              target="_blank"
              className="flex items-center gap-3 rounded-xl shadow hover:shadow-md transition hover:text-[#FF0B0B] "
            >
              <img className="w-7.5" src="/whatsapp.png" alt="whatsapp icon" />
              <span>WhatsApp</span>
            </a>

            <a
              href="https://instagram.com/GersonJrrr"
              target="_blank"
              className="flex items-center gap-3 rounded-xl shadow hover:shadow-md transition hover:text-[#FF0B0B] "
            >
             <img className="w-7.5" src="/instagram.png" alt="instagram icon" />
              <span>Instagram</span>
            </a>

            <a
              href="https://www.linkedin.com/in/gersonjrr/"
              target="_blank"
              className="flex items-center gap-3 rounded-xl shadow hover:shadow-md transition hover:text-[#FF0B0B]"
            >
             <img className="w-7.5" src="/linkedin.png" alt="likedin icon" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

   
        <div className="grid md:grid-cols-2 gap-8 mb-12 text-center md:text-left">
          <div>
            <div className="inline-block bg-white text-black px-3 py-1 rounded text-sm font-semibold mb-6">
              Entre em contato:
            </div>

            <div className="space-y-3 text-sm">
              <p>Email: juniormiranda43@gmail.com</p>
              <p>Telefone: (11) 91697-2547</p>
              <p>CNPJ: 61.501.416/0001-88</p>
            </div>
          </div>
        </div>

      
        <div className="border-t border-gray-700 mb-8"></div>

       
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400 text-center sm:text-left">
          <p>© 2025 LoverForSite ❤️. Todos direitos reservados.</p>

          <a
            href="#privacy"
            className="underline hover:text-[#FF0B0B] transition-colors"
          >
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}
