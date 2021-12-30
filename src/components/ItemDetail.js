import React from 'react'
import ItemCount from './ItemCount';


const ItemDetail = ({ item }) => {
  return (
    <div className="container centered">
      <div className="col-lg-8 border p-3 main-section bg-white">
        <div className="row m-0">
            <div className="col-lg-6 left-side-product-box pb-3">
                <img src={item.picURL} alt={item.nombre} width="500" height="500" className="border p-3 img-fluid" />
            </div>
            <div className="col-lg-6">
                <div className="right-side-pro-detail border p-3 m-0">
                    <div className="row">
                        <div className="col-lg-12">
                          <h3>{item.nombre}</h3>
                        </div>
                        <div className="col-lg-12">
                            <p className="m-0 p-0 price-pro">${item.precioARS}</p>
                            <hr className="p-0 m-0" />
                        </div>
                        <div className="col-lg-12 pt-2">
                            <h5>Descripcion</h5>
                            <span>{item.desc}</span>
                        </div>
                        <div className="col-lg-12">
                            <h6>Stock: {item.stock}</h6>
                            <ItemCount stock={item.stock} />
                        </div>
                        <div className="col-lg-12 mt-3">
                            <div className="row">
                                <div className="col-lg-6 pb-2">
                                    <a href="/carrito" className="btn btn-danger w-100">Al carrito!</a>
                                </div>
                                <div className="col-lg-6 pb-2">
                                    <a href="/finish" className="btn btn-success w-100">Comprar ahora</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
