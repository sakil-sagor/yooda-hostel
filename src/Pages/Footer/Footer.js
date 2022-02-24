import React from 'react';
import { NavLink } from 'react-router-dom';

// footer page 

const Footer = () => {
    return (
        <div className="bg-indigo-900 pt-10  ">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 container full-width-all m-auto pb-8 px-2">
                {/* left section  */}
                <div className="col-sapn- ">
                    <NavLink to="/home">
                        <h1 className="text-4xl font-bold text-white ">Yooda <span className="text-blue-300">Hostel</span> </h1>
                    </NavLink>
                    <p className="py-8 text-white font-semibold">Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for your family.</p>

                </div>
                {/* middle section */}
                <div className="col-sapn-1 ">
                    <div className=" mt-2 text-center">
                        <h3 className="text-center py-2 font-semibold text-xl text-white">Supports</h3>
                        <NavLink to='/aboutUs'>
                            <ul className="tab-list text-gray-300">
                                <li className="cursor-pointer hover:underline">Terams & Conditions</li>
                                <li className="cursor-pointer hover:underline">Privecy Policy</li>
                                <li className="cursor-pointer hover:underline">All Guidelines</li>
                                <li className="cursor-pointer hover:underline">History</li>
                                <li className="cursor-pointer hover:underline">Your Feadback </li>
                            </ul >
                        </NavLink>
                    </div >
                </div>
                {/* middle section  */}
                <div className="col-sapn-6 ">
                    <div className=" mt-2 text-center">
                        <h3 className="text-center py-2 font-semibold text-xl text-white"> Links</h3>
                        <ul className="tab-list text-gray-300">
                            <li className="cursor-pointer hover:underline"><NavLink to="/login">Login</NavLink></li>
                            <li className="cursor-pointer hover:underline"><NavLink to="/register">Register</NavLink></li>
                            <li className="cursor-pointer hover:underline"><NavLink to="/aboutUs"> About Us</NavLink></li>
                            <li className="cursor-pointer hover:underline"><NavLink to="/contactUs"> Contact Us</NavLink></li>
                        </ul >
                    </div >
                </div>
                {/* right section  */}

            </div>
            {/* footer bottom  */}
            <div className="bg-gray-900">
                <p className="py-4 text-center text-gray-500">© 2020 DataSoft, All Rights Reserved. With Love by Yooda Hostel</p>
            </div>
        </div>
    );
};

export default Footer;