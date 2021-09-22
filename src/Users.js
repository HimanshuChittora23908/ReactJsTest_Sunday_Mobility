import React from 'react';
import './globals.css'
import sea from "./img/sea.jpg"
import Footer from './Footer'

export default function Users() {
    var storedUser = JSON.parse(localStorage.getItem('users'));

    return (
        <div className="sm:grid-flow-row lg:grid grid-cols-5">
            <div className="col-span-3">
                <img src={sea} alt="" className="img_sea" />
            </div>
            <div className="grid grid-flow-row text-center col-span-2">
            <div className="my-32">
                <p className="text-3xl font-semibold">List of Users</p>
                {storedUser ? storedUser.map((user, index) => {
                    return (
                        <div key={index} className="mt-6">
                        <p className="">{user.username}</p>
                        <p className="">{user.email}</p>
                        <p className="">{user.mobile}</p>
                        <p className="">{user.password}</p>
                        </div>
                    )
                }): null}
            </div>
            <Footer />
            </div>
        </div>
    )
}
