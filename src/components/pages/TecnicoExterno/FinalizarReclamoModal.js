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
          class="btn btn-success"
          data-toggle="modal"
          data-target={`#modalFinalizar-id${reclamo.reclamoID}`}
          data-backdrop="static"
        >
          Finalizar
        </button>

        <div class="modal" id={`modalFinalizar-id${reclamo.reclamoID}`}>
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">
                  Finalizar Reclamo - {reclamo.reclamoID}
                </h4>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  onClick={() => setRazonLlamada(reclamo.razonLlamada)}
                >
                  &times;
                </button>
              </div>

              <div class="modal-body">
                <div className="form-group">
                  <label for="inputTecnico">Codigo de Tecnico</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputTecnico"
                    disabled
                    value={6969}
                  />
                </div>
                <div class="form-group">
                  <label for="inputEstadoProducto">
                    Detalle de Reparaciones Realizadas
                  </label>
                  <textarea
                    class="form-control"
                    id="inputEstadoProducto"
                    rows="5"
                    style={{ resize: "none" }}
                    value={razonLlamada}
                    onChange={(e) => setRazonLlamada(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-success"
                  data-dismiss="modal"
                  onClick={(e) => repararReclamo(e, reclamo.reclamoID)}
                >
                  Finalizar
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
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
