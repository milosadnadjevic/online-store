import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div>
                    <img src={assets.logo} className='mb-5 w-32' alt="" />
                    <p className='text-gray-600 w-full md:w-2/3'>Our journey began with a simple idea: to provide a platform where customers
                     can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
                    </p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About US</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+1 917 6600</li>
                        <li>contact@streetsway.com</li>
                    </ul>
                </div>
            </div>

            <div>
                <hr className='w-11/12 mx-auto h-[1px] bg-gray-300' />
                <p className='text-center mt-5 text-gray-500 py-5 text-sm'>© 2025 StreetSway. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer