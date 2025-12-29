import { Space_Grotesk } from "next/font/google";

const space = Space_Grotesk({ subsets: ['latin'], weight: ['400','500','700'] });

const items = [
  { label: "Blog", logo: "/blog.svg" },
  { label: "Loja Virtual", logo: "/lojaVirtual.svg" },
  { label: "Landing Pages", logo: "/landingPage.svg" },
  { label: "Sites Institucionais", logo: "/institucional.svg" },
  { label: "Sistemas", logo: "/engrenagem.svg" },
];

export function InfiniteSlider() {
  const tripleItems = [...items, ...items, ...items];

  return (
    <div className={`w-full overflow-hidden bg-[#191A23] py-4 ${space.className}`}>
      <div className="flex w-max animate-marquee">
        {tripleItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-6 md:px-8 whitespace-nowrap"
          >
            <img
              src={item.logo}
              alt={item.label}
              className="h-6 w-auto object-contain"
            />
            <span
              className="
                text-base
                sm:text-lg
                md:text-xl
                lg:text-2xl
                font-medium
                text-white
              "
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}