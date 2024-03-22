import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import logo from "../../assets/images/shop_logo.jpg"
import { FiSearch } from "react-icons/fi";
import { FaAngleDown, FaShoppingCart } from "react-icons/fa";
import LoginModel from '../LoginModel/LoginModel';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../slices/userSlice";
import supabase from "../../supabase";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    // using reducer
    const user = useSelector((state) => state.userData.user);

    // console.log(user);

    const dispatch = useDispatch();

    // useEffect
    useEffect(() => {
        if (user) {
            setIsOpen(false);
        }
    }, [user]);

    //   async
      const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (!error) {
          dispatch(removeUser());
        }
      };

    return (
        <>
            <div className='p-2  px-4 bg-white w-full shadow-xl fixed top-0 z-20 md:px-32'>
                <div className=' flex items-center justify-between lg:text-xl'>
                    <Link to={"/"}>
                        <img src={logo} alt="logo" className="w-26 h-16" />
                    </Link>
                    <div className=' bg-purple-400 p-2 rounded hidden md:flex'>
                        <input type="text" className='rounded-l-md p-1 md:w-96' placeholder='Search for Products, brands and more' />
                        <button className='p-2  rounded-r-md bg-gray-200'><FiSearch /></button>
                    </div>
                    {/* <div>
                        <button className='underline-Nav' style={{}} onClick={()=>setIsOpen(true)}>Login</button>
                        </div> */}
                    {user ? (
                        <h3 onClick={signOut}>@{user?.email.slice(0, 10)}</h3>
                    ) : (
                        <button className="navbar-btn" onClick={() => setIsOpen(true)}>
                            Login
                        </button>
                    )}


                    <div>
                        <h3 className='underline-Nav cursor-pointer'>Become a Seller</h3>
                    </div>
                    <div className=''>
                        <h3 className='flex cursor-pointer '>More <span className=' p-1 hover:text-purple-500' style={{ marginTop: "1px" }}><FaAngleDown /></span></h3>
                    </div>

                    <div className='flex'>
                        <span className=' p-1 text-purple-500' style={{ marginTop: "1px" }}> <FaShoppingCart /></span>

                        <Link to={"/cart"} className=' underline-Nav'>Cart</Link>
                    </div>

                </div>

            </div>
            <LoginModel isOpen={isOpen} setIsOpen={setIsOpen}></LoginModel>
        </>
    )
}

export default Navbar




















