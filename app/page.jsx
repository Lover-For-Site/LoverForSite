
import { CardComponent } from "./components/card-component";
import { CaseComponent } from "./components/case";
import { Contato } from "./components/contato";
import { Hero } from "./components/hero-section";
import { InfiniteSlider } from "./components/infinite-slider";
import { SobreNos } from "./components/sobre-nos";
import { Whatsapp } from "./components/whatsap";




export default function Home (){
  return(
    <>
      <Hero/>
      <div className="mt-10"></div>
      <InfiniteSlider/>
      <CardComponent/>
      <SobreNos/>
      <CaseComponent/>
      <Whatsapp/>
    </>
  )
}