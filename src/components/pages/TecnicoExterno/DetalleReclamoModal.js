import React, { useState } from "react";

function DetalleReclamoModal({ reclamo }) {
  const [razonLlamada, setRazonLlamada] = useState(reclamo.razonLlamada);

  return (
    <div>
      <div className="text-dark">
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target={`#modalDetalle-id${reclamo.reclamoID}`}
        >
          Detalle
        </button>

        <div class="modal" id={`modalDetalle-id${reclamo.reclamoID}`}>
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">
                  Detalle del Reclamo - {reclamo.reclamoID}
                </h4>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div class="modal-body">
                <div class="card mb-1">
                  <h5 class="card-header bg-dark text-white">Garantia?</h5>
                  <div class="card-body">
                    <p class="card-text">{reclamo.garantia}</p>
                  </div>
                </div>
                <div class="card mb-1">
                  <h5 class="card-header bg-dark text-white">
                    Fecha del Reclamo
                  </h5>
                  <div class="card-body">
                    <p class="card-text">{reclamo.fecha}</p>
                  </div>
                </div>
                <div class="card mb-1">
                  <h5 class="card-header bg-dark text-white">
                    Nombre y Apellido
                  </h5>
                  <div class="card-body">
                    <p class="card-text">{reclamo.nombre} Pepe</p>
                  </div>
                </div>
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-dismiss="modal"
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

export default DetalleReclamoModal;
