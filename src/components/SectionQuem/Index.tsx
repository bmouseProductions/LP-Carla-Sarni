import carla2 from '../../assets/carla2.webp'

export default function SectionQuem(){
    return (
        <section className="w-full px-7 mt-10 lg:mt-20 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-5 lg:gap-10a xl:gap-20 text-white bg-gradient-to-b from-sky-500 to-[#2a2f78]">
            
            <div className="max-w-xl " data-aos="zoom-in-down" data-aos-duration="1500">
                <h1  className="text-4xl md:text-5xl lg:text-5xl font-bold text-gradient mb-5 ">
                    Participe da nossa Masterclass exclusiva!
                </h1>
                <p className='mb-2'>
                    Aprenda com renomados especialistas do setor e descubra o
                    <strong> MÉTODO REPLICAVÉL</strong> para expandir a sua empresa e levar a sua marca
                    para todo o Brasil, independente do seu nicho de atuação. Se você deseja
                    se tornar expandir o número de unidades físicas e elevar o faturamento 
                    ao próximo nível, esta é a oportunidade ideal.
                </p>
                Essa <strong>MASTERCLASS</strong> é para você que:
                <ul className='pl-5'>
                    <li className='list-disc'>Tem uma empresa consolidada e quer se tornar referência na sua região;</li>
                    <li className='list-disc'>Já tem uma equipe estruturada, mas agora quer expandir o número de unidades físicas da sua empresa e não sabe como;</li>
                    <li className='list-disc'>Quer saber se é melhor expandir pelo modelo de franquias, por lojas próprias, um ecossistema empresarial ou outros modelos de negócios;</li>
                    <li className='list-disc'>Tem apetite de crescer e quer levar o faturamento da sua empresa ao próximo nível, mesmo que ainda não saiba por onde começar.</li>
                </ul>
            </div>

            <div data-aos="zoom-in-down" data-aos-duration="1500">
                <img src={carla2} alt="" className='w-full max-w-lg ' />
            </div>
         
     </section>
    )
}