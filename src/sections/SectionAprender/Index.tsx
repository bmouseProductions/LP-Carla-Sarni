import iconSeta from '../../assets/seta-icon.webp'
import iconMao from '../../assets/mao-icon.webp'
import iconFranquia from '../../assets/franquia-icon.webp'
import Botao from '../../components/button/Index'

export default function SectionAprender(){
    return (
        <section className=" bg-gradient-to-b from-[#2a2f78] to-sky-500">
            <div className='w-full max-w-[1400px] m-auto px-5 md:px-[5%] flex flex-col items-center text-white '>
                <div data-aos="fade-donw" data-aos-duration="1500">
                    <h1 className='text-4xl md:text-5xl text-center font-bold text-gradient mb-10 '>
                        Alguns dos temas que serão abordados nesta MasterClass são:
                    </h1>
                </div>

                
                <div className='flex flex-col items-center'>
                    <div className="flex flex-col md:flex-row  p-8 items-center justify-center ">
                        {/* Pilares do Lado Esquerdo */}
                        <div className="flex flex-col w-full md:w-1/2 lg:w-2/4 p-4">
                            <div className="relative bg-[#0ea5e9] shadow-lg rounded-lg p-6 flex flex-col justify-between flex-grow">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-2 text-white">
                                    GESTÃO DE PESSOAS
                                    </h2>
                                    <p className="text-white font-medium text-sm">
                                    Descubra como desbloquear o potencial máximo da sua equipe.
                                    Aprenda a liderar, motivar e inspirar, transformando colaboradores
                                    em verdadeiros parceiros no crescimento do seu negócio. Na Imersão
                                    Expansão Empresarial, mergulhe em estratégias comprovadas para
                                    construir uma cultura empresarial coesa e produtiva.
                                    </p>
                                </div>
                                <div className="card-decoration"></div>
                            </div>

                            <div className="relative bg-[#0ea5e9] shadow-lg rounded-lg p-6 flex flex-col justify-between flex-grow mt-8">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-2 text-white">
                                    GESTÃO FINANCEIRA
                                    </h2>
                                    <p className="text-white font-medium text-sm">
                                    Aprenda a dominar as finanças do seu negócio de forma estratégica.
                                    Neste pilar, você vai desvendar os segredos para otimizar o fluxo
                                    de caixa, investir com inteligência e tomar decisões financeiras
                                    sólidas. A Imersão vai te capacitar a entender e controlar as
                                    finanças de maneira que impulsione o crescimento sustentável.
                                    </p>
                                </div>
                                <div className="card-decoration"></div>
                            </div>
                        </div>

                        {/* Pilares do Lado Direito */}
                        <div className="flex flex-col w-full md:w-1/2 lg:w-2/4 p-4">
                            <div className="relative bg-[#0ea5e9] shadow-lg rounded-lg p-6 flex flex-col justify-between flex-grow">
                            <div>
                                <h2 className="text-2xl font-semibold mb-2 text-white">
                                GESTÃO DE VENDAS
                                </h2>
                                <p className="text-white font-medium text-[13px]">
                                As vendas são a espinha dorsal de qualquer empreendimento. Neste
                                pilar, você mergulhará em táticas avançadas de vendas que geram
                                resultados reais. Desde a identificação de leads promissores até o
                                fechamento, você vai adquirir as habilidades necessárias para
                                impulsionar suas vendas e aumentar sua base de clientes de forma
                                significativa.
                                </p>
                            </div>
                            <div className="card-decoration"></div>
                            </div>
                            <div className="relative bg-[#0ea5e9] shadow-lg rounded-lg p-6 flex flex-col justify-between flex-grow mt-8">
                            <div>
                                <h2 className="text-2xl font-semibold mb-2 text-white">
                                GESTÃO DE NEGÓCIOS
                                </h2>
                                <p className="text-white font-medium text-[13px]">
                                Elevação dos seus negócios a um novo patamar começa aqui. Explore
                                estratégias testadas e comprovadas para aprimorar processos,
                                identificar oportunidades e enfrentar desafios de mercado. Na
                                Imersão, você terá acesso a insights que vão transformar a maneira
                                como você conduz seus negócios, abrindo caminho para expansão e
                                sucesso duradouro.
                                </p>
                            </div>
                            <div className="card-decoration"></div>
                            </div>
                        </div>
                    </div>

                    <Botao>
                        Garantir minha vaga
                    </Botao>
                </div>
            </div>
        </section>
    )
}