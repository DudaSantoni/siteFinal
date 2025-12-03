export function Funcionalidades() {
    return (
        <main className="bg-gradient-to-t from-[#37421F] to-[#86ad35] text-white py-10 px-6 sm:px-10">

            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-10 text-center lg:text-left lg:ml-20">FUNCIONALIDADES</h1>

            <section className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto justify-around gap-8">

                <article className="w-full lg:w-1/3">
                    <h2 className="border-l-4 border-[#37421F] py-3 px-5 pl-4 text-3xl sm:text-5xl font-semibold my-5">Temperatura e umidade</h2>
                    <ul className="pl-5 list-disc text-base sm:text-lg">
                        <li>Temperatura ambiente em tempo real</li>
                        <li>Níveis de umidade do ar e do solo</li>
                        <li>Integração com estações meteorológicas locais ou sensores</li>
                        <li>Ajuda na tomada de decisão para irrigação, pulverização e plantio</li>
                    </ul>
                </article>

                <article className="w-full lg:w-1/3">
                    <h2 className="border-l-4 border-[#37421F] py-3 px-5 pl-4 text-3xl sm:text-5xl font-semibold my-5">Cadastro e login</h2>
                    <ul className="pl-5 list-disc text-base sm:text-lg">
                        <li>Tenha acesso exclusivo e seguro à sua área de gestão</li>
                        <li>Criação de conta rápida com e-mail e senha</li>
                        <li>Login seguro em qualquer dispositivo</li>
                        <li>Perfis personalizados, com possibilidade de incluir colaboradores com permissões específicas</li>
                        <li>Tudo protegido por um sistema confiável, que garante a segurança dos seus dados e da sua propriedade.</li>
                    </ul>
                </article>

                <article className="w-full lg:w-1/3">
                    <h2 className="border-l-4 border-[#37421F] py-3 px-5 pl-4 text-3xl sm:text-5xl font-semibold my-5">Controles dos talhões</h2>
                    <ul className="pl-5 list-disc text-base sm:text-lg">
                        <li>Cadastro completo de talhões com área, localização, cultura e características do solo</li>
                        <li>Divisão por talhão, lote ou setor, conforme a sua realidade</li>
                        <li>Acompanhamento das operações agrícolas (plantio, tratos culturais, colheita, etc.)</li>
                    </ul>
                </article>

            </section>
        </main>
    );
}