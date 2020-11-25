import React, { useState } from "react";

const EditarReclamoModal = ({ reclamo }) => {
  const [razonLlamada, setRazonLlamada] = useState(reclamo.razonLlamada);

  const updateRazonLlamada = (e) => {
    e.preventDefault();
    window.location = "/tecnico/rependientes";
  };

  return (
    <>
      <div className="text-dark">
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target={`#modalEditar-id${reclamo.reclamoID}`}
          data-backdrop="static"
        >
          Editar
        </button>

        <div class="modal" id={`modalEditar-id${reclamo.reclamoID}`}>
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Editar Reclamo</h4>
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
                  <label for="inputRazonLlamada">
                    Editar Razon de la llamada
                  </label>
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
                  class="btn btn-primary"
                  data-dismiss="modal"
                  onClick={(e) => updateRazonLlamada(e)}
                >
                  Editar
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
    </>
  );
};

export default EditarReclamoModal;
