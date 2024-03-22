import React, { useEffect } from 'react'
import "./App.css"
import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Cart from './Pages/Cart/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import { Provider } from "react-redux";
import supabase from "./supabase";
import { useDispatch } from "react-redux";
import { setUser } from './slices/userSlice'
// import { setUser } from "./slices/userSlice";



const App = () => {

  const dispatch = useDispatch()

  const getUser = async () => {
    const { data, error } = await supabase.auth.getSession();

    if (data.session) {
      // console.log(data);
      dispatch(setUser(data.session.user));
    }

  };

  useEffect(() => {
    getUser();
  }, []);



  return (
    <>

      <BrowserRouter>

        <Navbar></Navbar>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/products' element={<Products></Products>}></Route>
          <Route path='/productdetails/:id' element={<ProductDetails></ProductDetails>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
