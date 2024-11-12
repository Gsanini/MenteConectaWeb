import ChamadaConsulta from "../../components/ChamadaConsulta";
import ChamadaTrabalho from "../../components/chamadaTrabalho";
import Header from "../HeaderView";
import SectionCardsAndSobre from "../SectionCards/SectionCards";
import SectionHomeView from "../SectionHomeView";
import SectionProfissionais from "../SectionProfissionais";

function Home() {
  return (
    <div className="relative">
      <Header />
      {/* <ButtonAgendarConsultaFlut /> */}
      <SectionHomeView />
      <SectionCardsAndSobre />
      <ChamadaConsulta />
      <SectionProfissionais />
      <ChamadaTrabalho />
    </div>
  );
}

export default Home;
