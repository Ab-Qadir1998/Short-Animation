import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Product from './Product'
import Nav from './Nav'
const Routs = ()=> {
    return(
        <div>
            <BrowserRouter>
            <Nav/>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/product" element={<Product/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routs