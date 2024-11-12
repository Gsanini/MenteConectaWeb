import ButtonAgendarConsultaFlut from "./components/ButtonAgendarConsultaFlut";
import ChamadaConsulta from "./components/ChamadaConsulta";
import ChamadaTrabalho from "./components/chamadaTrabalho";
import Header from "./views/HeaderView";
import SectionCardsAndSobre from "./views/SectionCards/SectionCards";

import SectionHomeView from "./views/SectionHomeView";
import SectionProfissionais from "./views/SectionProfissionais";

function App() {
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

export default App;
