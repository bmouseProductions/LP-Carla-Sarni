import carla2 from '../../assets/carla2.webp'

export default function SectionQuem(){
    return (
        <section className="w-full px-5 mt-10 lg:mt-20 flex flex-col items-center gap-5 lg:gap-10a xl:gap-20 text-white bg-gradient-to-b from-sky-500 to-[#2a2f78]">
            
            <div className="lg:max-w-[1300px] " data-aos="zoom-in-down" data-aos-duration="1500">
                <h1  className="text-4xl md:text-5xl lg:text-5xl text-center font-bold text-gradient mb-5 ">
                    Participe da nossa Masterclass exclusiva!
                </h1>
                <p className='mb-2 text-center text-xl'>
                    Aprenda com renomados especialistas do setor e descubra o
                    <strong> MÉTODO REPLICAVÉL</strong> para expandir a sua empresa e levar a sua marca
                    para todo o Brasil, independente do seu nicho de atuação. Se você deseja
                    expandir o número de unidades físicas e elevar o faturamento 
                    ao próximo nível, esta é a oportunidade ideal.
                </p>

                <p className='text-xl'> Essa <strong className='text-xl'>MASTERCLASS</strong> é para você que: </p>

                <div className='w-full mt-3 lg:mt-7 flex flex-col lg:flex-row flex-wrap lg:justify-around gap-5'>

                    <div className='w-full lg:w-[600px] p-3 flex flex-col gap-2 border-2 border-b-2 rounded '>
                        <div className='w-full flex gap-5'>
                            <h1 className='text-2xl font-bold'>
                                icon e title
                            </h1>
                        </div>

                        <div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae harum ad quo non, tempora natus ullam, culpa doloribus at nulla reiciendis soluta ut sint? Laboriosam quo autem aut totam vitae!
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
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae harum ad quo non, tempora natus ullam, culpa doloribus at nulla reiciendis soluta ut sint? Laboriosam quo autem aut totam vitae!
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
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae harum ad quo non, tempora natus ullam, culpa doloribus at nulla reiciendis soluta ut sint? Laboriosam quo autem aut totam vitae!
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
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae harum ad quo non, tempora natus ullam, culpa doloribus at nulla reiciendis soluta ut sint? Laboriosam quo autem aut totam vitae!
                            </p>
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
                */}
            </div>

            <div data-aos="zoom-in-down" data-aos-duration="1500">
                <img src={carla2} alt="" className='w-full max-w-lg ' />
            </div>
         
     </section>
    )
}