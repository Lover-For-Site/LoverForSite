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
              <a href="#about" className="hover:text-lime-400 underline">
                About us
              </a>
              <a href="#services" className="hover:text-lime-400 underline">
                Services
              </a>
              <a href="#cases" className="hover:text-lime-400 underline">
                Use Cases
              </a>
              <a href="#pricing" className="hover:text-lime-400 underline">
                Pricing
              </a>
              <a href="#blog" className="hover:text-lime-400 underline">
                Blog
              </a>
            </nav>

          </div>

   
          <div className="flex gap-4 self-center md:self-auto">
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-lime-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-lime-400 transition-colors"
            >
              Facebook
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-lime-400 transition-colors"
            >
              Twitter
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
              <p>CNPJ: 000012131231/25</p>
            </div>
          </div>
        </div>

      
        <div className="border-t border-gray-700 mb-8"></div>

       
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400 text-center sm:text-left">
          <p>© 2025 LoverForSite ❤️. Todos direitos reservados.</p>

          <a
            href="#privacy"
            className="underline hover:text-lime-400 transition-colors"
          >
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}
