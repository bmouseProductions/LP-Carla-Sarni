import Acordion from "../../components/accordion/Index";

export default function SectionFAQ() {
  const contentAccordion = [
    {
      title: "Pergunta",
      text: "Resposta",
    },
    {
      title: "Pergunta",
      text: "Resposta",
    },
    {
      title: "Pergunta",
      text: "resposta",
    },
    {
      title: "Pergunta",
      text: "Resposta",
    },
  ];
  //oi
  return (
    <section className="w-full flex flex-col lg:flex-row px-5 justify-center items-center">
      <div className="relative mr-4 lg:mr-48">
        <div className="relative z-0">
          <h1 className="text-[150px] lg:text-[300px] font-bold text-white">
            FAQ
          </h1>
        </div>
        <div className="w-full h-full absolute top-[50%] ml-3 lg:ml-6 z-10">
          <h1 className="w-[300px] lg:w-full lg:text-3xl font-bold text-center">
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
