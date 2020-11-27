import React, { useState } from "react";
import axios from "axios";

function FinalizarReclamoModal({ reclamo }) {
  const [descripcionSolucion, setDescripcionSolucion] = useState("");

  const finalizarReclamo = (e) => {
    //e.preventDefault();
    axios
      .post(
        `http://localhost:3001/api/reclamos/finalizar?ticket_id=${reclamo.ticket_id}&descripcion_solucion=${descripcionSolucion}`
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
          className="btn btn-success"
          data-toggle="modal"
          data-target={`#modalFinalizar-id${reclamo.ticket_id}`}
          data-backdrop="static"
        >
          Finalizar
        </button>

        <div className="modal" id={`modalFinalizar-id${reclamo.ticket_id}`}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">
                  Finalizar Reclamo - {reclamo.ticket_id}
                </h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  onClick={() => setDescripcionSolucion("")}
                >
                  &times;
                </button>
              </div>

              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="inputTecnico">Codigo de Tecnico</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputTecnico"
                    disabled
                    value={reclamo.tecnico_id}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputEstadoProducto">
                    Detalle de Reparaciones Realizadas
                  </label>
                  <textarea
                    className="form-control"
                    id="inputEstadoProducto"
                    rows="5"
                    style={{ resize: "none" }}
                    value={descripcionSolucion}
                    onChange={(e) => setDescripcionSolucion(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  data-dismiss="modal"
                  onClick={(e) => finalizarReclamo(e)}
                >
                  Finalizar
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={() => setDescripcionSolucion("")}
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

export default FinalizarReclamoModal;
