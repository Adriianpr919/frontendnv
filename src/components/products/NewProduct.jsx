import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/index.css'

const NewProduct = ({ product }) => {
  const uint8 = new Uint32Array([product.price]);
  return (
    <>
      <Link to={`/product/${product._id}`} rel="noopener noreferrer">
        <div className="card" style={{ width: '18rem' }}>
          <img
            src={product.image}
            className="card-img-top img-fluid border border-dark img-rounded mx-auto d-block img-thumbnail img-blog"
            alt={product.title}
            title={product.title} />
          <div className="card-body">
            <h5 className="card-title">
              <span className='badge badge-info mb-2' style={{ fontSize: "15px" }}>
                {product.title}
              </span>
            </h5>
          </div>
          <ul className="list-group list-group-light list-group-small">
            <li className="list-group-item px-4">
              <span className='badge badge-danger mb-2' style={{ fontSize: "15px" }}>
                {product.category}
              </span>
            </li>
            <li className="list-group-item px-4">
              <span className='badge badge-danger mb-2' style={{ fontSize: "15px" }}>
                {product.subcategory}
              </span>
            </li>
            <li className="list-group-item px-4">
              <span>
                <em>
                  <b style={{ color: "green", fontSize: "20px" }} className="badge badge-success mb-2">
                    {(uint8.toLocaleString('es-CO', { style: 'currency', currency: 'COP' }))}
                  </b>
                </em>
              </span>
            </li>
            <li style={{ color: "black", fontSize: "20px" }} className="list-group-item px-4 badge badge-warning mb-2">
              {product.star}
            </li>
            <li style={{ color: "black", fontSize: "20px" }} className="list-group-item px-4 badge badge-info mb-2">
              {product.createdAt.slice(0, 10)}
            </li>
          </ul>
          <div className="card-footer">
            <h5 className="card-title">
              <span className='list-group-item px-4 badge badge-dark text-center mb-2' style={{ textAlign: "center", fontSize: "20px", borderRadius: "20px" }}>
                <i class="fas fa-eye"></i> Ver Producto.
              </span>
            </h5>
          </div>
        </div>
      </Link>
    </>
  );
};

export default NewProduct;