import React from 'react';
import { useQuery } from '@apollo/client'
import ProductList from '../components/ProductList/index';
import { QUERY_ALL_PRODUCTS } from '../utils/queries';

const  Home = () => {

  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
  const products = data?.products || [];
  console.log('-------------------------------------------')
  console.log(data)

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ProductList
        products={products}
        />
      )}
    </div>
  )
}

export default Home;
