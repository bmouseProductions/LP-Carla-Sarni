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

                <div className='flex flex-col gap-10'>
                    <div className="flex items-center gap-3 shadow-lg bg-[#d6e3f2] rounded-2xl p-5 text-black" data-aos="fade-up-right" data-aos-duration="1500">
                        <img src={iconSeta} alt="" />
                        <p>Os principais erros que mantêm sua empresa estagnada e que a impedem de crescer.</p>
                    </div>

                    <div className="flex items-center gap-3 shadow-lg bg-[#d6e3f2] rounded-2xl p-5 text-black" data-aos="fade-up-left" data-aos-duration="1500">
                        <img src={iconMao} alt="" />
                        <p>Como reduzir custos e aumentar a margem de lucro da sua empresa.</p>
                    </div>

                    <div className="flex items-center gap-3 shadow-lg bg-[#d6e3f2] rounded-2xl p-5 mb-5 text-black" data-aos="fade-up" data-aos-duration="1500">
                        <img src={iconFranquia} alt="" />
                        <p>Como expandir o número de lojas da sua empresa, do jeito certo, atuando em qualquer mercado. Dentre outros.</p>
                    </div>

                    <div className='w-full mt-3 lg:mt-7 flex flex-col lg:flex-row flex-wrap lg:justify-around gap-5'>

                        <div className='w-full lg:w-[600px] p-3 flex flex-col gap-2 border-2 border-b-2 rounded '>
                            <div className='w-full flex gap-5'>
                                <h1 className='text-2xl font-bold'>
                                    icon e title
                                </h1>
                            </div>

                            <div>
                                <p>
                                    Tem uma empresa consolidada e quer se tornar referência na sua região
                                </p>
                            </div>
                        </div>

                        <div className='w-full lg:w-[600px] p-3 flex flex-col gap-2 border-2 border-b-2 rounded '>
                            <div className='w-full flex gap-5'>
                                <h1 className='text-2xl font-bold'>
                                    icon e title
                                </h1>
                            </div>

                            <div>
                                <p>
                                    Quer saber se é melhor expandir pelo modelo de franquias, por lojas próprias, um ecossistema empresarial ou outros modelos de negócios.
                                </p>
                            </div>
                        </div>

                        <div className='w-full lg:w-[600px] p-3 flex flex-col gap-2 border-2 border-b-2 rounded '>
                            <div className='w-full flex gap-5'>
                                <h1 className='text-2xl font-bold'>
                                    icon e title
                                </h1>
                            </div>

                            <div>
                                <p>
                                    Já tem uma equipe estruturada, mas agora quer expandir o número de unidades físicas da sua empresa e não sabe como.
                                </p>
                            </div>
                        </div>

                        <div className='w-full lg:w-[600px] p-3 flex flex-col gap-2 border-2 border-b-2 rounded '>
                            <div className='w-full flex gap-5'>
                                <h1 className='text-2xl font-bold'>
                                    icon e title
                                </h1>
                            </div>

                            <div>
                                <p>
                                Tem apetite de crescer e quer levar o faturamento da sua empresa ao próximo nível, mesmo que ainda não saiba por onde começar.
                                </p>
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