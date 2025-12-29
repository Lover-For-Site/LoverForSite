'use client'
import { useState } from "react";
import { CardComponent } from "./components/card-component";
import { CaseComponent } from "./components/case";
import { Contato } from "./components/contato";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero-section";
import { InfiniteSlider } from "./components/infinite-slider";
import { SobreNos } from "./components/sobre-nos";
import { Whatsapp } from "./components/whatsap";
import Navbar from "./components/navbar";

export default function Home (){
  const [whatsappOpen, setWhatsappOpen] = useState(false);


  return(
    <>
      <Navbar onCreateSite={() => setWhatsappOpen(true)} />
      <main className="bg-white">
        <Hero onCreateSite={() => setWhatsappOpen(true)} />
        <div className="mt-10"></div>
        <InfiniteSlider/>
        <CardComponent/>
        <SobreNos/>
        <CaseComponent/>
        <Whatsapp open={whatsappOpen} setOpen={setWhatsappOpen} />
        <Footer/>
      </main>
    </>
  )
}