
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
    return(
        <footer className="w-full py-5 flex flex-col items-center gap-3 lg:flex-row justify-center lg:gap-20 text-black bg-[#d6e3f2] " >
            <div className='flex gap-2 justify-center items-center' data-aos="zoom-in-donw" data-aos-duration="1500">
                <a href="https://www.facebook.com/dracarlasarni" target='_blank'> <FacebookIcon className='fill-white'/> </a>
                <a href="https://www.instagram.com/dracarla.sarni/" target='_blank'> <InstagramIcon className='fill-white'/> </a>
                <a href="https://www.youtube.com/@dracarlasarni" target='_blank'> <YouTubeIcon className='fill-white'/> </a>
            </div>

            <p data-aos="zoom-in-donw" data-aos-duration="1500">Copyright Ⓒ 2023 Carla Sarni.</p>

            <a data-aos="zoom-in-donw" data-aos-duration="1500" href="https://www.bmouseproductions.com/" target="_blank" rel="noopener noreferrer"> Desenvolvido por <strong>BMOUSE PRODUCTIONS</strong> </a>
        </footer>
    )
}