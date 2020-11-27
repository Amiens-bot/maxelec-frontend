import React, { useState } from "react";

function EliminarReclamoModal({ reclamo, disabled }) {
  const [descripcionEliminacion, setdescripcionEliminacion] = useState("");

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
          className="btn btn-danger"
          data-toggle="modal"
          data-target={`#modalEliminar-id${reclamo.ticket_id}`}
          disabled={disabled}
          data-backdrop="static"
        >
          Eliminar
        </button>

        <div className="modal" id={`modalEliminar-id${reclamo.ticket_id}`}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">
                  Eliminar Reclamo - {reclamo.ticket_id}
                </h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  onClick={() => setdescripcionEliminacion("")}
                >
                  &times;
                </button>
              </div>

              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="inputRazonLlamada">
                    Razon de eliminacion
                  </label>
                  <textarea
                    className="form-control"
                    id="inputRazonLlamada"
                    rows="5"
                    style={{ resize: "none" }}
                    value={descripcionEliminacion}
                    onChange={(e) => setdescripcionEliminacion(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                  onClick={(e) => eliminarReclamo(e)}
                >
                  Eliminar
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={() => setdescripcionEliminacion("")}
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
