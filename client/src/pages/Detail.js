import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_PRODUCT } from '../utils/queries';

const Detail = () => {

    

    const { loading, data } = useQuery(QUERY_SINGLE_PRODUCT);

}


