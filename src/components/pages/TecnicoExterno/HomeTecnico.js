import React from "react";
import MyNavbar from "../../Navbar/MyNavbar";

function HomeTecnico() {
  return (
    <div>
      <MyNavbar
        mylinks={[
          { lnombre: "Reclamos pendientes", to: "/tecnico/rependientes" },
          { lnombre: "Reclamos en Gestion", to: "/tecnico/regestion" },
        ]}
        homeLink={[{ tipo: "Tecnico Externo", to: "/tecnico" }]}
      />
      <div className="text-center">
        <div>
          <h1 style={{ marginTop: "10%", fontSize: "90px" }}>Bienvenido/a</h1>
        </div>
        <div>
          <h2 style={{ marginTop: "40px" }}>HYPER ARREGLOS</h2>
        </div>
        <div>
          <h3 style={{ marginTop: "65px" }}>Tecnico Externo</h3>
        </div>
      </div>
    </div>
  );
}

export default HomeTecnico;
