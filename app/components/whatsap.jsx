"use client"
import { useState } from "react";

export function Whatsapp() {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const phone = "5511916972547";

  const options = [
    { id: "landing", label: "Landing Page" },
    { id: "institucional", label: "Site Institucional" },
    { id: "blog", label: "Blog" },
    { id: "sistema", label: "Sistema" },
    { id: "loja", label: "Loja Virtual" },
    { id: "outras", label: "Outras dúvidas" },
  ];

  const getWhatsappLink = () => {
    const baseMessage = "Olá! LoverForSite, ";
    const optionText = selectedOption 
      ? `Desejo maiores informações sobre: ${options.find(opt => opt.id === selectedOption)?.label}`
      : "Desejo maiores informações.";
    
    const message = encodeURIComponent(baseMessage + optionText);
    return `https://wa.me/${phone}?text=${message}`;
  };

  return (
    <>
      {/* BOTÃO FIXO */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Abrir WhatsApp"
        className="
          fixed bottom-6 right-6 z-50
          w-14 h-14
          hover:scale-110
          transition-transform duration-200
        "
      >
        <img src="/whatsapp.png" alt="WhatsApp" className="w-full h-full" />
      </button>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40"
        />
      )}

      {/* MODAL */}
      <div
        className={`
          fixed z-50
          bottom-24 right-6
          w-[360px]
          rounded-2xl bg-white shadow-xl overflow-hidden
          transform origin-bottom-right
          transition-all duration-300 ease-out
          ${open ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"}
        `}
      >
        {/* HEADER */}
        <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-white">
            <img
              src="/gerson.png"
              alt="Gerson"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-white font-semibold text-sm">
              Gerson
            </span>
            <span className="text-white/80 text-xs">
              Programador Web
            </span>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="ml-auto text-white text-xl leading-none"
          >
            ×
          </button>
        </div>

        {/* CONTEÚDO */}
        <div className="bg-[#ECE5DD] p-4 max-h-[400px] overflow-y-auto">
          <div className="max-w-[85%] rounded-lg bg-white p-3 text-sm shadow mb-3">
            Olá! 👋 <br />
            Sobre qual serviço você gostaria de saber mais?
          </div>

          {/* OPÇÕES CLICÁVEIS */}
          <div className="flex flex-col gap-2">
            {options.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedOption(option.id)}
                className={`
                  rounded-lg p-3 text-sm font-medium text-left
                  transition-all duration-200
                  ${
                    selectedOption === option.id
                      ? "bg-[#075E54] text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-gray-50 shadow"
                  }
                `}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="p-4">
          <a
            href={getWhatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              block w-full rounded-lg py-3
              text-center text-white font-semibold
              transition
              ${
                selectedOption
                  ? "bg-[#25D366] hover:brightness-95"
                  : "bg-gray-300 cursor-not-allowed pointer-events-none"
              }
            `}
          >
            {selectedOption ? "Iniciar conversa" : "Selecione uma opção"}
          </a>
        </div>
      </div>
    </>
  );
}