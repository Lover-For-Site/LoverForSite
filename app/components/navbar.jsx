export default function Navbar() {
  return (
    <nav className="w-full bg-white">
      <div className="w-[1400px]  mx-auto flex justify-between items-center">
        <img src="/logo4.svg" alt=""className="h-[90px]" />
        <ul className="flex gap-6">
            <li><a href="#features" className="hover:text-blue-600">Serviços</a></li>
            <li><a href="#pricing" className="hover:text-blue-600">Cases</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Sobre nós</a></li>
        </ul>
        
        <button className="border border-black rounded-[9px] px-4 py-3 cursor-pointer transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(25,26,35,0.4)] hover:shadow-[0_0_25px_rgba(25,26,35,0.6)]">Contrate LoveForSite</button>
      </div>
    </nav>
  );
}
