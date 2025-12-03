import Image from "next/image";

export function Monitoramento() {
    return (
        <main className="relative w-full min-h-screen">

            <section className="relative h-[65vh] md:h-[70vh] lg:h-[80vh]">

                <Image
                    src="/fundo2.png"
                    alt="Imagem de fundo com plantações e máquinas agrícolas"
                    width={1920}
                    height={1080}
                    className="absolute w-full h-[187vh] lg:h-[135vh] object-cover object-center"
                    sizes="100vw"
                    priority
                />
            </section>

            <section className="relative flex flex-col lg:flex-row justify-center lg:justify-around items-center w-full px-4 sm:px-8 mt-[-50vh] md:mt-[-30vh] lg:mt-[-90vh] pb-10">

                <article className="text-white flex flex-col items-center lg:items-start max-w-4xl text-center lg:text-left mb-10 lg:mb-0">

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-10 lg:mb-20">
                        MONITORAMENTO
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 w-full">

                        <p className="w-full pt-4 pb-4 rounded-[20px] text-center sm:text-right sm:pr-10 bg-gradient-to-r from-[#37421FBF] to-[#729032] text-sm sm:text-base lg:text-lg font-semibold">
                            Visualização de <br /> dados em tempo real
                        </p>

                        <p className="w-full pt-4 pb-4 rounded-[20px] text-center sm:text-left sm:pl-10 bg-gradient-to-r from-[#729032] to-[#37421FBF] text-sm sm:text-base lg:text-lg font-semibold">
                            Monitoramento de <br /> culturas
                        </p>

                        <p className="w-full pt-4 pb-4 rounded-[20px] text-center sm:text-right sm:pr-10 bg-gradient-to-r from-[#37421FBF] to-[#729032] text-sm sm:text-base lg:text-lg font-semibold">
                            Sensores para <br /> informações
                        </p>

                        <p className="w-full pt-4 pb-4 rounded-[20px] text-center sm:text-left sm:pl-10 bg-gradient-to-r from-[#729032] to-[#37421FBF] text-sm sm:text-base lg:text-lg font-semibold">
                            Indicadores de <br /> eficiência
                        </p>

                        <p className="w-full pt-4 pb-4 rounded-[20px] text-center sm:text-right sm:pr-10 bg-gradient-to-r from-[#37421FBF] to-[#729032] text-sm sm:text-base lg:text-lg font-semibold">
                            Planilhas de <br /> acompanhamento
                        </p>

                        <p className="w-full pt-4 pb-4 rounded-[20px] text-center sm:text-left sm:pl-10 bg-gradient-to-r from-[#729032] to-[#37421FBF] text-sm sm:text-base lg:text-lg font-semibold">
                            Visualização de <br /> membros
                        </p>
                    </div>
                </article>

                <div className="flex justify-center w-full lg:w-auto">
                    <Image
                        src="/mobile2.png"
                        alt="home page do aplicativo nextgen"
                        width={300}
                        height={600}
                        className="w-1/2 md:w-1/3 xl:w-[24vw] h-auto max-w-[250px] md:max-w-sm lg:pt-30"
                        sizes="(max-width: 768px) 90vw, (max-width: 1280px) 30vw, 24vw"
                    />
                </div>

            </section>
        </main>
    );
}
