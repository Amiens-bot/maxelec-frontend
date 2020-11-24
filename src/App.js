import "./App.css";
import Home from "./components/pages/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeEmpleado from "./components/pages/Empleado/HomeEmpleado";
import HomeTecnico from "./components/pages/TecnicoExterno/HomeTecnico";
import RegistrarLlamada from "./components/pages/Empleado/RegistrarLlamada";
import VerReclamosPendientes from "./components/pages/TecnicoExterno/VerReclamosPendientes";
import VerReclamosEnGestion from "./components/pages/TecnicoExterno/VerReclamosEnGestion";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/empleado" component={HomeEmpleado} exact />
          <Route path="/empleado/llamada" component={RegistrarLlamada} exact />
          <Route path="/tecnico" component={HomeTecnico} exact />
          <Route
            path="/tecnico/rependientes"
            component={VerReclamosPendientes}
            exact
          />
          <Route
            path="/tecnico/regestion"
            component={VerReclamosEnGestion}
            exact
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
