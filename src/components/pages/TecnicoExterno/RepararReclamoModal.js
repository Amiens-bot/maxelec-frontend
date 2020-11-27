import React, { useState } from "react";
import axios from "axios";

function RepararReclamoModal({ reclamo }) {
  const [descripcionRecivido, setDescripcionRecivido] = useState("");
  const [tecnicosExternos, setTecnicosExternos] = useState([]);
  const [tecnico, setTecnico] = useState();

  const conseguirTecncios = (cuit) => {
    //30610252334
    axios
      .get(`http://localhost:3001/api/tecnicosexternos/empresa/30610252334`)
      .then((res) => {
        console.log(res.data.payload);
        setTecnicosExternos(res.data.payload);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const repararReclamo = (e) => {
    axios
      .post(
        `http://localhost:3001/api/reclamos/reparar?ticket_id=${reclamo.ticket_id}&dni_tecnico_externo=${tecnico}&descripcion_recibo=${descripcionRecivido}`
      )
      .then((res) => {
        console.log(res.data.payload);
        //setTecnicosExternos(res.data.payload);
      })
      .catch((err) => {
        console.log(err);
      });
    // acutaliza la pantalla
    window.location = "/tecnico/rependientes";
  };
  return (
    <div>
      <div className="text-dark">
        <button
          type="button"
          className="btn btn-warning"
          data-toggle="modal"
          data-target={`#modalReparar-id${reclamo.ticket_id}`}
          data-backdrop="static"
          onClick={conseguirTecncios}
        >
          Reparar{/* <i className="fas fa-wrench"></i> */}
        </button>

        <div className="modal" id={`modalReparar-id${reclamo.ticket_id}`}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">
                  Reparar Reclamo - {reclamo.ticket_id}
                </h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  onClick={() => setDescripcionRecivido("")}
                >
                  &times;
                </button>
              </div>

              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="inputTecnico">Codigo de Técnico</label>
                  <select
                    id="inputTecnico"
                    className="form-control"
                    value={tecnico}
                    onChange={(e) => setTecnico(e.target.value)}
                  >
                    <option selected disabled value="">
                      Elegir Tecnico
                    </option>
                    {tecnicosExternos.map((item) => (
                      <option key={item.dni} value={item.dni}>
                        {item.id}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="inputEstadoProducto">
                    Estado del Producto Pre-Service
                  </label>
                  <textarea
                    className="form-control"
                    id="inputEstadoProducto"
                    rows="5"
                    style={{ resize: "none" }}
                    value={descripcionRecivido}
                    onChange={(e) => setDescripcionRecivido(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-warning"
                  data-dismiss="modal"
                  onClick={(e) => repararReclamo(e, reclamo.ticket_id)}
                >
                  Reparar
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={() => setDescripcionRecivido("")}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepararReclamoModal;
