import React from 'react';
import { HiLocationMarker } from 'react-icons/hi';

const Searchbar = () => {
    return (
        <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
        </div>
    );
}

export default Searchbar;
