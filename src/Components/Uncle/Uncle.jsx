import React from 'react';
import Cousin from '../Cousin/Cousin';

const Uncle = ({assets}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className='flex'>
                <Cousin name={'abdullah'} assets={assets}></Cousin>
                <Cousin name={'jahanara'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;