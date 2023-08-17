
import { Formulario } from "../formulario/Index";
import Slider from "../slider/Empresas";

import tessmann from '../../assets/tiago-tessmann.png'


export default function Section2() {

    const slideContent = [
        'Texto do Slide 1', 
        'Texto do Slide 2', 
        'Texto do Slide 3', 
        <img key={1} src={tessmann} alt="imagem tiago tessmann" className="w-auto h-[300px]"/>
    ];
        
    const slideCount = slideContent.length;


    return (
        <section className="py-10 w-full min-h-[50vh] lg:min-h-screen bg-[#04083a] flex flex-col  items-center max-w-screen text-white">
            <div className="mb-10 px-5 w-full lg:min-h-[450px] flex justify-center items-center video ">
                <iframe className="w-full lg:w-[80%] h-[200px] md:h-[350px] lg:h-[450px] " src="https://www.youtube.com/embed/ZNHFoOvSlNs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>

            <div className="mb-10 px-5 w-full md:w-[50%] flex flex-col items-center ">
                <h2 className="text-5xl font-bold">Seja um recevendedor!!</h2>
                <p className=" md:text-center mt-10 text-xl ">
                Quer obter mais informações e entrar para o mundo Zoomies? Preencha o formulário abaixo e envie uma mensagem para nós!
                </p>
            </div>

            <div className="mb-20 px-5">
                <Formulario />
            </div>

            

            <Slider
                slideContent= {slideContent}
                slideCount= {slideCount}
            />


            
            
        </section>
    )
}