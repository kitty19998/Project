import React from 'react';
import { useQuery } from 'react-query';
import { getAllProperties } from '../utils/api';

const useProperties = () => {
  const { data, isLoading, isError, refetch } = useQuery(
    'allProperties', //name of the query
    getAllProperties,//function
    { refetchOnWindowFocus: false }
  )
  return (
    data, isError, isLoading, refetch   //objects
  );
}

export default useProperties;
