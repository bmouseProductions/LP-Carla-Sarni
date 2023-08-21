import sallus from "../../assets/carlanovo1.webp";

export default function SectionSallus() {
  return (
    <section
      className="w-full px-5 mb-20 mt-10 lg:mt-20 flex flex-col lg:flex-row items-center lg:items-start justify-center gap-5 lg:gap-10a xl:gap-20 text-white "
      data-aos="flip-up"
      data-aos-duration="1500"
    >
      <div>
        <img src={sallus} className="max-w-md" alt="" />
      </div>
      <div className="max-w-lg lg:pt-10">
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gradient mb-5 ">
          Carla Sarni
        </h1>
        <p className="mb-2">
          Mãe, esposa e CEO de 11 empresas do Grupo Salus, a maior holding com
          foco nos segmentos de saúde, beleza e bem-estar do Brasil, e líder de
          uma rede com 12 mil colaboradores e mais de 950 franquias (sendo 78
          lojas próprias), atendendo 8 milhões de pessoas em todo o país.
        </p>
        <p className="mb-2">
          Ao longo dos últimos 28 anos, tornou-se referência no mundo dos
          negócios pelo crescimento exponencial de suas empresas em vários
          mercados, conseguindo destaque até mesmo nos mais concorridos.
        </p>
        <p className="mb-2">
          Prova de seu sucesso é que, em 2016, a Sorridents se tornou a 1ª
          franquia a ser case de estudo da Harvard Business School — e o mesmo
          se repetiu 4 anos depois na Universidade de Stanford.
        </p>
        <p className="mb-2">
          E agora, na Imersão da Expansão Empresarial, vai revelar como você
          também pode conseguir o mesmo de forma saudável e levar a operação da
          sua empresa ao próximo nível.
        </p>
        <p className="mb-2">
          Para participar gratuitamente da Imersão e ser avisado quando
          começar, toque no link abaixo e inscreva-se já.
        </p>
      </div>
    </section>
  );
}
