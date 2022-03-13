import React, {Profiler, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

function Detail(props){
    const {productId} = useParams();
    const [currentProduct, setCurrentProduct] = useState({});

    useEffect(async () => {
        const response = await fetch(`/api/products/${productId}`);
        const product = await response.json();
        setCurrentProduct(product);
    }, []);

    console.log('props = ', props)
    const product = currentProduct;
    return (
        <div>
            <div>Details for {productId}</div>
            <div>Title: {product.title}</div>
            <div>Description: {product.description}</div>
        </div>
    );
}

export default Detail;
