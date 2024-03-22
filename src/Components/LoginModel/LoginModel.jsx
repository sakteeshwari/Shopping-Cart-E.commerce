import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import "./LoginModel.css"
import supabase from '../../supabase';
import { useDispatch } from "react-redux";
import {setUser} from "../../slices/userSlice"

const LoginModel = ({ isOpen, setIsOpen }) => {

    // email value get 
    const [email, setEmail] = useState("");

    // password value get
    const [password, setPassword] = useState("");

    // signin and signup
    const [loginType, setLoginType] = useState(true);

    const dispatch = useDispatch();


    const signup = async () => {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });
        // console.log(data,error)
        if (data.user) {
            console.log("Account created go to email and check")
        }
    };





    const login = async () => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        // console.log(data,error)
        if (error) {
            alert(error?.message);
            return;
        }
        dispatch(setUser(data.user));
    };

    // const login = async () => {
    //     const { data, error } = await supabase.auth.signInWithPassword({
    //         email,
    //         password,
    //     });

    //     // Check if there's an error
    //     if (error) {
    //         console.error(error); // Log the error for debugging purposes
    //         alert(error.message);
    //     } else {
    //         console.log(data);
    //         // Dispatch or handle successful login
    //     }
    // };




    return isOpen ? (
        // overlay
        <div className='fixed top-0 left-0 bg-black bg-opacity-50 w-full h-screen p-2' style={{ zIndex: "1000" }}>

            {/* Login Model */}
            <div className=' relative top-1/2 left-1/2 rounded -translate-x-1/2 -translate-y-1/2 bg-white  flex' style={{ height: "550px", width: "700px", zIndex: "10000" }}>

                {/* left container */}
                <div className=' p-2 bg-purple-500 bg-no-repeat'
                    style={{ backgroundImage: 'url("https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png")', backgroundPosition: "center 85%", height: "100%" }}>

                    {/* left-child */}
                    <div className='text-white  p-4 pt-10'>

                        <p className='text-3xl'>Login</p>
                        <br />
                        <p>Get access to your Orders,Wishlist and Recommendations</p>
                    </div>
                </div>

                {/* right div */}
                <div className='p-5 pt-20'>
                    <input type="email" className='login-input' placeholder='Enter E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br />

                    <input type="password" className='login-input ' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />

                    {/* terms and conditions */}
                    <p className='termsandcond'>By Continuing, You are agree to Shopping Cart {" "}
                        <span className='text-blue-900'>Terms of Use</span> and
                        <span className='text-blue-900'> Privacy Policy</span>
                    </p>
                    {loginType ? (
                        <button className="Login-btn" onClick={login}>
                            Login
                        </button>
                    ) : (
                        <button className="Login-btn" onClick={signup}>
                            Signup
                        </button>
                    )}
                    {
                        loginType ? (
                            <p className='Login-signup' onClick={() => setLoginType(false)}>New to Shopping Cart ? Create an Account</p>
                        ) : (
                            <p className='Login-signup' onClick={() => setLoginType(true)}>Already an User ? Login to an Account</p>
                        )
                    }
                </div>
                <div className='text-xl close -mt-7 -p-6 text-white' onClick={() => setIsOpen(false)}>
                    <IoClose />
                </div>
            </div>
        </div>
    ) : (<></>)
}

export default LoginModel
