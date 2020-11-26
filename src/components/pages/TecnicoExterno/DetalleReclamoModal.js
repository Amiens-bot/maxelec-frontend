import React, { useState } from "react";

function DetalleReclamoModal({ reclamo }) {
  const [razonLlamada, setRazonLlamada] = useState(reclamo.razonLlamada);

  return (
    <div>
      <div className="text-dark">
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target={`#modalDetalle-id${reclamo.reclamoID}`}
        >
          Detalle
        </button>

        <div className="modal" id={`modalDetalle-id${reclamo.reclamoID}`}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">
                  Detalle del Reclamo - {reclamo.reclamoID}
                </h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div className="modal-body">
                <h5>DATOS DEL PRODUCTO</h5>
                <ul className="list-group mb-3">
                  <li className="list-group-item">
                    <b>Producto:</b> {reclamo.producto}
                  </li>
                  <li className="list-group-item">
                    <b>Modelo:</b> {reclamo.modelo}
                  </li>
                  <li className="list-group-item">
                    <b>Serie:</b> {reclamo.numeroSerieProducto}
                  </li>
                </ul>
                <hr />
                <h5>DATOS DEL CLIENTE</h5>
                <ul className="list-group mb-3">
                  <li className="list-group-item">
                    <b>Cliente:</b> {reclamo.nombre} {reclamo.apellido}
                  </li>
                  <li className="list-group-item">
                    <b>Telefono:</b> {reclamo.telefono}
                  </li>
                  <li className="list-group-item">
                    <b>Direccion:</b> {reclamo.direccion}, {reclamo.ciudad}
                  </li>
                </ul>

                <hr />
                <h5>DATOS DE LA FACTURA</h5>
                <ul className="list-group mb-3">
                  <li className="list-group-item">
                    <b>Casa Vendedora:</b> {reclamo.NombreCompania}
                  </li>
                  <li className="list-group-item">
                    <b>CUIT:</b> {reclamo.CUITDistribuidor}
                  </li>
                  <li className="list-group-item">
                    <b>Fecha de Compra:</b> {reclamo.fechaFacturaFinal}
                  </li>
                  <li className="list-group-item">
                    <b>Nro Factura:</b> {reclamo.nroFactura}
                  </li>
                  <li className="list-group-item">
                    <b>Garantia:</b> {reclamo.garantia}
                  </li>
                </ul>

                <hr />
                <h5>FALLA DECLARADA</h5>
                <ul className="list-group mb-3">
                  <li className="list-group-item">{reclamo.razonLlamada}</li>
                </ul>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
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
