import Image from "next/image";

export default function Cultivo() {
    return (

        <main className="min-h-screen w-full bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/carrossel4.png')] 
                        bg-cover bg-center bg-no-repeat text-white pt-24 md:pt-[17dvh] px-4 md:px-20">

            <h1 className="text-4xl md:text-7xl font-bold mb-6 md:mb-10 mt-6 md:mt-10">
                PILARES DO CULTIVO DE SOJA
            </h1>

            <section className="flex flex-col gap-6 md:gap-8 text-justify pb-16">

                <p className="text-sm md:text-2xl w-full mb-4">
                    O plantio de soja exige atenção a diversos fatores para garantir alta produtividade. O clima ideal varia entre 20°C e 30°C, sendo que a germinação das sementes ocorre melhor quando o solo está entre 24°C e 32°C. Além disso, a escolha do solo faz toda a diferença: o ideal é que seja fértil, com boa matéria orgânica, bem drenado e com boa capacidade de retenção de água — como os solos argilosos ou franco-arenosos.
                </p>

                <section className="flex flex-col md:flex-row items-center justify-between gap-6">

                    <p className="w-full md:w-[55dvw] text-sm md:text-2xl">
                        Mas não basta só plantar. O manejo da soja envolve um conjunto de práticas estratégicas: desde a escolha de cultivares adaptadas à sua região, passando pela época certa de plantio, até o monitoramento contínuo de pragas e doenças. A manutenção da qualidade do solo, a nutrição das plantas e a rotação de culturas também são práticas essenciais. <br />
                        O preparo começa com análise de solo e correção da acidez. A calagem é indispensável para fornecer cálcio e magnésio, enquanto o gesso agrícola pode ser usado para corrigir camadas mais profundas.
                    </p>

                    <Image
                        src="/soja.png"
                        alt="foto da soja"
                        width={400}
                        height={400}
                        className="w-full h-auto object-cover max-w-xs md:max-w-none md:w-[27dvw]"
                        sizes="(max-width: 768px) 100vw, 400px"
                    />
                </section>

                <p className="text-sm md:text-2xl">
                    O plantio ocorre, em geral, entre outubro e dezembro, acompanhando o início das chuvas. O espaçamento recomendado fica entre 45 e 50 cm entre linhas, ajustado conforme a fertilidade do solo.
                </p>
                <p className="text-sm md:text-2xl">
                    Durante o ciclo, a lavoura exige atenção constante. O controle de pragas como percevejos e lagartas deve ser feito com base no manejo integrado, evitando resistência. As principais doenças incluem a ferrugem asiática, o mofo-branco e o oídio, combatidas com cultivares resistentes, rotação de culturas e fungicidas. As plantas daninhas também devem ser controladas para evitar competição por água e nutrientes. A adubação segue a análise do solo, com destaque para fósforo e potássio, e a inoculação com Bradyrhizobium japonicum garante a fixação biológica de nitrogênio.
                </p>
                <p className="text-sm md:text-2xl">
                    O ponto ideal de colheita ocorre quando os grãos apresentam umidade entre 13% e 15% e as vagens estão secas e amareladas. Após a colheita, o armazenamento deve manter os grãos com cerca de 12% de umidade, em silos ou armazéns ventilados. No transporte, é importante evitar danos mecânicos e contaminação por umidade, garantindo a qualidade do produto final.
                </p>
                <p className="text-sm md:text-2xl">
                    O cultivo da soja avança com o uso de biotecnologia, que oferece sementes mais resistentes a pragas e herbicidas. Práticas como a rotação de culturas, o plantio direto e a integração lavoura-pecuária-floresta contribuem para a conservação do solo e o aumento da produtividade. Além disso, tecnologias como drones, sensores e sistemas de agricultura de precisão permitem o monitoramento em tempo real, tornando a produção mais eficiente e sustentável.
                </p>
            </section>
        </main>
    );
}
