import { Geist, Geist_Mono, Open_Sans,Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";


const space = Space_Grotesk({ subsets: ['latin'], weight: ['400','500','700'] });
const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300','400','600','700','800'],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LoveForSite❤️",
  description: "Sites, sistemas e soluções digitais",
  icons: {
    icon: "/favicon.svg",
  },
  verification: {
    google: "o-HDvUMatVZI28ibP5LdTc4KcSl8ej9N5u8Vhk3mZUk",
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${openSans.className} bg-white scroll-smooth`}>
        {children}
      </body>
    </html>
  );
}
