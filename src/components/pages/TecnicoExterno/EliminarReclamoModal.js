import React, { useState } from "react";

function EliminarReclamoModal({ reclamo, disabled }) {
  const [descripcionEliminacion, setdescripcionEliminacion] = useState(
    reclamo.DescripcionEliminacion
  );

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
          disabled={disabled}
          data-backdrop="static"
        >
          Eliminar
        </button>

        <div class="modal" id={`modalEliminar-id${reclamo.reclamoID}`}>
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
                  onClick={() =>
                    setdescripcionEliminacion(reclamo.DescripcionEliminacion)
                  }
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
                    value={descripcionEliminacion}
                    onChange={(e) => setdescripcionEliminacion(e.target.value)}
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
                  onClick={() =>
                    setdescripcionEliminacion(reclamo.DescripcionEliminacion)
                  }
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
