import Image from "next/image";
import  Carousel  from "../Carrossel/Carrossel";


export function Objetivo() {
    return (
        <main className="bg-gradient-to-t from-[#87AE35] to-[#3F4D24] py-12 sm:py-20 flex flex-col items-center ">
          
            <section className="flex flex-col items-center gap-8 px-6 sm:gap-12 w-full max-w-7xl lg:flex-row lg:justify-around lg:items-center">
                
                <section className="w-full max-w-xl text-white lg:w-[45vw]">
               
                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-center lg:text-left">OBJETIVO</h1>
                    
                    <p className="mt-4 text-base sm:text-lg text-justify">
                        Queremos facilitar o dia a dia no campo, proporcionando mais organização, economia de tempo e melhor tomada de decisão com base em informações reais e atualizadas. Ao reunir todas as informações da propriedade em um só lugar, nosso sistema ajuda a melhorar a produtividade e a eficiência da lavoura, safra após safra. Mais do que um sistema, somos uma solução feita para quem vive da terra e quer evoluir com ela, usando a tecnologia como aliada no crescimento e na sustentabilidade da produção.
                    </p>
                </section>
                
                <Image
                    src="/logo1.png"
                    alt="Logo da empresa"
                    width={400}
                    height={400}
                    
                    className="w-48 h-auto max-w-xs md:w-64 lg:w-[28vw] lg:max-w-md"
                    sizes="(max-width: 1024px) 50vw, 28vw"
                />
            </section>
            
            <div className="mt-12 sm:mt-16 w-full">
              <Carousel />
            </div>
        </main>
    );
}