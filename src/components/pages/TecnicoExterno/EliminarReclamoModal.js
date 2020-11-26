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
          className="btn btn-danger"
          data-toggle="modal"
          data-target={`#modalEliminar-id${reclamo.reclamoID}`}
          disabled={disabled}
          data-backdrop="static"
        >
          Eliminar
        </button>

        <div className="modal" id={`modalEliminar-id${reclamo.reclamoID}`}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">
                  Eliminar Reclamo - {reclamo.reclamoID}
                </h4>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  onClick={() =>
                    setdescripcionEliminacion(reclamo.DescripcionEliminacion)
                  }
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
                  onClick={(e) => eliminarReclamo(e, reclamo.reclamoID)}
                >
                  Eliminar
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
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
