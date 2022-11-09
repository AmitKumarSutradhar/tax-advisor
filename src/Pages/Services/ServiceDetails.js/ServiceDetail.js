import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetail = () => {
    const { _id, img, price, title } = useLoaderData();
    return (
        <div>
            <h2>Part 1</h2>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/services/${_id}`}>
                            <button className="btn btn-dark">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
            <h2>Part 2</h2>

        </div>
    );
};

export default ServiceDetail;