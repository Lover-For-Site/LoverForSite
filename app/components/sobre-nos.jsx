export function SobreNos() {
  return (
    <div className="mb-10 bg-[white] p-8 mt-8 max-w-341.5 mx-auto">
      
      <h1 className="text-2xl md:text-5xl tracking-tight mb-16 max-w-4xl ml-2 font-semibold underline decoration-[#FF0B0B] decoration-6 underline-offset-4">
        Sobre Nós
      </h1>
      
      <div className="max-w-7xl mx-auto bg-[#191A23]  rounded-3xl p-8 md:p-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* TEXTO */}
          <div className="md:col-span-2 space-y-6 text-[18px] leading-relaxed text-white">
            <p>
              Somos uma solução digital focada em criar{" "}
              <strong>sites, landing pages e sistemas</strong> que realmente funcionam
              para o seu negócio.
            </p>

            <p>
              Atuo como <strong>desenvolvedor Front-end</strong>, trabalhando com{" "}
              <strong>React</strong> e <strong>Next.js</strong>, criando interfaces
              modernas, responsivas e focadas em experiência do usuário. Também possuo
              conhecimento em <strong>.NET</strong>, permitindo soluções completas e
              sistemas sob medida.
            </p>

           <p>
                Possuo certificações{" "}
                <span className="relative inline-block group mx-1">
                    <strong className="cursor-pointer underline decoration-dotted">
                    AWS Cloud Practitioner
                    </strong>

                    <span
                    className="absolute z-50 hidden group-hover:block
                    top-full 
                    bg-white p-3 rounded-2xl shadow-xl"
                    >
                        <img
                            src="/awsIa.png"
                            alt="Badge AWS Cloud Practitioner"
                            className="w-[100px]"
                        />
                    </span>
                </span>

                {" "}e{" "}

                <span className="relative inline-block group mx-1">
                    <strong className="cursor-pointer underline decoration-dotted">
                    AI Practitioner
                    </strong>

                    <span
                    className="absolute z-50 hidden group-hover:block bg-white p-3 rounded-2xl shadow-xl"
                    >
                        <img
                            src="/600.png"
                            alt="Badge AWS Cloud Practitioner"
                            className="w-[600px]"
                        />
                    </span>
                </span>

                , garantindo boas práticas em cloud,
                performance, escalabilidade e segurança.
            </p>


            <p>
              Mais do que criar um site bonito, o foco é entregar{" "}
              <strong>soluções digitais eficientes</strong>, que gerem resultados reais
              e acompanhem o crescimento da sua empresa.
            </p>
          </div>

          {/* REDES SOCIAIS */}
          <div className="flex flex-col justify-center gap-6">
            
            <h3 className="text-xl font-semibold text-white">
              Entre em contato: 👋
            </h3>

            <a
              href="https://wa.me/SEUNUMERO"
              target="_blank"
              className="flex items-center gap-3 bg-white p-4 rounded-xl shadow hover:shadow-md transition"
            >
              <img className="w-7.5" src="/whatsapp.png" alt="" />
              <span>WhatsApp</span>
            </a>

            <a
              href="https://instagram.com/SEUINSTAGRAM"
              target="_blank"
              className="flex items-center gap-3 bg-white p-4 rounded-xl shadow hover:shadow-md transition"
            >
             <img className="w-7.5" src="/instagram.png" alt="" />
              <span>Instagram</span>
            </a>

            <a
              href="https://www.linkedin.com/in/gersonjrr/"
              target="_blank"
              className="flex items-center gap-3 bg-white p-4 rounded-xl shadow hover:shadow-md transition"
            >
             <img className="w-7.5" src="/linkedin.png" alt="" />
              <span>LinkedIn</span>
            </a>

          </div>

        </div>
      </div>
    </div>
  );
}
