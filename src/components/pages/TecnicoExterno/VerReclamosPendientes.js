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
      reclamoID: 1940,
      razonLlamada:
        "Do cupidatat minim anim minim voluptate ex anim occaecat. Sit esse elit laborum quis fugiat ut esse adipisicing reprehenderit est fugiat ipsum. Laborum reprehenderit est ipsum elit.\r\n",
      DescripcionSolucion: "",
      DescripcionEliminacion: "",
      DescripcionRecivido: "",
      TecnicoID: "",
      TecnicoNombre: "",
      fechaIngreso: "2020-04-17",
      estado: "DERIVADOTE",
      DNI: 41548052,
      nombre: "Mcfadden",
      apellido: "Swanson",
      telefono: "(960) 478-2402",
      direccion: "Ridge Boulevard 123",
      ciudad: "Tioga",
      garantia: "Si",
      NombreCompania: "Fravegas",
      CUITDistribuidor: "30-42428339-9",
      nroFactura: 5229,
      fechaFacturaFinal: "2020-05-21",
      producto: "Termotanque",
      modelo: "xm-400",
      numeroSerieProducto: 516612,
    },
    {
      reclamoID: 8067,
      razonLlamada:
        "Deserunt commodo sint nulla ex elit dolore et. Cillum excepteur non mollit quis eiusmod ipsum. Eiusmod ea magna proident id duis consectetur duis sint. Deserunt ea nulla commodo ut aliqua nisi adipisicing cupidatat amet deserunt et.\r\n",
      DescripcionSolucion: "",
      DescripcionEliminacion: "",
      DescripcionRecivido: "",
      TecnicoID: "",
      TecnicoNombre: "",
      fechaIngreso: "2020-04-06",
      estado: "DERIVADOTE",
      DNI: 42079003,
      nombre: "Darla",
      apellido: "Mckay",
      telefono: "(945) 494-3647",
      direccion: "Cass Place 123",
      ciudad: "Brownlee",
      garantia: "Si",
      NombreCompania: "Fravegas",
      CUITDistribuidor: "30-44314386-9",
      nroFactura: 1447,
      fechaFacturaFinal: "2020-05-05",
      producto: "Termotanque",
      modelo: "xm-400",
      numeroSerieProducto: 224180,
    },
    {
      reclamoID: 8395,
      razonLlamada:
        "Duis anim cillum nisi id culpa aute. Amet commodo est magna nostrud anim. Id sit consectetur dolor duis laborum ullamco excepteur minim magna consectetur. Elit nulla laboris elit adipisicing labore eiusmod nostrud. Aliqua amet adipisicing duis est esse commodo. Labore tempor adipisicing labore velit eu.\r\n",
      DescripcionSolucion: "",
      DescripcionEliminacion: "",
      DescripcionRecivido: "",
      TecnicoID: "",
      TecnicoNombre: "",
      fechaIngreso: "2020-01-09",
      estado: "DERIVADOTE",
      DNI: 41652637,
      nombre: "Knight",
      apellido: "Dickerson",
      telefono: "(918) 468-3656",
      direccion: "Glenwood Road 123",
      ciudad: "Nadine",
      garantia: "Si",
      NombreCompania: "Fravegas",
      CUITDistribuidor: "30-45388173-9",
      nroFactura: 2772,
      fechaFacturaFinal: "2020-01-13",
      producto: "Termotanque",
      modelo: "xm-400",
      numeroSerieProducto: 247652,
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
                  <td>{item.fechaIngreso}</td>
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
