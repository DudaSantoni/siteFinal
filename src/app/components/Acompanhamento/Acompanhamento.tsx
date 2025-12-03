import Image from "next/image";

export function Acompanhamento() {
    return (
        <section className="bg-[linear-gradient(to_bottom,#37441d_0%,#55692B_23%,#37441d_100%)] text-white">
            <div className="bg-[#1b210f] w-full h-6"></div>
            <div className="bg-[#293217] w-full h-6"></div>
            <div className="bg-[#37441d] w-full h-6"></div>

            <h1 className="text-4xl md:text-6xl xl:text-8xl font-bold mx-4 md:mx-10 xl:mx-20 my-10 xl:my-20">
                ACOMPANHAMENTO DOS <br className="hidden md:block" /> TALHÕES
            </h1>

            <main className="flex flex-col xl:flex-row w-full items-center justify-center xl:justify-around mb-10 xl:mb-20 px-4 md:px-10 xl:px-20 gap-10">

                <Image
                    src="/mobile2.png"
                    alt="home page do aplicativo nextgen"
                    width={400}
                    height={800}
                    className="w-1/2 md:w-1/3 xl:w-[24vw] h-auto max-w-[250px] md:max-w-sm"
                    sizes="(max-width: 768px) 90vw, (max-width: 1280px) 30vw, 24vw"
                />

                <section className="flex flex-col gap-10 w-full xl:w-[55vw]">
                    <article>
                        <h2 className="border-l-4 border-[#242D10] text-xl md:text-3xl font-semibold pl-4 my-5">Colaboradores</h2>
                        <ul className="list-disc pl-5">

                            <li className="text-sm md:text-2xl w-full mb-4">Cadastrar membros da equipe com diferentes níveis de acesso</li>
                            <li className="text-sm md:text-2xl w-full mb-4">Atribuir tarefas específicas por talhão</li>
                            <li className="text-sm md:text-2xl w-full mb-4">Registrar responsáveis por operações como plantio, pulverização, colheita e manutenção</li>
                            <li className="text-sm md:text-2xl w-full mb-4">Acompanhar a execução das atividades em tempo real</li>
                        </ul>
                    </article>
                    <article>
                        <h2 className="border-l-4 border-[#242D10] text-xl md:text-3xl font-semibold pl-4 my-5">Operações</h2>
                        <ul className="list-disc pl-5">

                            <li className="text-sm md:text-2xl w-full mb-4">Preparo de solo</li>
                            <li className="text-sm md:text-2xl w-full mb-4">Plantio e semeadura</li>
                            <li className="text-sm md:text-2xl w-full mb-4">Adubação (orgânica ou química)</li>
                            <li className="text-sm md:text-2xl w-full mb-4">Aplicação de defensivos</li>
                            <li className="text-sm md:text-2xl w-full mb-4">Irrigação</li>
                            <li className="text-sm md:text-2xl w-full mb-4">Controle de pragas e doenças</li>
                        </ul>
                    </article>
                    <article>
                        <h2 className="border-l-4 border-[#242D10] text-xl md:text-3xl font-semibold pl-4 my-5">Histórico</h2>
                        <ul className="list-disc pl-5">

                            <li className="text-sm md:text-2xl w-full mb-4">Visualizar todas as operações realizadas por data e tipo</li>
                            <li className="text-sm md:text-2xl w-full mb-4">Acompanhar produtividade por ciclo</li>
                            <li className="text-sm md:text-2xl w-full mb-4">Avaliar o desempenho dos insumos e técnicas utilizadas</li>
                            <li className="text-sm md:text-2xl w-full mb-4">Gerar relatórios e gráficos comparativos</li>
                            <li className="text-sm md:text-2xl w-full mb-4">Identificar pontos críticos e oportunidades de melhoria</li>
                        </ul>
                    </article>
                </section>
            </main>

            <div className="bg-[#37441d] w-full h-6"></div>
            <div className="bg-[#293217] w-full h-6"></div>
            <div className="bg-[#1b210f] w-full h-6"></div>
        </section>
    );
}