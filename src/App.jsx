import React from 'react';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const App=()=>{
    return(<>
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="about"element={<About/>}/>
                <Route path="services"element={<Services/>}/>
                <Route path="contact"element={<Contact/>}/>
                <Route path="*"element={<Home/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
    </>)
}
export default App;