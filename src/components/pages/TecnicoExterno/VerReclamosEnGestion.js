import React, { useEffect, useState } from "react";
import MyNavbar from "../../Navbar/MyNavbar";
import BackgroundImage from "../../../images/19089.jpg";
import EditarReclamoModal from "./EditarReclamoModal";
import DetalleReclamoModal from "./DetalleReclamoModal";
import EliminarReclamoModal from "./EliminarReclamoModal";
import FinalizarReclamoModal from "./FinalizarReclamoModal";

function VerReclamosEnGestion() {
  //#region Test Data
  const jsonData = [
    {
      reclamoID: 9999,
      DNI: 41443315,
      nombre: "Pedro",
      telefono: "3624647777",
      fecha: "10/12/2020",
      razonLlamada: "No se prende el anafe",
      garantia: "Si",
      lugarCompra: "Fravegas",
    },
    {
      reclamoID: 4269,
      DNI: 40221518,
      nombre: "Maxi",
      telefono: "+1 (858) 498-2643",
      fecha: "2017-10-10T10:08:10 +03:00",
      razonLlamada:
        "sdsdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd",
      garantia: "Si",
      lugarCompra: "Fravegas",
    },
  ];

  //#endregion

  return (
    <div
      style={{
        backgroundImage: "url(" + BackgroundImage + ")",
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <MyNavbar
        mylinks={[
          { lnombre: "Reclamos pendientes", to: "/tecnico/rependientes" },
          { lnombre: "Reclamos en Gestion", to: "/tecnico/regestion" },
        ]}
        homeLink={[{ tipo: "Tecnico Externo", to: "/tecnico" }]}
      />
      <h1 className="ml-5">Reclamos en Gestion</h1>
      <div
        className="mx-5  my-3 px-5 py-5 rounded bg-dark border border-success "
        style={{ boxShadow: "inset 0 0 25px #000000" }}
      >
        <table className="table-responsive">
          <table class="table text-white">
            <thead>
              <tr>
                <th>N° Reclamo</th>
                <th>DNI</th>
                <th>Nombre</th>
                <th>Telefono</th>
                <th>Fecha</th>
                <th>Detalle</th>
                <th>Editar</th>
                <th>Eliminar</th>
                <th>Finalizar</th>
              </tr>
            </thead>
            <tbody>
              {jsonData.map((item) => (
                <tr key={item.reclamoID}>
                  <td>{item.reclamoID}</td>
                  <td>{item.DNI}</td>
                  <td>{item.nombre}</td>
                  <td>{item.telefono}</td>
                  <td>{item.fecha}</td>
                  <td>
                    <DetalleReclamoModal reclamo={item} />
                  </td>
                  <td>
                    <EditarReclamoModal reclamo={item} />
                  </td>
                  <td>
                    <EliminarReclamoModal reclamo={item} />
                  </td>
                  <td>
                    <FinalizarReclamoModal reclamo={item} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </table>
      </div>
    </div>
  );
}

export default VerReclamosEnGestion;
