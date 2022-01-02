import React from 'react';
import { NavLink } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";


const Navbar=()=>{
    return(<>
<div class="container-fluid nav_bg">
    <div class="row">
        <div class="col-10 mx-auto">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <NavLink class="navbar-brand" to="/">Ishwar Negi</NavLink>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                       <div class="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul class="navbar-nav ms-auto mb-lg-0">
                       <li class="nav-item">
                         <NavLink activeClassName="menu_active" aria-current="page" to="home">Home</NavLink>
                       </li>
                       <li class="nav-item">
                         <NavLink class="nav-link" to="services">Services</NavLink>
                       </li>
                       <li class="nav-item">
                         <NavLink class="nav-link" to="about">About</NavLink>
                       </li>
                       <li class="nav-item">
                         <NavLink class="nav-link" to="contact">Contact</NavLink>
                       </li>
                     </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</div>
           

    </>)
}
export default Navbar;