import React, { useState } from "react";

function EliminarReclamoModal({ reclamo }) {
  const [razonLlamada, setRazonLlamada] = useState(reclamo.razonLlamada);

  const eliminarReclamo = (e, id) => {
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
          class="btn btn-danger"
          data-toggle="modal"
          data-target={`#modalEliminar-id${reclamo.reclamoID}`}
        >
          Eliminar
        </button>

        <div
          class="modal"
          id={`modalEliminar-id${reclamo.reclamoID}`}
          onClick={() => setRazonLlamada(reclamo.razonLlamada)}
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">
                  Eliminar Reclamo - {reclamo.reclamoID}
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
                <div class="form-group">
                  <label for="inputRazonLlamada">Razon de eliminacion</label>
                  <textarea
                    class="form-control"
                    id="inputRazonLlamada"
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
                  class="btn btn-danger"
                  data-dismiss="modal"
                  onClick={(e) => eliminarReclamo(e, reclamo.reclamoID)}
                >
                  Eliminar
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

export default EliminarReclamoModal;
