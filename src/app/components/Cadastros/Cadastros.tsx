import Image from "next/image";

export function Cadastros() {
    return (
        <section className="bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/fundo2.png')] bg-cover bg-center bg-no-repeat text-white pt-20 pb-10">

            <h1 className="text-4xl md:text-6xl xl:text-8xl font-bold mx-4 md:mx-10 xl:ml-20 mb-10 xl:mb-20">CADASTRO DOS TALHÕES</h1>

            <main className="flex flex-col xl:flex-row w-full justify-center xl:justify-around items-center px-4 md:px-10 xl:px-20 gap-10">

                <section className="flex flex-col w-full xl:w-[55vw]">

                    <article className="mt-10">
                        <h2 className="border-r-4 border-[#A2D13D] text-xl md:text-3xl xl:text-[3rem] font-semibold pr-4 my-5 md:my-10 ml-auto text-right">Cadastro e login</h2>

                        <p className="text-sm md:text-2xl w-full mb-4">Antes de começar a cadastrar seus talhões, é necessário criar uma conta gratuita em nossa plataforma. O processo é rápido e seguro:</p>

                        <ul className="list-disc pl-5 md:pl-12">
                            <li className="text-sm md:text-2xl w-full mb-4">Cadastro de Usuário: Preencha seus dados básicos (nome, e-mail, senha) e crie sua conta.</li>
                            <li className="text-sm md:text-2xl w-full mb-4">Login Seguro: Acesse sua área exclusiva usando seu e-mail e senha para visualizar e gerenciar seus talhões com total privacidade.</li>
                        </ul>
                    </article>

                    <article>
                        <h2 className="border-r-4 border-[#A2D13D] text-xl md:text-3xl xl:text-[3rem] font-semibold pr-4 my-5 md:my-10 ml-auto text-right">Personalização</h2>

                        <p className="text-sm md:text-2xl w-full mb-4">Após o login, você poderá criar e personalizar cada talhão da sua propriedade de acordo com suas necessidades. Nossa ferramenta permite:</p>

                        <ul className="list-disc pl-5 md:pl-12">
                            <li className="text-sm md:text-2xl w-full mb-4">Nomear cada talhão</li>
                            <li className="text-sm md:text-2xl w-full mb-4">Definir área (em hectares ou outra unidade)</li>
                            <li className="text-sm md:text-2xl w-full mb-4">Adicionar localização geográfica</li>
                            <li className="text-sm md:text-2xl w-full mb-4">Classificar por tipo de cultivo, solo ou sistema de irrigação</li>
                            <li className="text-sm md:text-2xl w-full mb-4">Atribuir cores ou marcadores para facilitar a visualização no mapa</li>
                        </ul>
                    </article>

                    <article>
                        <h2 className="border-r-4 border-[#A2D13D] text-xl md:text-3xl xl:text-[3rem] font-semibold pr-4 my-5 md:my-10 ml-auto text-right">Registro</h2>

                        <p className="text-sm md:text-2xl w-full mb-4">Além da criação dos talhões, nossa plataforma permite o registro detalhado de atividades e informações técnicas, como:</p>

                        <ul className="list-disc pl-5 md:pl-12">
                            <li className="text-sm md:text-2xl w-full mb-4">Datas de plantio e colheita</li>
                            <li className="text-sm md:text-2xl w-full mb-4">Histórico de manejo (adubação, irrigação, defensivos)</li>
                            <li className="text-sm md:text-2xl w-full mb-4">Produtividade por safra</li>
                            <li className="text-sm md:text-2xl w-full mb-4">Observações de campo</li>
                            <li className="text-sm md:text-2xl w-full mb-4">Relatórios e gráficos de desempenho</li>
                        </ul>

                    </article>

                </section>

                <Image
                    src="/mobile3.png"
                    alt="home page do aplicativo nextgen"
                    width={400}
                    height={800}

                    className="w-1/2 md:w-1/3 xl:w-[24vw] h-auto max-w-[250px] md:max-w-sm my-10 xl:my-0"
                    sizes="(max-width: 768px) 70vw, (max-width: 1280px) 35vw, 24vw"
                />
            </main>
        </section>
    );
}