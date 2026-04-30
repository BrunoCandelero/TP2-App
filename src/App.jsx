import React, { useState } from "react";
import EntradaPassword from "./Componentes/EntradaPassword.jsx";
import NivelSeguridad from "./Componentes/NivelSeguridad.jsx";
import BotonCopiar from "./Componentes/BotonCopiar.jsx";
import ListaRequisitos from "./Componentes/ListaRequisitos.jsx"; 
import "./App.css";

function App() {
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <h1>Evaluador de Contraseñas</h1>

      <div className="main-layout">
        <div className="left-panel">
          <EntradaPassword password={password} setPassword={setPassword} />
          <NivelSeguridad password={password} />
          <BotonCopiar password={password} />
        </div>

        <div className="right-panel">
          <ListaRequisitos password={password} />
        </div>
      </div>
    </div>
  );
}

export default App;