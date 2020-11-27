import React, { useState } from "react";
import axios from "axios";
import moment from "moment";
import MyNavbar from "../../Navbar/MyNavbar";
import BackgroundImage from "../../../images/19089.jpg";

function RegistrarLlamada() {
  //#region -> Estados
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");

  // checkear con bd por duplicado.
  const [DNI, setDNI] = useState("");

  const [razonLlamada, setRazonLlamada] = useState("");
  const [solucionLlamada, setSolucionLlamada] = useState("");

  // check de la factura, garantia.
  const [productoSerie, setProductoSerie] = useState("");
  const [facturaNumero, setFacturaNumero] = useState("");
  const [producto, setProducto] = useState("");
  const [lugarCompra, setLugarCompra] = useState("");
  const [facturaFinalFecha, setFacturaFinalFecha] = useState("");

  const [clientOverview, setClientOverview] = useState([]);

  // ciudad-provincias
  const [provincia, setProvincia] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [items, setItems] = useState([]);

  //otros
  const [direccion, setDireccion] = useState("");
  const [tecnicoExterno, setTecnicoExterno] = useState("");
  const [tecnicoExternoData, setTecnicoExternoData] = useState([]);
  const [garantia, setGarantia] = useState("");

  // Opcionalidades
  const [opcionForm, setOpcionForm] = useState(null);

  //#endregion

  //#region -> Test Data

  const data = {
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    DNI: DNI,
    razonLlamada: razonLlamada,
    solucionLlamada: solucionLlamada,
    producto: producto,
    productSerie: productoSerie,
    lugarCompra: lugarCompra,
    facturaNumero: facturaNumero,
    provincia: provincia,
    ciudad: ciudad,
    direccion: direccion,
    tecnicoExterno: tecnicoExterno,
  };

  //#endregion

  //#region -> OnSubmit Stuff

  const onClickGarantia = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://localhost:3001/api/reclamos/clienteoverview?numero_serie=${productoSerie}&numero_factura=${facturaNumero}`
      )
      .then((res) => {
        console.log(res.data.payload[0]);

        // 210 000003
        // 410 000007
        setProducto(res.data.payload[0].nombre_producto);
        setLugarCompra(res.data.payload[0].negocio_nombre);
        setFacturaFinalFecha(
          moment(res.data.payload[0].fecha_expedicion).format("DD-MM-YYYY")
        );
        setGarantia(
          res.data.payload[0].garantiaexpirada === true ? "No" : "Si"
        );
        //setClientOverview(res.data.payload[0]);
        //console.log("cliente" + clientOverview);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const onSubmitRegistrar = (e) => {
    e.preventDefault();

    // reclamo Solucionado
    if (opcionForm === "SOLUCIONADO") {
      if (
        nombre === "" ||
        apellido === "" ||
        telefono === "" ||
        DNI === "" ||
        razonLlamada === "" ||
        solucionLlamada === ""
      ) {
        window.alert("Datos incompletos");
      } else {
        const data = {
          persona: {
            dni: DNI,
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            direccion: null,
          },
          reclamo: {
            razon: razonLlamada,
            solucion: solucionLlamada,
            fecha_ingreso: moment().format("YYYY-MM-DD"),
            fecha_solucion: moment().format("YYYY-MM-DD"),
            dni_empleado: 41499363,
          },
        };

        //console.log(data);
        axios
          .post(`http://localhost:3001/api/reclamos/derivados`, data)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.error(err);
          });

        setNombre("");
        setApellido("");
        setTelefono("");
        setDNI("");
        setRazonLlamada("");
        setSolucionLlamada("");
        window.alert("Reclamo Solucionado!");
      }
    }

    // Reclamo Derviado
    if (opcionForm === "RECLAMO") {
      if (
        nombre === "" ||
        apellido === "" ||
        telefono === "" ||
        DNI === "" ||
        razonLlamada === "" ||
        producto === "" ||
        productoSerie === "" ||
        lugarCompra === "" ||
        facturaNumero === "" ||
        provincia === "" ||
        ciudad === "" ||
        direccion === "" ||
        tecnicoExterno === ""
      ) {
        window.alert("Datos incompletos");
      } else {
        const data = {
          DNI,
          razonLlamada,
          // fecha, genera fecha de derivacion
          estado: "PENDIENTE",
          // DNI_Empleado, Este es el DNI del Empleado que toma la llamada, va a ser uno por default por que no tenemos Login
          productoSerie,
          // CUIT, Este es el cuit del Empresa_Tecnico
        };
        console.log(
          "Datos completos, mandar datos al backend de reclamo estado SOLUCIONADO"
        );
        console.log(data);
        setNombre("");
        setApellido("");
        setTelefono("");
        setDNI("");
        setRazonLlamada("");
        setProducto("");
        setProductoSerie("");
        setLugarCompra("");
        setFacturaNumero("");
        setProvincia("");
        setCiudad("");
        setDireccion("");
        setTecnicoExterno("");
        window.alert("Reclamo generado!");
      }
    }
  };
  //#endregion

  //#region -> traer ciudades, y traer tecnicos.
  const onSelectedProvincia = (provinciaSelecionada) => {
    setCiudad(""); // resetea los valores de ciudad, de esta manera no quedan resagado un estado.
    setTecnicoExterno("");

    axios
      .get(`http://localhost:3001/api/ciudades/${provinciaSelecionada}`)
      .then((res) => {
        //console.log(res.data.payload);
        setItems(res.data.payload);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const onSelectedCiudad = (ciudadSeleccionada) => {
    //console.log(ciudadSeleccionada);
    setTecnicoExterno("");
    axios
      .get(`http://localhost:3001/api/tecnicosexternos/${ciudadSeleccionada}`)
      .then((res) => {
        //console.log(res.data.payload);
        setTecnicoExternoData(res.data.payload);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  //#endregion

  //#region -> Conditional rendering - Boton Registrar
  let buttonRegistrar = false;

  if (opcionForm === null) {
    buttonRegistrar = true;
  } else {
    buttonRegistrar = false;
  }
  //#endregion

  //#region -> Conditional rendering - Form Solucionado, Form Reclamo
  let formSolucionado = null;

  if (opcionForm === "SOLUCIONADO") {
    formSolucionado = (
      //INPUT - Solucion
      <div className="form-group">
        <label htmlFor="inputSolucionLlamada">Solucion</label>
        <textarea
          className="form-control"
          id="inputSolucionLlamada"
          rows="5"
          style={{ resize: "none" }}
          value={solucionLlamada}
          onChange={(e) => setSolucionLlamada(e.target.value)}
        ></textarea>
      </div>
    );
  } else if (opcionForm === "RECLAMO") {
    formSolucionado = (
      <form>
        <div className="form-group">
          <div className="form-row">
            {/* INPUT - N° FACTURA */}
            <div className="form-group col-md-1">
              <label htmlFor="inputNfactura">N° Factura</label>
              <input
                type="number"
                className="form-control"
                id="inputNfactura"
                value={facturaNumero}
                onChange={(e) => setFacturaNumero(e.target.value)}
              />
            </div>

            {/* INPUT - N° de Serie */}
            <div className="form-group col-md-1">
              <label htmlFor="inputNserie">N° de Serie</label>
              <input
                type="text"
                className="form-control"
                id="inputNserie"
                value={productoSerie}
                onChange={(e) => setProductoSerie(e.target.value)}
              />
            </div>

            {/* INPUT - Producto */}
            <div className="form-group col-md-3">
              <label htmlFor="inputProducto">Producto</label>
              <input
                type="text"
                className="form-control"
                id="inputProducto"
                value={producto}
                disabled
              />
            </div>

            {/* INPUT - Lugar de compra*/}
            <div className="form-group col-md-4">
              <label htmlFor="inputLugarCompra">Lugar de Compra</label>
              <input
                type="text"
                className="form-control"
                id="inputLugarCompra"
                value={lugarCompra}
                disabled
              />
            </div>

            {/* INPUT - Fecha */}
            <div className="form-group col-md-1">
              <label htmlFor="inputFechaFactura">Fecha</label>
              <input
                type="text"
                className="form-control"
                id="inputFechaFactura"
                value={facturaFinalFecha}
                disabled
              />
            </div>

            {/* GARANTIA? */}
            <div className="form-group col-md-1">
              <label htmlFor="inputGarantia">Garantia?</label>
              <input
                type="text"
                className="form-control"
                id="inputGarantia"
                value={garantia}
                disabled
              />
            </div>

            {/* BOTON - Buscar GARANTIA*/}
            <button
              type="submit"
              className="btn btn-primary"
              name="Garantia"
              style={{ height: "50%", marginTop: "31px", marginLeft: "5px" }}
              onClick={onClickGarantia}
            >
              Buscar <i className="fas fa-search ml-1"></i>
            </button>
          </div>

          <div className="form-row">
            {/* INPUT - Provinicia */}
            <div className="form-group col-md-3">
              <label htmlFor="inputProvincia">Provincia</label>
              <select
                id="inputProvincia"
                className="form-control"
                value={provincia}
                onChange={(e) => {
                  setProvincia(e.target.value);
                  onSelectedProvincia(e.target.value); // aqui voy a buscar todas las ciudades con el value que paso
                }}
              >
                <option selected disabled value="">
                  Selecionar Provincia
                </option>
                <option value="Chaco">Chaco</option>
                <option value="Corrientes">Corrientes</option>
                <option value="Formosa">Formosa</option>
                <option value="Misiones">Misiones</option>
              </select>
            </div>

            {/* INPUT - Ciudad */}
            <div className="form-group col-md-3">
              <label htmlFor="inputCiudad">Ciudad</label>
              <select
                id="inputCiudad"
                className="form-control"
                value={ciudad}
                onChange={(e) => {
                  setCiudad(e.target.value);
                  onSelectedCiudad(e.target.value);
                }} // aqui voy a hacer lo mismo que con provincia, solo que voy a buscar los tecnicos externos con estas ciuidades.ID
              >
                <option selected disabled value="">
                  Selecionar Ciudad
                </option>
                {items.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.nombre}
                  </option>
                ))}
              </select>
            </div>

            {/* INPUT - Direccion */}
            <div className="form-group col-md-6">
              <label htmlFor="inputDireccion">Direccion</label>
              <input
                type="text"
                className="form-control"
                id="inputDireccion"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
            </div>
          </div>

          <div className="form-row">
            {/* INPUT - TECNICO EXTERNO */}
            <div className="form-group col-md-6">
              <label htmlFor="inputTE">Designar a Tecnico Externo</label>
              <select
                id="inputTE"
                className="form-control"
                value={tecnicoExterno}
                onChange={(e) => setTecnicoExterno(e.target.value)}
              >
                <option selected disabled value="">
                  Selecionar Tecnico Externo
                </option>

                {tecnicoExternoData.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.nombre} - {item.direccion} - {item.Ciudad},{" "}
                    {item.provincia} - Gestionando:
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </form>
    );
  }
  //#endregion

  //#region RETURN
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
      {/* Navbar */}
      <MyNavbar
        mylinks={[{ lnombre: "Registrar llamada", to: "/empleado/llamada" }]}
        homeLink={[{ tipo: "Empleado", to: "/empleado" }]}
      />

      <h1 className="ml-5">REGISTRAR LLAMADA</h1>

      <div
        className="mx-5  my-3 px-5 py-5 rounded bg-dark text-white border border-danger "
        style={{ boxShadow: "inset 0 0 25px #000000" }}
      >
        <form onSubmit={onSubmitRegistrar}>
          {/* INPUT - Nombre */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputNombre">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="inputNombre"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            {/* INPUT - Apellido */}
            <div className="form-group col-md-6">
              <label htmlFor="inputApellido">Apellido</label>
              <input
                type="text"
                className="form-control"
                id="inputApellido"
                placeholder="Apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
            </div>
          </div>

          {/* INPUT - Telefono */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputTelefono">Telefono</label>
              <input
                type="number"
                className="form-control"
                id="inputTelefono"
                placeholder="Telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>

            {/* INPUT - DNI */}
            <div className="form-group col-md-6">
              <label htmlFor="inputDNI">DNI</label>
              <input
                type="number"
                className="form-control"
                id="inputDNI"
                placeholder="DNI"
                value={DNI}
                onChange={(e) => setDNI(e.target.value)}
              />
            </div>
          </div>

          {/* INPUT - Razon Llamada */}
          <div className="form-group">
            <label htmlFor="inputRazonLlamada">Razon de la llamada</label>
            <textarea
              className="form-control"
              id="inputRazonLlamada"
              rows="5"
              style={{ resize: "none" }}
              value={razonLlamada}
              onChange={(e) => setRazonLlamada(e.target.value)}
            ></textarea>
          </div>

          {/* Form segun el radio button */}
          {formSolucionado}

          {/* Boton Registrar */}
          <button
            type="submit"
            className="btn btn-success"
            name="Registrar"
            disabled={buttonRegistrar} // desabilito el boton si no apretamos una opcion.
          >
            Registrar
          </button>

          {/* Opcionalidades - RADIO BUTTONS*/}
          <form className="form-check form-check-inline ml-4">
            <input
              className="form-check-input "
              type="radio"
              id="radioSolucionado"
              value="SOLUCIONADO"
              checked={opcionForm === "SOLUCIONADO"}
              onChange={(e) => setOpcionForm(e.target.value)}
            />
            <label className="form-check-label mr-2" htmlFor="radioSolucionado">
              Solucionado
            </label>

            <input
              className="form-check-input "
              type="radio"
              value="RECLAMO"
              id="radioReclamo"
              checked={opcionForm === "RECLAMO"}
              onChange={(e) => setOpcionForm(e.target.value)}
              onClick={() => setSolucionLlamada(null)} // borra lo que esta en solucion. no hace falta capas
            />
            <label className="form-check-label mr-2" htmlFor="radioReclamo">
              Derivar Reclamo
            </label>

            {/* <div className="ml-3">Selected option is : {opcionForm}</div> */}
          </form>
        </form>
      </div>

      {/* Test de datos */}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
  //#endregion
}

export default RegistrarLlamada;
