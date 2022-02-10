import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import './ProfileShortcut.css'

// profile area 

const ProfileShortcut = () => {
    const { user, admin, logOut } = useAuth();

    return (
        <div className="profile-shortcut bg-pink-700 shadow-2xl">
            <div>
                <div>
                    <img src="" alt="" />
                </div>
                {
                    user.displayName ? <h1 className="text-lg font-semibold text-indigo-900">{user.displayName}</h1> : ''
                }

            </div>
            <hr />


            <div>
                <button className="text-indigo-900 font-semibold hover:text-indigo-700 mt-3" onClick={logOut}>Log Out</button>
            </div>
        </div>
    )
};

export default ProfileShortcut;