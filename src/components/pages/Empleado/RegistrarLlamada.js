import React, { useState } from "react";
import axios from "axios";
import MyNavbar from "../../Navbar/MyNavbar";
import BackgroundImage from "../../../images/19089.jpg";

function RegistrarLlamada() {
  //#region -> Estados
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [DNI, setDNI] = useState("");
  const [razonLlamada, setRazonLlamada] = useState("");
  const [solucionLlamada, setSolucionLlamada] = useState("");
  // const [noSolucionLlamada, setNoSolucionLlamada] = useState(null); // no se si vamos a registrar un formulario rechazado
  const [producto, setProducto] = useState("");
  const [productoSerie, setProductoSerie] = useState("");
  const [lugarCompra, setLugarCompra] = useState("");
  const [facturaNumero, setFacturaNumero] = useState("");

  // ciudad-provincias
  const [provincia, setProvincia] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [items, setItems] = useState([]);

  //otros
  const [direccion, setDireccion] = useState("");
  const [tecnicoExterno, setTecnicoExterno] = useState("");
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

  const onClickGarantia = async (e) => {
    e.preventDefault();
    console.log("nro producto serie a checkear y traer info: " + productoSerie);
    if (productoSerie === "42") {
      setGarantia("SI");
    } else {
      setGarantia("NO");
    }
    try {
    } catch (err) {
      console.error(err.message);
    }
  };

  const onSubmitRegistrar = async (e) => {
    e.preventDefault();
    try {
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
            DNI,
            razonLlamada,
            solucionLlamada,
            // fecha,
            estado: "SOLUCIONADO",
            // DNI_Empleado, Este es el DNI del Empleado que toma la llamada, va a ser uno por default por que no tenemos Login
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
          setSolucionLlamada("");
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
          window.alert("Reclamo generado -> ID: 1234");
        }
      }

      console.log("RECLAMO");
    } catch (err) {
      console.error(err.message);
    }
  };
  //#endregion

  // traer ciudades
  const onSelectedProvincia = (provinciaSelecionada) => {
    console.log("Buscar ciudades con provincia: " + provinciaSelecionada);
    axios
      .get("http://localhost:5000/ciudades")
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
        <label for="inputSolucionLlamada">Solucion</label>
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
              <label for="inputNfactura">N° Factura</label>
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
              <label for="inputNserie">N° de Serie</label>
              <input
                type="text"
                class="form-control"
                id="inputNserie"
                value={productoSerie}
                onChange={(e) => setProductoSerie(e.target.value)}
              />
            </div>

            {/* INPUT - Producto */}
            <div className="form-group col-md-3">
              <label for="inputProducto">Producto</label>
              <input
                type="text"
                class="form-control"
                id="inputProducto"
                value={producto}
                //onChange={(e) => setProductoSerie(e.target.value)}
                disabled
              />
            </div>

            {/* INPUT - Lugar de compra*/}
            <div className="form-group col-md-3">
              <label for="inputLugarCompra">Lugar de Compra</label>
              <input
                type="text"
                class="form-control"
                id="inputLugarCompra"
                value={lugarCompra}
                disabled
              />
            </div>

            {/* INPUT - Fecha */}
            <div className="form-group col-md-1">
              <label for="inputFechaFactura">Fecha</label>
              <input
                type="text"
                className="form-control"
                id="inputFechaFactura"
                //value={facturaNumero}
                //onChange={(e) => setFacturaNumero(e.target.value)}
                disabled
              />
            </div>

            {/* INPUT - Dni Factura */}
            <div className="form-group col-md-1">
              <label for="inputDNIFACTURA">DNI-FACTURA</label>
              <input
                type="text"
                className="form-control"
                id="inputDNIFACTURA"
                //value={facturaNumero}
                //onChange={(e) => setFacturaNumero(e.target.value)}
                disabled
              />
            </div>

            {/* GARANTIA? */}
            <div className="form-group col-md-1">
              <label for="inputGarantia">Garantia?</label>
              <input
                type="text"
                className="form-control"
                id="inputGarantia"
                value={garantia}
                //onChange={(e) => setFacturaNumero(e.target.value)}
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
              <label for="inputProvincia">Provincia</label>
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
                <option value="CHACO">Chaco</option>
                <option value="CORRIENTES">Corrientes</option>
                <option value="FORMOSA">Formosa</option>
                <option value="MISIONES">Misiones</option>
              </select>
            </div>

            {/* INPUT - Ciudad */}
            <div className="form-group col-md-3">
              <label for="inputCiudad">Ciudad</label>
              <select
                id="inputCiudad"
                className="form-control"
                value={ciudad}
                onChange={(e) => setCiudad(e.target.value)} // aqui voy a hacer lo mismo que con provincia, solo que voy a buscar los tecnicos externos con estas ciuidades.ID
              >
                <option selected disabled value="">
                  Selecionar Ciudad
                </option>
                {items.map((item) => (
                  <option key={item.ciudadid} value={item.ciudadid}>
                    {item.nombre}
                  </option>
                ))}
              </select>
            </div>

            {/* INPUT - Direccion */}
            <div className="form-group col-md-6">
              <label for="inputDireccion">Direccion</label>
              <input
                type="text"
                class="form-control"
                id="inputDireccion"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
              />
            </div>
          </div>

          <div className="form-row">
            {/* INPUT - TECNICO EXTERNO */}
            <div className="form-group col-md-6">
              <label for="inputTE">Designar a Tecnico Externo</label>
              <select
                id="inputTE"
                className="form-control"
                value={tecnicoExterno}
                onChange={(e) => setTecnicoExterno(e.target.value)}
              >
                <option selected disabled value="">
                  Selecionar Tecnico Externo
                </option>
                <option>
                  Arreglo Mas - Av. pepe 123, Chaco, Saez Peña - Gestionando: 5
                </option>
                <option>
                  Hyper Arreglos - Av. los avalos, Chaco, Resistencia -
                  Gestionando: 2
                </option>
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
              <label for="inputNombre">Nombre</label>
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
              <label for="inputApellido">Apellido</label>
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
              <label for="inputTelefono">Telefono</label>
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
              <label for="inputDNI">DNI</label>
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
          <div class="form-group">
            <label for="inputRazonLlamada">Razon de la llamada</label>
            <textarea
              class="form-control"
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
              class="form-check-input "
              type="radio"
              id="radioSolucionado"
              value="SOLUCIONADO"
              checked={opcionForm === "SOLUCIONADO"}
              onChange={(e) => setOpcionForm(e.target.value)}
            />
            <label className="form-check-label mr-2" for="radioSolucionado">
              Solucionado
            </label>

            <input
              class="form-check-input "
              type="radio"
              value="RECLAMO"
              id="radioReclamo"
              checked={opcionForm === "RECLAMO"}
              onChange={(e) => setOpcionForm(e.target.value)}
              onClick={() => setSolucionLlamada(null)} // borra lo que esta en solucion. no hace falta capas
            />
            <label className="form-check-label mr-2" for="radioReclamo">
              Derivar Reclamo
            </label>

            {/* <div className="ml-3">Selected option is : {opcionForm}</div> */}
          </form>
        </form>
      </div>

      {/* Test de datos */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
  //#endregion
}

export default RegistrarLlamada;
