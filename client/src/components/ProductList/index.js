import React from 'react';

const ProductList = ({ products }) => {
    return (
        <div>
            <div>
                {products.map((product) => (
                    <div key={product._id}>
                        <h1>{product.title}</h1>
                        <h5>{product.description}</h5>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default ProductList;