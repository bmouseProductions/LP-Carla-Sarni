import Botao from '../../components/button/Index'
import Slider from '../../components/slider/Empresas'

import logo from '../../assets/logo-branca.webp'
import carla from '../../assets/carla-seta.webp'
import logoVacians from '../../assets/logosSalus/AMO-VACINAS.webp'
import logoOC  from '../../assets/logosSalus/OLHAR-CERTO.webp'
import sorridents from '../../assets/logosSalus/SORRIDENTS.webp'
import stanford from '../../assets/logosSalus/STANDFORD.webp'
import havard from '../../assets/logosSalus/havard.webp'


import DateRangeIcon from '@mui/icons-material/DateRange';
import ScheduleIcon from '@mui/icons-material/Schedule';


const slideContent = [ 
    <img className='' src={logoVacians} alt="" />,
    <img className='' src={logoOC} alt="" />,
    <img className='' src={sorridents} alt="" />,
    <img className='' src={stanford} alt="" />,
    <img className='' src={havard} alt="" />,
];
        
const slideCount = slideContent.length;

export default function Section1() {
    return(
        <section className="w-full pt-[60px] bg-gradient-to-b lg:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2a2f78] to-sky-500 md:to-70% ">
            <div className='md:px-[5%] flex flex-col lg:flex-row-reverse items-center lg:items-start lg:mt-10 '>
                <div data-aos="fade-up-right" data-aos-duration="1500">
                    <img src={carla} alt="" className='w-[95%] m-auto md:m-0 md:max-w-lg xl:max-w-3xl vibrate-2' />
                </div>
                
                <div className='w-full px-5 md:px-0 flex flex-col items-center  md:w-[60%] max-w-[600px] md:justify-start lg:items-start 'data-aos="fade-up-left" data-aos-duration="1500">
                    <div className='w-full flex flex-col'>
                        <h1 className='text-3xl lg:text-4xl font-semibold uppercase text-white'></h1>
                        <img src={logo}  className='xl:max-w-xl ' alt="" />
                        
                    </div>
                    <h2 className='mt-4 font-semibold mb-5 text-white text-center md:text-[28px] lg:text-[26px] '>Descubra como expandir sua empresa e levar a sua marca para todo o Brasil, independente da sua área de atuação.</h2>
                    <div className='p-3 flex flex-col sm:flex-row justify-center items-center mb-14 w-full text-[18px] md:text-[20px] font-normal text-center bg-[#2a2f78] text-white box'>
                        Evento Gratuito 
                        <div className='mt-1 sm:mt-0'>
                            <DateRangeIcon className='mx-2'/> 05/10 ás 
                            <ScheduleIcon className='mx-2'/> 20h
                        </div>
                    </div>
                    
                    <Botao>
                        QUERO EXPANDIR MINHA EMPRESA
                    </Botao>
                </div>
            </div>
            <div className='bg-white'>
                <Slider
                    slideContent= {slideContent}
                    slideCount= {slideCount}
                />
            </div>
        </section>
    )
}