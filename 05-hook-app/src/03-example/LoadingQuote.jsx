import React from 'react';
import { useFetch } from '../hooks';

export const LoadingQuote = () => {
    
    return (
        <>
            <div className='alert alert-info text-center'>
                Loading...
            </div>
        </>
    );
};

export default LoadingQuote;