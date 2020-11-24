import React, { useEffect, useState } from "react";
import MyNavbar from "../../Navbar/MyNavbar";
import BackgroundImage from "../../../images/19089.jpg";
import EditarReclamoModal from "./EditarReclamoModal";
import DetalleReclamoModal from "./DetalleReclamoModal";
import EliminarReclamoModal from "./EliminarReclamoModal";
import RepararReclamoModal from "./RepararReclamoModal";

function VerReclamosPendientes() {
  const [reclamosPendientes, setReclamosPendientes] = useState([]);

  //#region Test Data
  const jsonData = [
    {
      reclamoID: 1141,
      DNI: 41499363,
      nombre: "Diego",
      telefono: "3624647777",
      fecha: "10/12/2020",
      razonLlamada: "No se prende el anafe",
      garantia: "Si",
      lugarCompra: "Fravegas",
    },
    {
      reclamoID: 5241,
      DNI: 40282718,
      nombre: "Desiree",
      telefono: "+1 (858) 498-2643",
      fecha: "2017-10-10T10:08:10 +03:00",
      razonLlamada:
        "Deserunt deserunt sunt velit commodo nulla qui ut. Do in nulla consequat magna irure ex fugiat fugiat adipisicing. Ullamco magna labore cupidatat cillum velit aute. Elit ex dolore elit eiusmod irure pariatur consequat. Eu commodo occaecat mollit est ipsum irure pariatur incididunt.\r\n",
      garantia: "Si",
      lugarCompra: "Fravegas",
    },
    {
      reclamoID: 5123,
      DNI: 42284417,
      nombre: "Christi",
      telefono: "+1 (828) 461-3121",
      fecha: "2015-01-02T09:49:48 +03:00",
      razonLlamada:
        "Ea id officia ad elit eiusmod laborum proident aute voluptate aliqua fugiat. Culpa laborum ipsum Lorem ipsum id pariatur consequat dolor amet ex. Laboris deserunt fugiat cupidatat quis eu ad qui aute excepteur dolore. Et sunt anim est sint ut proident deserunt. Velit exercitation Lorem mollit culpa sunt velit eiusmod velit laborum reprehenderit ut. Enim culpa aute labore laboris in ut qui magna et fugiat et sunt consequat.\r\n",
      garantia: "No",
      lugarCompra: "Fravegas",
    },
    {
      reclamoID: 6646,
      DNI: 41858049,
      nombre: "Wood",
      telefono: "+1 (815) 586-3182",
      fecha: "2017-02-08T01:53:12 +03:00",
      razonLlamada:
        "Non nisi et cillum nulla anim et laborum. Enim nulla est elit officia veniam do Lorem culpa eiusmod sint nostrud ad. Aliqua reprehenderit ea culpa dolore incididunt ipsum culpa aute adipisicing sunt. Reprehenderit incididunt adipisicing culpa consectetur cillum culpa enim sunt proident. Amet cupidatat aliqua velit magna proident non consectetur nulla fugiat ex deserunt ex cillum pariatur. Officia dolore mollit nulla nostrud quis ipsum.\r\n",
      garantia: "Si",
      lugarCompra: "Fravegas",
    },
    {
      reclamoID: 7323,
      DNI: 41250743,
      nombre: "Lynn",
      telefono: "+1 (942) 415-3151",
      fecha: "2019-12-24T10:04:57 +03:00",
      razonLlamada:
        "Nisi proident exercitation mollit in culpa. Sunt incididunt id irure laboris. Pariatur eiusmod et eu aliqua eu amet sunt aliqua culpa nulla dolor est eiusmod reprehenderit. Irure adipisicing aliquip id magna et enim sit officia qui sit non. Exercitation veniam amet id ea labore fugiat reprehenderit id veniam duis deserunt eu. Reprehenderit elit dolor sint consectetur aliqua. Sint id reprehenderit culpa dolore laborum.\r\n",
      garantia: "No",
      lugarCompra: "Fravegas",
    },
  ];

  //#endregion

  // request de datos
  //setReclamosPendientes(jsonData);

  // const getReclamosPendientes = async () => {
  //   try {
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  // useEffect(() => {
  //   getReclamosPendientes();
  // }, []);

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
                <th>Reparar</th>
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
