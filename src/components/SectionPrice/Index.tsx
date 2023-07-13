import logo from '../../assets/logo.webp'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PlaceIcon from '@mui/icons-material/Place';
import Botao from '../button/Index';

export default function SectionPrice(){
    return (
        <section className="py-20 px-5 md-[5%] flex flex-col lg:flex-row justify-center lg:justify-around xl:justify-center items-center xl:gap-[150px] bg-[#6c64eb]">
            <div className='flex items-center flex-col gap-5 font-semibold text-white rounded-2xl p-5'>
                <div className=''>
                    <h1 className='text-xl lg:text-2xl font-semibold uppercase text-white'>masterclass</h1>
                    <img src={logo} alt=""  className='w-full max-w-xs '/>
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
            <div className='pt-20   w-full max-w-md h-[600px]  flex flex-col items-center justify-center shadow-lg bg-linhas rounded-2xl  '>
                <h2 className='text-4xl font-bold'>Oferta Exclusiva</h2>
                <h3 className='text-3xl font-semibold uppercase bg-sky-500 text-white my-5 '>por apenas 12x</h3>
                <h2 className='text-8xl xl:text-9xl font-bold'><span className='text-xl xl:text-5xl font-bold'>R$</span>59,58</h2>
                <h3 className='text-xl font-semibold mt-3'>ou 597,00 à vista!</h3>
                <div className='w-full px-3 my-auto flex justify-center'>
                    <Botao>
                        Garantir minha vaga
                    </Botao>
                </div>
                
            </div>
        </section>
    )
}