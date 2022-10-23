import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className='container-fluid'>
        <div className="row">
            <div className="col-12  mt-auto ms-50 text-center">
                <h1 className='fs-1 fw-bolder'>Oops</h1>
                <p className='fs-5 mb-5'>Sorry! File is either missing or has been redirected to another route</p>
                <p className='fw-bold fs-4 mb-5'>File Not Found</p>
                <Link to='/' className='btn btn-success'>Back Home</Link>
            </div>
        </div>
    </div> 
  );
};

export default Error;