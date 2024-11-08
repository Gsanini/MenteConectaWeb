import Blob from "./components/svgs/BlobDireitoSuperior";
import Header from "./views/HeaderView";
import SectionHomeView from "./views/SectionHomeView";

function App() {
  return (
    <div className="relative">
      <Header />
      <Blob />
      <SectionHomeView />
    </div>
  );
}

export default App;
