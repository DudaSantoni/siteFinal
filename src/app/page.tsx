import { Hero } from "./components/Hero/Hero"; 
import { Objetivo } from "./components/Objetivo/Objetivo"; 
import { Monitoramento } from "./components/Monitoramento/Monitoramento"; 
import { Funcionalidades } from "./components/Funcionalidades/Funcionalidades"; 

export default function Home() {
  return (
    <main>
      <Hero />
      <Objetivo />
      <Monitoramento />
      <Funcionalidades />
    </main>
  );
}
