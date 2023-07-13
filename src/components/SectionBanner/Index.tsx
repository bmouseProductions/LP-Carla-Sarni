import Botao from '../button/Index'
import logo from '../../assets/logo.webp'
import carla from '../../assets/carla-seta.webp'

export default function Section1() {
    return(
        <section className="w-full min-h-screen pt-[60px] md:px-[5%] bg-gradient-to-b lg:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2a2f78]   to-sky-500 md:to-70%">
            <div className='flex flex-col lg:flex-row-reverse md:justify-center md:items-center'>
                <img src={carla} alt="" className='w-[95%] m-auto md:m-0 md:max-w-lg xl:max-w-3xl vibrate-2'/>
                <div className='w-full px-5 md:px-0 flex flex-col items-center md:w-[60%] max-w-[600px] md:justify-center'>
                    <div className='w-full flex flex-col'>
                        <h1 className='text-3xl lg:text-4xl font-semibold uppercase text-white'>masterclass</h1>
                        <img src={logo}  className='xl:max-w-xl ' alt="" />
                        <span className='w-full text-[18px] md:text-[20px] font-normal text-center  text-white border-[2px] rounded-xl'>Faça parte dessa masterClass exclusiva</span>
                    </div>
                    <h2 className='mt-4 font-semibold text-white text-center  mb-10 md:text-[28px] lg:text-[26px] '>Descubra como expandir sua empresa e levar a sua marca para todo o Brasil, independente da sua área de atuação.</h2>
                    <Botao>
                        Garantir minha vaga
                    </Botao>
                </div>
            </div>
        </section>
    )
}