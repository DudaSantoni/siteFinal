import Image from "next/image";

export function Sobre() {
    return (
        <section className="w-full bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/carrossel4.png')] 
                             bg-cover bg-center bg-no-repeat text-white pt-24 md:pt-[12dvh] px-4 md:px-10 pb-10">

            <main className="flex flex-col items-center justify-center md:flex-row md:justify-around gap-10">

                <section className="w-full md:w-3/5 pt-4 md:pt-0 text-justify">

                    <h1 className="text-4xl md:text-8xl font-bold mb-6 md:mb-10 mt-20">SOBRE</h1>

                    <p className="text-sm md:text-2xl w-full mb-4">
                        O projeto NextGen - Soluções Agrícolas contribuirá diretamente para a sociedade ao modernizar o setor agrícola, promovendo uma agricultura mais eficiente, sustentável e inteligente. Através da coleta e análise de dados em tempo real (como umidade do solo, temperatura e localização geográfica), o sistema permite que produtores rurais tomem decisões mais precisas e estratégicas no cultivo da soja e, futuramente, de outras culturas.
                    </p>

                    <p className="text-sm md:text-2xl w-full mb-4">
                        Aumento da produtividade agrícola: Ao oferecer dados atualizados e confiáveis, o sistema auxilia o produtor na melhoria do rendimento por hectare, tornando a produção mais eficiente e lucrativa.
                    </p>
                    <p className="text-sm md:text-2xl w-full mb-4">
                        Apoio à agricultura familiar e de pequeno porte: A interface amigável e acessível do sistema permite que pequenos produtores também adotem tecnologias de ponta, democratizando o acesso à inovação no campo.
                    </p>
                    <p className="text-sm md:text-2xl w-full mb-4">
                        Integração entre setores: A plataforma permite a colaboração entre produtores, técnicos agrícolas, cooperativas e fornecedores, promovendo uma gestão agrícola mais conectada e inteligente.
                    </p>
                </section>

                <section className="w-full md:w-auto flex flex-col items-center gap-4 md:gap-8 pt-8 md:pt-25">

                    <Image
                        src="/pessoa1.png"
                        alt="Produtor rural observando a plantação"
                        width={300}
                        height={200}
                        className="w-full h-[200px] object-cover md:w-auto md:h-[200px] flex-shrink-0 max-w-sm"
                        sizes="(max-width: 768px) 90vw, 300px"
                    />

                    <Image
                        src="/pessoa2.png"
                        alt="Agricultor utilizando um tablet para monitorar dados"
                        width={300}
                        height={200}
                        className="w-full h-[200px] object-cover md:w-auto md:h-[200px] flex-shrink-0 max-w-sm"
                        sizes="(max-width: 768px) 90vw, 300px"
                    />

                    <Image
                        src="/pessoa3.png"
                        alt="Agricultora em campo de soja com um drone"
                        width={300}
                        height={200}
                        className="w-full h-[200px] object-cover md:w-auto md:h-[200px] flex-shrink-0 max-w-sm"
                        sizes="(max-width: 768px) 90vw, 300px"
                    />
                </section>
            </main>
        </section>
    );
}