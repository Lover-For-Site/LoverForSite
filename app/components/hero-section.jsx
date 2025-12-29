import { Space_Grotesk } from "next/font/google";
const space = Space_Grotesk({ subsets: ['latin'], weight: ['400','500','700'] });

export function Hero() {

  return (
    <section className="w-350 mx-auto flex justify-center gap-50">
        <div className="w-132.75 text-left py-15 ">
            <h1 className={`text-4xl font-bold mb-4 ${space.className}`}>Seu site é a vitrine para novos clientes</h1>
            <p className="text-lg text-gray-600 max-w-xl">
                Com um site profissional, seu negócio ganha destaque online, novas oportunidades de clientes e espaço para mostrar seus serviços, projetos e talentos online, atraia clientes e transforme seu site na porta de entrada do seu negócio      </p>
            <button className={`mt-6 px-24 py-3 bg-[#191A23] text-white rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(25,26,35,0.4)] hover:shadow-[0_0_25px_rgba(25,26,35,0.6)] ${space.className}`}
            >
              Criar Site
            </button>

        </div>

       <div className="w-112.5">
            <img src="/Frame.svg" alt="Ilustração" />
       </div>
    </section>
  );
}
