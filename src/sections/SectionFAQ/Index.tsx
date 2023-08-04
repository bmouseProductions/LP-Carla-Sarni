import Acordion from "../../components/accordion/Index"

export default function SectionFAQ(){
    const contentAccordion = [
        {
            title: 'teste acordion',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit molestiae, nulla aliquam cumque a odit accusamus natus sit pariatur ut animi iusto minima commodi, fugiat sint ea id nobis. Minima.',
        },

    ]
    return(
        <section className="w-full flex flex-col lg:flex-row px-5 justify-center">
            <div className="relative mr-48 ">
                <div className="relative z-0">
                    <h1 className="text-[150px] lg:text-[300px] font-bold text-white">FAQ</h1>
                </div>
                <div className="w-full h-full absolute top-[50%] ml-3 lg:ml-6 z-10">
                    <h1 className="w-[300px] lg:w-full text-xl lg:text-3xl font-bold">
                        PERGUNTAS FRENQUENTES
                    </h1>
                </div>
            </div>
            
            <div className="">
                {contentAccordion.map((acordion, index) => (
                    <Acordion 
                        title= {acordion.title}
                        text= {acordion.text}
                        id= {index.toString()}
                        style='w-full lg:w-[500px] !bg-red-500'
                    />
                ))}
            </div>
        </section>
    )
}