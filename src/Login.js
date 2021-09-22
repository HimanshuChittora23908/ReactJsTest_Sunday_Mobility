import React from 'react'
import './globals.css'
import sea from "./img/sea.jpg"
import Footer from './Footer'

export default function Register() {
    return (
        <div className="sm:grid-flow-row lg:grid grid-cols-5">
            <div className="col-span-3">
                <img src={sea} alt="" className="img_sea" />
            </div>
            <div className="grid grid-flow-row text-center col-span-2">
            <div className="my-28">
                <p className="text-4xl font-semibold">Welcome back!</p>
                <p className="text-lg font-normal mt-1">Please login to your account.</p>
                <form action="" className="grid grid-flow-row justify-items-center">
                    <input type="text" placeholder="Username" className="w-72 py-1 px-2 mt-12 border-b-2" />
                    <input type="password" placeholder="Password" className="w-72 py-1 px-2 mt-5 border-b-2" />
                    <div className="grid grid-cols-2 gap-16 mt-8">
                        <div>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <label for="vehicle1" className="text-sm"> Remember Me</label><br />
                        </div>
                        <p className="text-button font-semibold text-sm">Forgot password</p>
                    </div>
                    <input type="submit" value="Submit" className="w-72 mt-16 rounded-full py-1 bg-button text-white font-semibold" />
                </form>
                </div>
                <Footer />
            </div>
        </div>
    )
}