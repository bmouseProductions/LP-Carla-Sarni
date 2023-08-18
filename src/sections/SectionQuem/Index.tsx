

export default function SectionQuem(){
    return (
        <section className="w-full px-5 mt-14 lg:mt-20 flex flex-col items-center gap-5 lg:gap-10a xl:gap-20 text-white bg-gradient-to-b from-sky-500 to-[#2a2f78]">
            
            <div className="lg:max-w-[1300px] " data-aos="zoom-in-down" data-aos-duration="1500">
                <h1  className="text-4xl md:text-5xl lg:text-5xl sm:text-center font-bold text-gradient mb-5 ">
                    Para quem é indicada a Imersão Expansão Empresarial?
                </h1>
                <p className='mb-5 sm:text-center text-xl'>
                    Aprenda com renomados especialistas do setor e descubra o
                    <strong> MÉTODO REPLICAVÉL</strong> para expandir a sua empresa e levar a sua marca
                    para todo o Brasil, independente do seu nicho de atuação. Se você deseja
                    expandir o número de unidades físicas e elevar o faturamento 
                    ao próximo nível, esta é a oportunidade ideal.
                </p>

                <p className='text-xl'> Essa <strong className='text-xl'>EXPANSÃO EMPRESARIAL</strong> é para você que: </p>

                <div className='w-full mt-3 lg:mt-7 grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 justify-center items-center gap-5'>

                    <div className="h-full flex flex-col items-center md:items-end gap-5">

                        <div className='w-full max-w-[450px] h-1/2 p-3 flex flex-col gap-2 border-2 border-b-2 rounded bg-[#2a2f78b5] '>
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

                        <div className='w-full max-w-[450px] h-1/2 p-3 flex flex-col gap-2 border-2 border-b-2 rounded bg-[#2a2f78b5] '>
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
                    </div>

                    <div className=" flex flex-col items-center md:items-start gap-5">
                        <div className='w-full max-w-[450px] p-3 flex flex-col gap-2 border-2 border-b-2 rounded bg-[#2a2f78b5] '>
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

                        <div className='w-full max-w-[450px] p-3 flex flex-col gap-2 border-2 border-b-2 rounded bg-[#2a2f78b5] '>
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
                </div>


                
            </div>

            {/* 
                <ul className='pl-5'>
                    
                    <li className=''>Tem uma empresa consolidada e quer se tornar referência na sua região;</li>
                    <li className=''>Já tem uma equipe estruturada, mas agora quer expandir o número de unidades físicas da sua empresa e não sabe como;</li>
                    <li className=''>Quer saber se é melhor expandir pelo modelo de franquias, por lojas próprias, ecossistema empresarial ou outros modelos de negócios;</li>
                    <li className=''>Tem apetite de crescer e quer levar o faturamento da sua empresa ao próximo nível, mesmo que ainda não saiba por onde começar.</li>
                </ul>
                

                <div data-aos="zoom-in-down" data-aos-duration="1500">
                    <img src={carla2} alt="" className='w-full max-w-lg ' />
                </div>
            */}
         
     </section>
    )
}