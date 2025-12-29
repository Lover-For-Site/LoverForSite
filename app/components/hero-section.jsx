import { Space_Grotesk } from "next/font/google";

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export function Hero() {
  return (
    <section
      className="
        mx-auto
        flex flex-col
        lg:flex-row
        items-center
        justify-center
        gap-28
        max-w-[1400px]
        px-6
        bg-white
      "
    >
      <div className="max-w-xl text-left py-10">
        <h1
          className={`text-3xl md:text-4xl font-bold mb-4 text-[#191A23] ${space.className}`}
        >
          Seu site é a vitrine para novos clientes
        </h1>

        <p className="text-base md:text-lg text-[#191A23]/80">
          Com um site profissional, seu negócio ganha destaque online, novas
          oportunidades de clientes e espaço para mostrar seus serviços,
          projetos e talentos online.
        </p>

        <button
          className={`
            mt-6 px-10 py-3
            bg-[#191A23] text-white
            rounded-lg
            transition-all duration-300
            hover:scale-105
            shadow-[0_0_15px_rgba(25,26,35,0.4)]
            hover:shadow-[0_0_25px_rgba(25,26,35,0.6)]
            ${space.className}
          `}
        >
          Criar Site
        </button>
      </div>

      {/* IMAGEM SOMENTE DESKTOP */}
      <div className="hidden lg:block w-[450px]">
        <img src="/Frame.svg" alt="Ilustração" />
      </div>
    </section>
  );
}
