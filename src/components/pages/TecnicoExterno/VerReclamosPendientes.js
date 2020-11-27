import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import MyNavbar from "../../Navbar/MyNavbar";
import BackgroundImage from "../../../images/19089.jpg";
import EditarReclamoModal from "./EditarReclamoModal";
import DetalleReclamoModal from "./DetalleReclamoModal";
import EliminarReclamoModal from "./EliminarReclamoModal";
import RepararReclamoModal from "./RepararReclamoModal";

function VerReclamosPendientes() {
  const [reclamosPendientes, setReclamosPendientes] = useState([]);

  // request de datos
  const getReclamosPendientes = () => {
    axios
      .get(`http://localhost:3001/api/reclamos/pendientes/30610252334`)
      .then((res) => {
        //console.log(res.data.payload);
        setReclamosPendientes(res.data.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getReclamosPendientes();
  }, []);

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
      <h1 className="ml-5">Reclamos Pendientes</h1>
      <div
        className="mx-5  my-3 px-5 py-5 rounded bg-dark border border-success "
        style={{ boxShadow: "inset 0 0 25px #000000" }}
      >
        <table className="table-responsive">
          <table className="table text-white">
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
                <th>Reparar</th>
              </tr>
            </thead>
            <tbody>
              {reclamosPendientes.map((item) => (
                <tr key={item.ticket_id}>
                  <td>{item.ticket_id}</td>
                  <td>{item.dni}</td>
                  <td>{item.nombre}</td>
                  <td>{item.telefono}</td>
                  <td>{moment(item.fecha_reclamo).format("DD-MM-YYYY")}</td>
                  <td>
                    <DetalleReclamoModal reclamo={item} />
                  </td>
                  <td>
                    <EditarReclamoModal reclamo={item} />
                  </td>
                  <td>
                    <EliminarReclamoModal reclamo={item} disabled={false} />
                  </td>
                  <td>
                    <RepararReclamoModal reclamo={item} />
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

export default VerReclamosPendientes;
