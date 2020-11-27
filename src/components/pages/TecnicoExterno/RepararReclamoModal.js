import React, { useState } from "react";

function RepararReclamoModal({ reclamo }) {
  const [descripcionRecivido, setDescripcionRecivido] = useState("");

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
          className="btn btn-warning"
          data-toggle="modal"
          data-target={`#modalReparar-id${reclamo.ticket_id}`}
          data-backdrop="static"
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
                    // vale={provincia}
                    // onChange={(e) => setProvincia(e.target.value)}
                  >
                    <option>2131</option>
                    <option>4135</option>
                    <option>2591</option>
                    <option>6969</option>
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
