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
          className="btn btn-primary"
          data-toggle="modal"
          data-target={`#modalEditar-id${reclamo.reclamoID}`}
          data-backdrop="static"
        >
          Editar
        </button>

        <div className="modal" id={`modalEditar-id${reclamo.reclamoID}`}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Editar Reclamo</h4>
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
                  <label htmlFor="inputRazonLlamada">
                    Editar Razon de la llamada
                  </label>
                  <textarea
                    className="form-control"
                    id="inputRazonLlamada"
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
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={(e) => updateRazonLlamada(e)}
                >
                  Editar
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
    </>
  );
};

export default EditarReclamoModal;
