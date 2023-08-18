import { ReactElement } from "react"


interface botaoProps{
    children: ReactElement | string
}

export default function Botao( {children}:botaoProps){
    return (
        <a href="https://payment.hotmart.com/next/T83787812B?checkoutMode=10&bid=1687181621748" className="w-full max-w-[400px] mx-auto py-5 rounded font-bold text-white  bg-[#222069] shadow-[0px_0px_20px_#fff] hover:bg-[#5842b2] hover:shadow-[0px_0px_20px_#05093c] hover:text-black transition-all duration-200 animate-bounce " target='_blank'>
            <button className="w-full max-w-[400px] justify-center!text-[26px]">
                
                
                    {children}
                
            </button>
        </a>
    )
}