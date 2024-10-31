import React, { useContext } from 'react';
import { AssetsContext } from '../Gramdpa/Grandpa';

const Special = ({assets}) => {
    const gift = useContext(AssetsContext)
    return (
        <div>
            <h2>special</h2>
            <p>has:{assets}</p>
            <p>has gift{gift}</p>
        </div>
    );
};

export default Special;