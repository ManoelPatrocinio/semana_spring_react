import { Barchart } from "components/Barchart";
import { DataTable } from "components/DataTable";
import { DonutChart } from "components/DonutChart";
import { Footer } from "components/Footer";
import { NavBar } from "components/NavBar";
function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3"> Dashboard de vendas</h1>
        <div className="row px-3 py-3">
          <div className="col-sm-6">
            <h2 className="text-center text-secondary">Taxa de Sucesso (%)</h2>
            <Barchart />
          </div>
          <div className="col-sm-6">
            <h2 className="text-center text-secondary">Todas Vendas (%)</h2>

            <DonutChart />
          </div>
        </div>
        <div className="py-3">
          <h2 className="text-primary">Relatório Vendas</h2>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
