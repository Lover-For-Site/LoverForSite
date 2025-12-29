
import { CardComponent } from "./components/card-component";
import { CaseComponent } from "./components/case";
import { Contato } from "./components/contato";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero-section";
import { InfiniteSlider } from "./components/infinite-slider";
import { SobreNos } from "./components/sobre-nos";
import { Whatsapp } from "./components/whatsap";




export default function Home (){
  return(
    <>
      <main className="bg-white">
       <Hero/>
        <div className="mt-10"></div>
        <InfiniteSlider/>
        <CardComponent/>
        <SobreNos/>
        <CaseComponent/>
        <Whatsapp/>
         <Footer/>
      </main>
    </>
  )
}