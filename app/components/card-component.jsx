export function CardComponent() {
  const services = [
    {
      text: "SEO é o que faz seu site ser encontrado no Google. \n \nAtravés de técnicas avançadas de otimização, aumentamos sua visibilidade, atraímos visitantes qualificados e transformamos buscas em oportunidades reais de negócio.",
      highlight: "Focamos em SEO",
      bgColor: "bg-gray-200",
      textColor: "text-black",
      img: "/pesquisa.svg"
    },
    {
      text: "Um site responsivo garante que sua marca seja bem apresentada em qualquer tela. \n  \n Com uma navegação intuitiva e rápida, você oferece uma melhor experiência ao usuário e transforma mais visitas em oportunidades reais de negócio.",
      highlight: "Sites responsivos",
      bgColor: "bg-[#FF0B0B]",
      textColor: "text-black",
      img: "/responsividade1.svg"
    },
    {
      text: "Criamos sistemas sob medida para sua empresa, automatizando processos e facilitando as demandas do dia a dia.\n  \n  Com mais organização, agilidade e controle, sua equipe ganha produtividade e seu negócio evolui com eficiência.",
      highlight: "Sistemas",
      bgColor: "bg-[#191A23]",
      textColor: "text-white",
      img: "/sistema3.svg"
    },
    {
      text: "Oferecemos suporte completo do início ao fim do projeto, acompanhando cada etapa com atenção e agilidade. \n  \n Cuidamos de alterações, atualizações e melhorias contínuas, garantindo que seu site ou sistema esteja sempre funcionando da melhor forma.",
      highlight: "Suporte",
      bgColor: "bg-gray-200",
      textColor: "text-black",
      img: "./suporte.svg"
    },
  ];

  return (
    <div className="min-h-screen bg-white p-8 mt-14 max-w-341.5 mx-auto">
      
      <h1 className="text-3xl md:text-6xl font-medium tracking-tight mb-16 max-w-4xl">
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
              className={`${service.bgColor} ${service.textColor} rounded-[2.5rem] p-12 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1`}
            >
              <div className="flex flex-col h-full">
                <div className="mb-auto">
                  <h3 className="text-3xl font-bold leading-tight">
                    {service.highlight.split('\n').map((line, i) => (
                      <span key={i}>
                        <span>
                          {line}
                        </span>
                        {i < service.highlight.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </h3>
                </div>
               <div className="flex flex-1 items-center">
                 <div className="max-w-87.5 mt-3">
                        <h3 className="text-[18px] font-medium leading-tight">
                            {service.text.split('\n').map((line, i) => (
                            <span key={i}>
                                <span>
                                {line}
                                </span>
                                {i < service.text.split('\n').length - 1 && <br />}
                            </span>
                            ))}
                        </h3>
                 </div>

                <div className="flex justify-end items-center">
                        <img
                            src={service.img}
                            alt={service.title}
                            className="w-100 object-contain"
                        />
                    </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}