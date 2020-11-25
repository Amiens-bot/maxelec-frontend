import React, { useState } from "react";

function RepararReclamoModal({ reclamo }) {
  const [descripcionRecivido, setDescripcionRecivido] = useState(
    reclamo.DescripcionRecivido
  );

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
          class="btn btn-warning"
          data-toggle="modal"
          data-target={`#modalReparar-id${reclamo.reclamoID}`}
          data-backdrop="static"
        >
          Reparar{/* <i class="fas fa-wrench"></i> */}
        </button>

        <div class="modal" id={`modalReparar-id${reclamo.reclamoID}`}>
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">
                  Reparar Reclamo - {reclamo.reclamoID}
                </h4>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  onClick={() =>
                    setDescripcionRecivido(reclamo.DescripcionRecivido)
                  }
                >
                  &times;
                </button>
              </div>

              <div class="modal-body">
                <div className="form-group">
                  <label for="inputTecnico">Codigo de Técnico</label>
                  <select
                    id="inputTecnico"
                    className="form-control"
                    // vale={provincia}
                    // onChange={(e) => setProvincia(e.target.value)}
                  >
                    <option>2131</option>
                    <option>4135</option>
                    <option>2591</option>
                    <option>6969</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="inputEstadoProducto">
                    Estado del Producto Pre-Service
                  </label>
                  <textarea
                    class="form-control"
                    id="inputEstadoProducto"
                    rows="5"
                    style={{ resize: "none" }}
                    value={descripcionRecivido}
                    onChange={(e) => setDescripcionRecivido(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-warning"
                  data-dismiss="modal"
                  onClick={(e) => repararReclamo(e, reclamo.reclamoID)}
                >
                  Reparar
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-dismiss="modal"
                  onClick={() =>
                    setDescripcionRecivido(reclamo.DescripcionRecivido)
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

export default RepararReclamoModal;
