import Image from "next/image";
import Link from "next/link";

export function Hero() {
    return (

        <main className="relative w-full h-[140vh] lg:h-[130vh]">

            <section className="relative w-full h-full">
                <Image
                    src="/fundo1.png"
                    alt="Imagem de fundo com plantações e céu ao pôr do sol"
                    width={1920}
                    height={1080}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    sizes="100vw"
                    priority
                />

                <div className="absolute inset-0 w-full h-full bg-black/40"></div>

                <div className="absolute bottom-0 left-0 w-full">

                    <div className="bg-[#1b210f] w-full h-25 lg:h-10"></div>
                    <div className="bg-[#293217] w-full h-25 lg:h-10"></div>
                    <div className="bg-[#303a1b] w-full h-25 lg:h-10"></div>
                    <div className="bg-[#38441f] w-full h-25 lg:h-10"></div>
                </div>
            </section>
            <section className="absolute top-16 left-1/2
  transform -translate-x-1/2
  max-w-7xl w-full mx-auto
  flex flex-col-reverse lg:flex-row 
  items-center lg:items-start
  text-center gap-10
  p-6 sm:p-10 z-10">


                <Image
                    src="/mobile1.png"
                    alt="home page do aplicativo nextgen"
                    width={300}
                    height={600}
                    className="w-1/2 md:w-1/3 xl:w-[80vw] h-auto max-w-[250px] md:max-w-sm lg:pt-10"
                    sizes="(max-width: 750px) 90vw, (max-width: 1000px) 30vw, 24vw"
                />

                <article className="flex flex-col items-center lg:items-start lg:w-1/2 lg:pl-20 lg:pt-30">

                    <Image
                        src="/nextgen.png"
                        alt="Logo NextGen"
                        width={400}
                        height={100}
                        className="w-3/4 max-w-lg lg:w-[40vw] h-auto mx-auto lg:mx-[-10] mb-6 mt-10 lg:mt-0"
                        sizes="(max-width: 1024px) 75vw, 40vw"
                    />

                    <p className="text-white text-base sm:text-lg text-justify mt-6 w-full max-w-xl lg:w-[45vw]">
                        O objetivo do nosso site é oferecer uma plataforma digital que torne a gestão agrícola mais simples, eficiente e acessível para todos os produtores, agrônomos e profissionais do campo. Desenvolvemos uma ferramenta pensada para conectar a tecnologia à rotina da agricultura, permitindo o controle completo dos talhões, o acompanhamento das operações no campo, o gerenciamento de colaboradores e o monitoramento de dados climáticos, como temperatura e umidade.
                    </p>

                    <Link
                        href="/Colaboradores"
                        className="bg-white text-[#37421F] font-bold py-4 rounded-[18px] mt-6 hover:bg-[#f0f0f0] transition-colors text-lg sm:text-xl w-full max-w-sm lg:w-[400px] text-center"
                    >
                        Conheça a equipe
                    </Link>
                </article>
            </section>
        </main>
    );
}