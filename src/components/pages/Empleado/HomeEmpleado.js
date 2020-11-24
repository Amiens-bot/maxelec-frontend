import React from "react";
import MyNavbar from "../../Navbar/MyNavbar";

function HomeEmpleado() {
  return (
    <>
      <MyNavbar
        mylinks={[{ lnombre: "Registrar llamada", to: "/empleado/llamada" }]}
        homeLink={[{ tipo: "Empleado", to: "/empleado" }]}
      />
      <div className="text-center">
        <div>
          <h1 style={{ marginTop: "10%", fontSize: "90px" }}>Bienvenido/a</h1>
        </div>
        <div>
          <h2 style={{ marginTop: "40px" }}>Diego Montaña</h2>
        </div>
        <div>
          <h3 style={{ marginTop: "65px" }}>Empleado/a Post-Venta</h3>
        </div>
      </div>
    </>
  );
}

export default HomeEmpleado;
