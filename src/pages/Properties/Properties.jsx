import React from 'react';
import Searchbar from '../../components/Searchbar/Searchbar'
import useProperties from '../../hooks/useProperties';
import './Properties.css'
const Properties = () => {

  const {data, isError, isLoading} = useProperties()
  console.log(data)

  return (
    <div className='wrapper'>
      <div className='flexColCenter paddings innerWidth properties-container'>
        <Searchbar />
      </div>
    </div>
  );
}

export default Properties;
