'use client'

import { useState } from "react";

export function CardComponent() {
  const [openIndex, setOpenIndex] = useState(null);

  const services = [
    {
      text: "SEO é o que faz seu site ser encontrado no Google.\n\nAtravés de técnicas avançadas de otimização, aumentamos sua visibilidade, atraímos visitantes qualificados e transformamos buscas em oportunidades reais de negócio.",
      highlight: "Focamos em SEO",
      bgColor: "bg-gray-200",
      textColor: "text-black",
      img: "/pesquisa.svg",
      alt: "ilustração pesquisa",
    },
    {
      text: "Um site responsivo garante que sua marca seja bem apresentada em qualquer tela.\n\nCom uma navegação intuitiva e rápida, você oferece uma melhor experiência ao usuário e transforma mais visitas em oportunidades reais de negócio.",
      highlight: "Sites responsivos",
      bgColor: "bg-[#FF0B0B]",
      textColor: "text-black",
      img: "/responsividade1.svg",
      alt: "ilustração desktop mobile",
    },
    {
      text: "Criamos sistemas sob medida para sua empresa, automatizando processos e facilitando as demandas do dia a dia.\n\nCom mais organização, agilidade e controle, sua equipe ganha produtividade e seu negócio evolui com eficiência.",
      highlight: "Sistemas",
      bgColor: "bg-[#191A23]",
      textColor: "text-white",
      img: "/sistema3.svg",
      alt: "ilustração sistema",
    },
    {
      text: "Oferecemos suporte completo do início ao fim do projeto, acompanhando cada etapa com atenção e agilidade.\n\nCuidamos de alterações, atualizações e melhorias contínuas, garantindo que seu site ou sistema esteja sempre funcionando da melhor forma.",
      highlight: "Suporte",
      bgColor: "bg-gray-200",
      textColor: "text-black",
      img: "/suporte.svg",
      alt: "ilustração suporte",
    },
  ];

  return (
    <div className=" bg-white p-8 mt-14 max-w-341.5 mx-auto">
      <h1 className="text-3xl md:text-6xl font-medium tracking-tight mb-16 max-w-4xl text-[#191A23]">
        Por que você deve escolher a
        <span className="ml-2 font-semibold underline decoration-[#FF0B0B] decoration-8 underline-offset-4">
            LoveForSite
        </span>
        ❤️?
      </h1>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} ${service.textColor} rounded-[2.5rem] p-8 md:p-12 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300`}
            >
              <div className="mb-4">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center md:hidden"
                >
                  <h3 className="text-2xl font-bold">
                    {service.highlight}
                  </h3>
                  <span className="text-2xl font-bold">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {/* DESKTOP – título fixo */}
                <h3 className="hidden md:block text-3xl font-bold leading-tight">
                  {service.highlight}
                </h3>
              </div>

              {/* MOBILE – CONTEÚDO EXPANSÍVEL */}
             <div
                className={`
                  md:hidden
                  overflow-hidden
                  transition-[max-height,opacity]
                  duration-500
                  ease-in-out
                  ${openIndex === index ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"}
                `}
              >
                <p className="text-[16px] leading-relaxed">
                  {service.text.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>


              {/* DESKTOP – CONTEÚDO FIXO */}
              <div className="hidden md:flex items-center gap-6">
                <div className="max-w-87.5">
                  <p className="text-[18px] font-medium leading-tight">
                    {service.text.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>

                <div className="flex justify-end items-center">
                  <img
                    src={service.img}
                    alt={service.alt}
                    className="w-100 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
