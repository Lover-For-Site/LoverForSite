export function CaseComponent() {
  const cases = [
    "/furniro.png",
    "/devcar.png",
    "/home-page.png",
    "/ladingPage.png",
  ];

  return (
    <div className="bg-white p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl text-[#191A23] md:text-5xl tracking-tight mb-16 max-w-4xl ml-2 font-semibold underline decoration-[#FF0B0B] decoration-6 underline-offset-4">
        Cases
      </h1>

      <div className="relative overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing">
        <div
          className="
            flex w-max gap-8
            animate-slide-left
            hover:[animation-play-state:paused]
          "
        >
          {[...cases, ...cases].map((img, index) => (
            <div
              key={index}
              className="
                min-w-[378px]
                h-[690px]
                overflow-hidden
                shadow-xl
                bg-gray-100
              "
            >
              <img
                src={img}
                alt={`Projeto ${index + 1}`}
                draggable="false"
                className="
                  w-full h-full object-contain
                  transition-transform duration-300
                  hover:scale-105
                  select-none
                "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
