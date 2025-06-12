import React from 'react';
import { useLoaderData } from 'react-router';

const CatLangs = () => {
    const tutorials = useLoaderData();
    
    console.log(tutorials)
    return (
        <div>
            
        </div>
    );
};

export default CatLangs;