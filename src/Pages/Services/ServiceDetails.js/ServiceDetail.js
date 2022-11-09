import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';

const ServiceDetail = () => {
    const { _id, img, price, title } = useLoaderData();
    return (
        <div>

            <h2>Part 1</h2>
            <div className="card card-compact mx-auto w-1/2 mt-10 bg-base-100 shadow-xl">
                {/* <figure><img src={img} alt="Shoes" /></figure> */}
                {/* <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/services/${_id}`}>
                            <button className="btn btn-dark">View Details</button>
                        </Link>
                    </div>
                </div> */}
                <Card>
                    <CardHeader color="blue" className="relative h-56">
                        <PhotoProvider>
                            <PhotoView src={img}>
                                <img src={img} alt="" className='w-100' />
                            </PhotoView>
                        </PhotoProvider>
                    </CardHeader>
                    <CardBody className="text-center">
                        <Typography variant="h5" className="mb-2">
                            {title}
                        </Typography>
                        <Typography>
                            The place is close to Barceloneta Beach and bus stop just 2 min by
                            walk and near to "Naviglio" where you can enjoy the main night life in
                            Barcelona.
                        </Typography>
                    </CardBody>
                    <CardFooter divider className="flex items-center justify-between py-3">
                        <Typography variant="small">${price}</Typography>
                        <Typography variant="small" color="gray" className="flex gap-1">
                            <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
                            Barcelona, Spain
                        </Typography>
                    </CardFooter>
                </Card>
            </div>


            <h2>Part 2</h2>

            {/* <form onSubmit={handleSubmitReview} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "> */}
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email:
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Enter your email" name='email' />
            </div>
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name='password' type="password" placeholder="******************" />
            </div>
            <div class="flex items-center justify-between">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Log In
                </button>
            </div>
            <div className="">
                {/* <Button onClick={handleGoogleSignIn} variant="outlined">Sign In With Google</Button>
                    <Button onClick={handleGitHubSignIn} variant="outlined">Sign In With GitHub</Button> */}
            </div>
            <p>New to ? Please <Link to='/register'>Register Now</Link></p>
            {/* </form> */}

        </div>
    );
};

export default ServiceDetail;