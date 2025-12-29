import React from 'react';

export function Footer() {
  return (
    <footer className="bg-[#191A23] w-[1366px] mx-auto text-white px-8 py-12 rounded-t-[40px]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <img src="/logoWhite.svg" alt=""className="h-[90px]" />
            </div>
            
            <nav className="flex flex-wrap gap-6 text-sm">
              <a href="#about" className="hover:text-lime-400 transition-colors underline">About us</a>
              <a href="#services" className="hover:text-lime-400 transition-colors underline">Services</a>
              <a href="#cases" className="hover:text-lime-400 transition-colors underline">Use Cases</a>
              <a href="#pricing" className="hover:text-lime-400 transition-colors underline">Pricing</a>
              <a href="#blog" className="hover:text-lime-400 transition-colors underline">Blog</a>
            </nav>
          </div>

          <div className="flex gap-4">
            <a href="#" className="hover:text-lime-400 transition-colors" aria-label="LinkedIn">
            
            </a>
            <a href="#" className="hover:text-lime-400 transition-colors" aria-label="Facebook">
             
            </a>
            <a href="#" className="hover:text-lime-400 transition-colors" aria-label="Twitter">
              
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="inline-block bg-white text-black px-2 py-1 rounded text-sm font-semibold mb-6">
              Entre em contato:
            </div>
            <div className="space-y-3 text-sm">
              <p>Email: juniormiranda43@gmail.com</p>
              <p>Telefone: (11) 91697-2547</p>
              <p> CNPJ: 000012131231/25</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
         <p>© 2025 LoverForSite❤️. Todos direitos reservados.</p>
          <a href="#privacy" className="underline hover:text-lime-400 transition-colors">
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}