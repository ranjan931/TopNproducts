import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products }) => (
    <div>
        {products.map((product) => (
            <div key={product.id}>
                <Link to={`/products/${product.id}`}>
                    <h2>{product.name}</h2>
                </Link>
                <p>Company: {product.company}</p>
                <p>Price: ${product.price}</p>
                <p>Rating: {product.rating}</p>
                <p>Discount: {product.discount}%</p>
                <p>
                    Availability:{" "}
                    {product.available ? "In stock" : "Out of stock"}
                </p>
            </div>
        ))}
    </div>
);

export default ProductList;
