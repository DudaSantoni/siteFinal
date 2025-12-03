import Link from "next/link"
import { perfis } from '../model/data/perfis';
export default function Colaboradores() {
    return (
        <main>
            <section className="bg-[#80a630] px-4 md:px-10 xl:px-20 pt-28 md:pt-20 xl:pt-[20dvh] text-white pb-6 text-justify">
                <h1 className="text-4xl md:text-6xl xl:text-8xl font-bold mb-5 mt-20">SOBRE NÓS</h1>
                <p className="text-sm md:text-base xl:text-padrao">
                    Somos uma plataforma de gestão agrícola criada para simplificar e revolucionar o trabalho no campo. Acreditamos que a tecnologia deve ser uma aliada acessível, oferecendo soluções intuitivas e eficazes para o produtor rural.
                    Nosso sistema foi desenvolvido por profissionais com conhecimento em agronomia e inovação, que entendem os desafios da gestão rural. Criamos uma ferramenta robusta, focada em organização, controle total das operações e tomada de decisão baseada em dados concretos, permitindo que o agricultor maximize a produtividade e garanta um futuro mais lucrativo e sustentável.  </p>
            </section>

            <div className="w-full h-6 bg-[#8cad46]"></div>
            <div className="w-full h-6 bg-[#97b35b]"></div>
            <div className="w-full h-6 bg-[#adc085]"></div>

            <section className="w-full bg-[#D9D9D9] pt-10 px-4 md:px-10 ">

                <h2 className="text-center text-3xl md:text-5xl xl:text-7xl font-semibold text-[#242d10]">CONHEÇA A EQUIPE NEXTGEN</h2>

                <section className="flex flex-col xl:flex-row justify-center xl:justify-between pb-10 gap-3 xl:flex-nowrap xl:items-stretch">

                    {perfis.map((perfil, index) => (
                        <article
                            className="bg-[#80A630] w-full max-w-[calc(100%-2rem)] sm:max-w-xs flex flex-col items-center rounded-lg py-8 my-10 text-white mx-auto xl:w-[350px] xl:max-w-none xl:flex-shrink-0"
                            key={index}
                        >
                            <div className="w-full max-w-[200px] xl:max-w-[250px] overflow-hidden flex justify-center items-center">
                                <img
                                    className="h-[200px] w-full object-contain"
                                    src={perfil.image}
                                    alt={perfil.alt} />
                            </div>

                            <h2 className="text-2xl xl:text-4xl font-bold my-4 xl:my-5">{perfil.nome}</h2>

                            <p className="text-lg xl:text-lg mb-4 xl:mb-5 text-justify px-4 xl:px-8">
                                {perfil.descrição}
                            </p>

                            <Link
                                target="_blank"
                                className="text-sm xl:text-xl font-semibold mt-auto bg-[#55692b] hover:bg-[#d9d9d9] text-white hover:text-[#55692b] py-2 px-6 xl:px-8 rounded-[10px] transition-colors duration-300"
                                href={perfil.link}>
                                Saiba mais
                            </Link>
                        </article>
                    ))}

                </section>
            </section>
        </main>
    );
}