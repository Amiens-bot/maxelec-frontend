import React, { useState } from "react";

function FinalizarReclamoModal({ reclamo }) {
  const [razonLlamada, setRazonLlamada] = useState(reclamo.razonLlamada);

  const repararReclamo = (e, id) => {
    e.preventDefault();
    console.log(id);

    // acutaliza la pantalla
    //window.location = "/tecnico/rependientes";
  };
  return (
    <div>
      <div className="text-dark">
        <button
          type="button"
          className="btn btn-success"
          data-toggle="modal"
          data-target={`#modalFinalizar-id${reclamo.reclamoID}`}
          data-backdrop="static"
        >
          Finalizar
        </button>

        <div className="modal" id={`modalFinalizar-id${reclamo.reclamoID}`}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">
                  Finalizar Reclamo - {reclamo.reclamoID}
                </h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  onClick={() => setRazonLlamada(reclamo.razonLlamada)}
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
                    value={6969}
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
                    value={razonLlamada}
                    onChange={(e) => setRazonLlamada(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  data-dismiss="modal"
                  onClick={(e) => repararReclamo(e, reclamo.reclamoID)}
                >
                  Finalizar
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={() => setRazonLlamada(reclamo.razonLlamada)}
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
