export default function Navbar() {
  return (
    <nav className="w-full bg-white">
      <div
        className="
          max-w-[1400px]
          mx-auto
          flex
          items-center
          justify-between
          px-4
          lg:px-0
        "
      >
    
        <img
          src="/logo4.svg"
          alt="LoveForSite"
          className="
            h-[60px]
            lg:h-[90px]
          "
        />

      
        <ul className="hidden lg:flex gap-6">
          <li>
            <a href="#features" className="hover:text-blue-600">
              Serviços
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-blue-600">
              Cases
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600">
              Sobre nós
            </a>
          </li>
        </ul>

      
        <button
          className="
            border border-black
            rounded-[9px]
            px-3 py-2
            lg:px-4 lg:py-3
            text-sm lg:text-base
            transition-all duration-300
            hover:scale-105
            shadow-[0_0_15px_rgba(25,26,35,0.4)]
            hover:shadow-[0_0_25px_rgba(25,26,35,0.6)]
          "
        >
          Contrate LoveForSite
        </button>
      </div>
    </nav>
  );
}
