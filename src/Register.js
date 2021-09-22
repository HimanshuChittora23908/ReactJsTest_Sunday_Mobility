import React, { useState } from 'react'
import './globals.css'
import sea from "./img/sea.jpg"
import Footer from './Footer'
import { validEmail, validUserName, validMobile, validPassword} from './regex'

export default function Register() {
    const [nameError, setNameError] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [mobileError, setMobileError] = useState(false);
    const [pwdError, setPwdError] = useState(false);
    const [userName , setUserName] = useState('');
    const [mobile , setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function Local(){
        if (!validUserName.test(userName)) {
            setNameError(true);
        }
        if (!validEmail.test(email)) {
           setEmailErr(true);
        }
        if (!validMobile.test(mobile)) {
            setMobileError(true);
         }
        if (!validPassword.test(password)) {
           setPwdError(true);
        }
        if (validUserName.test(userName)) {
            setNameError(false);
        }
        if (validEmail.test(email)) {
            setEmailErr(false);
        }
        if (validMobile.test(mobile)) {
            setMobileError(false);
        }
        if (validPassword.test(password)) {
            setPwdError(false);
        }
        var inputUsername = document.getElementById("username");
        var inputEmail= document.getElementById("email").value;
        var inputMobile= document.getElementById("mobile").value;
        var inputPassword= document.getElementById("password").value;
        details.push({
            username: inputUsername.value,
            email: inputEmail,
            mobile: inputMobile,
            password: inputPassword
        });
        localStorage.setItem("users", JSON.stringify(details));
        if (validUserName.test(userName) && validEmail.test(email) && validMobile.test(mobile) && validPassword.test(password)) {
            window.location.href = "/Sunday_Mobility/users";
        }
    }

    const details = [
        {
            username: "Harmandeep",
            email: "harman1987@gmail.com",
            mobile: "8556324591",
            password: "4Minar@12345"
        },
        {
            username: "Yazur Sharma",
            email: "2003yazur12@gmail.com",
            mobile: "6334567383",
            password: "Yazur@Sharma19"
        }
    ];

    return (
        <div className="font-poppins sm:grid-flow-row lg:grid grid-cols-5">
            <div className="col-span-3">
                <img src={sea} alt="" className="img_sea" />
            </div>
            <div className="grid grid-flow-row text-center col-span-2">
            <div className="my-14">
                <p className="text-4xl font-semibold">New to website?</p>
                <p className="text-lg font-normal mt-1">Register to continue.</p>
                <div className="grid grid-flow-row justify-items-center">
                    <input type="text" id="username" value={userName} placeholder="Username" onChange={(e) => setUserName(e.target.value)} className="w-72 py-1 px-2 mt-12 border-b-2" />
                    {nameError ? <p className="text-red-500 text-xs mt-1">Invalid Name. Only letters and spaces allowed</p> : null}
                    <input type="text" id="mobile" value={mobile} placeholder="Mobile" onChange={(e) => setMobile(e.target.value)} className="w-72 py-1 px-2 mt-5 border-b-2" />
                    {mobileError ? <p className="text-red-500 text-xs mt-2">Invalid Mobile Number. Only 10 digit number allowed.</p> : null}
                    <input type="text" id="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="w-72 py-1 px-2 mt-5 border-b-2" />
                    {emailErr ? <p className="text-red-500 text-xs mt-2">Invalid Email. Enter correct email.</p> : null}
                    <input type="password" id="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="w-72 py-1 px-2 mt-5 border-b-2" />
                    {pwdError ? <p className="text-red-500 text-xs mt-2 w-72">Invalid Password Format. Minimum 8 characters with at least one lowercase letter, uppercase letter, numeric digit, and special character is allowed.</p> : null}
                    <button onClick={Local} className="w-72 mt-16 rounded-full py-1 bg-button text-white font-semibold">Submit </button>
                    <p className="text-button font-normal text-sm mt-2"><a href="/Sunday_Mobility/login">Login</a></p>
                </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
