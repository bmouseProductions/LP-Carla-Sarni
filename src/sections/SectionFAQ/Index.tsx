import Acordion from "../../components/accordion/Index";

export default function SectionFAQ() {
  const contentAccordion = [
    {
      title: "Como participar da Imersão?",
      text: "Para participar gratuitamente da Imersão Expansão Empresarial e ser avisado sobre o início, clique no link fornecido e faça sua inscrição.",
    },
    {
      title: "A Imersão é realmente gratuita?",
      text: "Sim, a participação na Imersão Expansão Empresarial é gratuita.",
    },
    {
      title: "Quando a Imersão começa?",
      text: "Para saber sobre o início da Imersão, inscreva-se no link fornecido, e você será avisado sobre as datas e detalhes do evento.",
    },
    {
      title: "A Imersão é um evento 100% online?",
      text: "Sim, a Imersão Expansão Empresarial é um evento online, o que significa que você pode participar de qualquer lugar com acesso à internet.",
    },
  ];
  //oi
  return (
    <section className="w-full flex flex-col lg:flex-row px-5 justify-center items-center gap-5 "> {/*bg-gradient-to-b from-[#0000009b]*/}
      <div className=" lg:max-w-[500px] xl:max-w-none relative mr-4 2xl:mr-10 ">
        <div className="relative z-0">
          <h1 className=" text-[120px] sm:text-[200px] md:text-[200px] lg:text-[250px] xl:text-[300px] font-bold text-center text-white">
            FAQ
          </h1>
        </div>
        <div className="w-full h-full absolute top-[50%] ml-3 lg:ml-6 z-10 ">
          <h1 className="w-[300px] lg:w-full text-2xl lg:text-3xl font-bold text-center">
            PERGUNTAS FREQUENTES
          </h1>
        </div>
      </div>

      <div className="w-full lg:w-[500px]">
        {contentAccordion.map((acordion, index) => (
          <Acordion
            title={acordion.title}
            text={acordion.text}
            id={index.toString()}
            style="w-full mb-5 rounded-b-lg"
          />
        ))}
      </div>
    </section>
  );
}
