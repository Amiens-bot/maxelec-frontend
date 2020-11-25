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
          <div class="modal-dialog modal-lg">
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
                <h5>DATOS DEL PRODUCTO</h5>
                <ul class="list-group mb-3">
                  <li class="list-group-item">
                    <b>Producto:</b> {reclamo.producto}
                  </li>
                  <li class="list-group-item">
                    <b>Modelo:</b> {reclamo.modelo}
                  </li>
                  <li class="list-group-item">
                    <b>Serie:</b> {reclamo.numeroSerieProducto}
                  </li>
                </ul>
                <hr />
                <h5>DATOS DEL CLIENTE</h5>
                <ul class="list-group mb-3">
                  <li class="list-group-item">
                    <b>Cliente:</b> {reclamo.nombre} {reclamo.apellido}
                  </li>
                  <li class="list-group-item">
                    <b>Telefono:</b> {reclamo.telefono}
                  </li>
                  <li class="list-group-item">
                    <b>Direccion:</b> {reclamo.direccion}, {reclamo.ciudad}
                  </li>
                </ul>

                <hr />
                <h5>DATOS DE LA FACTURA</h5>
                <ul class="list-group mb-3">
                  <li class="list-group-item">
                    <b>Casa Vendedora:</b> {reclamo.NombreCompania}
                  </li>
                  <li class="list-group-item">
                    <b>CUIT:</b> {reclamo.CUITDistribuidor}
                  </li>
                  <li class="list-group-item">
                    <b>Fecha de Compra:</b> {reclamo.fechaFacturaFinal}
                  </li>
                  <li class="list-group-item">
                    <b>Nro Factura:</b> {reclamo.nroFactura}
                  </li>
                  <li class="list-group-item">
                    <b>Garantia:</b> {reclamo.garantia}
                  </li>
                </ul>

                <hr />
                <h5>FALLA DECLARADA</h5>
                <ul class="list-group mb-3">
                  <li class="list-group-item">{reclamo.razonLlamada}</li>
                </ul>
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
