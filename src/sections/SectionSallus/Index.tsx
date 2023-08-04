

import sallus from '../../assets/carla2.webp'

export default function SectionSallus(){

    return (
        <section className="w-full px-5 mb-20 mt-10 lg:mt-20 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-5 lg:gap-10a xl:gap-20 text-white " data-aos="flip-up" data-aos-duration="1500">
            <div>
                <img src={sallus} className='max-w-xl' alt="" />
            </div>
            <div className="max-w-lg ">
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gradient mb-5 ">
                    Carla Sarni
                </h1>
                    <p className='mb-2'>
                        Ao longo dos últimos anos, a Sorridents e outras empresas
                        do Grupo Salus alcançaram a marca de mais de 950 franquias
                        (sendo 78 lojas próprias), atendendo 8 milhões de pessoas em
                        todo o país.
                    </p>
                    <p className='mb-2'>
                        Sempre me perguntam como isso foi possível, seja em palestras
                        ou em eventos que participo.
                    </p>
                    <p className='mb-2'>
                        Quando eu e o Cleber tínhamos apenas 1 consultório, eu
                        também me questionava se existia um caminho para crescer
                        de forma saudável e sem abrir mão da qualidade que prezamos
                        em nosso atendimento.
                    </p>
                    <p className='mb-2'>
                        Mas com o passar do tempo, acertando e errando diversas
                        vezes, eu entendi na prática que existia um <strong>MÉTODO PARA
                        O CRESCIMENTO EMPRESARIAL</strong> e que depois foi replicado
                        em várias de nossas outras marcas.
                    </p>
                    <p className='mb-2'>
                        E o principal: sem abrir mão da excelência, sem aumentar
                        nossa carga de trabalho diária e com processos eficientes que
                        funcionam para qualquer sócio ou franqueado.
                    </p>
            </div>
            
        </section>
    )
}