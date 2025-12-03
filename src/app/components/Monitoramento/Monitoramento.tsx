export function Monitoramento() {
    return (
        <main className="relative w-full">

            <section
                className="w-full bg-center bg-cover bg-no-repeat px-4 sm:px-8 py-20"
                style={{ backgroundImage: "url('/fundo2.png')" }}
            >

                <div className="w-full h-full bg-black/30 absolute inset-0"></div>

                <div className="relative z-10 flex flex-col items-center text-white">

                     <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-10 lg:mb-20 lg:text-left">
                        MONITORAMENTO
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10 w-full max-w-5xl">

                        {[
                            "Visualização de dados em tempo real",
                            "Monitoramento de culturas",
                            "Sensores para informações",
                            "Indicadores de eficiência",
                            "Planilhas de acompanhamento",
                            "Visualização de membros",
                        ].map((item, i) => (
                            <p
                                key={i}
                                className="w-full py-5 px-6 rounded-[20px] bg-[#7d9b4a]/80 text-center text-sm sm:text-base lg:text-lg font-semibold"
                            >
                                {item}
                            </p>
                        ))}

                    </div>

                </div>

            </section>

        </main>
    );
}
