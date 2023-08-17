import Acordion from "../../components/accordion/Index";

export default function SectionFAQ() {
  const contentAccordion = [
    {
      title: "GESTÃO DE PESSOAS",
      text: "Descubra como desbloquear o potencial máximo da sua equipe. Aprenda a liderar, motivar e inspirar, transformando colaboradores em verdadeiros parceiros no crescimento do seu negócio. Na Imersão Expansão Empresarial, mergulhe em estratégias comprovadas para construir uma cultura empresarial coesa e produtiva.",
    },
    {
      title: "GESTÃO FINANCEIRA",
      text: "Aprenda a dominar as finanças do seu negócio de forma estratégica. Neste pilar, você vai desvendar os segredos para otimizar o fluxo de caixa, investir com inteligência e tomar decisões financeiras sólidas. A Imersão vai te capacitar a entender e controlar as finanças de maneira que impulsione o crescimento sustentável.",
    },
    {
      title: "GESTÃO DE VENDAS",
      text: "As vendas são a espinha dorsal de qualquer empreendimento. Neste pilar, você mergulhará em táticas avançadas de vendas que geram resultados reais. Desde a identificação de leads promissores até o fechamento, você vai adquirir as habilidades necessárias para impulsionar suas vendas e aumentar sua base de clientes de forma significativa.",
    },
    {
      title: "GESTÃO DE NEGÓCIOS",
      text: "Elevação dos seus negócios a um novo patamar começa aqui. Explore estratégias testadas e comprovadas para aprimorar processos, identificar oportunidades e enfrentar desafios de mercado. Na Imersão, você terá acesso a insights que vão transformar a maneira como você conduz seus negócios, abrindo caminho para expansão e sucesso duradouro.",
    },
  ];
  return (
    <section className="w-full flex flex-col lg:flex-row px-5 justify-center items-center">
      <div className="relative mr-48 ">
        <div className="relative z-0">
          <h1 className="text-[150px] lg:text-[300px] font-bold text-white">
            FAQ
          </h1>
        </div>
        <div className="w-full h-full absolute top-[50%] ml-3 lg:ml-6 z-10">
          <h1 className="w-[300px] lg:w-full text-xl lg:text-3xl font-bold text-center">
            PERGUNTAS FRENQUENTES
          </h1>
        </div>
      </div>

      <div className="">
        {contentAccordion.map((acordion, index) => (
          <Acordion
            title={acordion.title}
            text={acordion.text}
            id={index.toString()}
            style="w-full lg:w-[500px] mb-5"
          />
        ))}
      </div>
    </section>
  );
}
