import logoBranca from '../../assets/logo-branca.webp'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PlaceIcon from '@mui/icons-material/Place';
import Botao from '../../components/button/Index';
import Slider from '../../components/slider/Depoimentos'
import Depoiment from '../../components/depoiment/Depoiment'

const slideContent = [
    <Depoiment
        nome='Matheus'
        image= 'https://github.com/matheustxr.png'
        depoiment= 'lorem one shape asthetic, look at him, is that a pride gay flag? parece que alguem gosta de um baseball bat, não é mesmo?'
    />,
    <Depoiment
        nome='Matheus'
        image= 'https://github.com/matheustxr.png'
        depoiment= 'lorem one shape asthetic, look at him, is that a pride gay flag? parece que alguem gosta de um baseball bat, não é mesmo?'
    />,
    <Depoiment
        nome='Matheus'
        image= 'https://github.com/matheustxr.png'
        depoiment= 'lorem one shape asthetic, look at him, is that a pride gay flag? parece que alguem gosta de um baseball bat, não é mesmo?'
    />,
]

const slideCount = slideContent.length

export default function SectionPrice(){
    return (
        <section className="py-20 px-5 md-[5%] flex flex-col lg:flex-row justify-center lg:justify-around xl:justify-center items-center xl:gap-[150px] bg-[#2a2f78]">
            <div className='flex items-center flex-col gap-5 font-semibold text-white rounded-2xl p-5' data-aos="fade-up" data-aos-duration="1500">
                <div className=''>
                    <h1 className='text-xl lg:text-2xl font-semibold uppercase text-white'></h1>
                    <img src={logoBranca} alt=""  className='w-full max-w-xs '/>
                </div>
                
                <span className='text-[12px] uppercase font-bold'>próxima turma</span>
                <div className='w-[250px] p-3 flex items-center gap-5 rounded text-black bg-[#d6e3f2] shadow-lg'>
                    <CalendarTodayIcon className='!text-[50px] ' />
                    <p>17, 18 e 19 de Julho</p>
                </div>
                <span className='text-[12px] uppercase font-bold'>local</span>
                <div className='w-[250px] p-3 flex items-center gap-5 rounded text-black bg-[#d6e3f2] shadow-lg'>
                    <PlaceIcon className='!text-[50px] ' />
                    <p>Alphaville - SP</p>
                </div>
                
            </div>

            <div className='w-full lg:w-1/3 mt-10 lg:mt-0'>
                <Slider
                    slideContent={slideContent}
                    slideCount={slideCount}
                />
            </div>
            
            
        </section>
    )
}