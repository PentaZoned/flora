import React from 'react';
import { useQuery } from '@apollo/client'
import ProductCard from '../components/ProductCard/index';
import { QUERY_ALL_PRODUCTS } from '../utils/queries';

const  Home = () => {

  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
  const products = data?.products || [];
  console.log('-------------------------------------------')
  console.log(data)

  return (
    <div className='d-flex justify-content-center'>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ProductCard
        products={products}
        />
      )}
    </div>
  )
}

export default Home;
