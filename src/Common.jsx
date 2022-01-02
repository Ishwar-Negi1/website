import React from 'react';
import web from '../src/images/img2.jpg';
import { NavLink } from 'react-router-dom';
const Common=(props)=>{
    return(<>
        <section id="header" className='d-flex align-items-center'>
            <div className="container-fluid">
                <div className='row'>
                    <div className="col-10 mx-auto">
                        <div className='row'>
                            <div className='col-md-6 pt-5 pt-sm-0 mt-5 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                                <h1>{props.name}</h1>
                                <h2 className='my-3'>I am the team member of sdg corporation</h2>
                                <div className="mt-3">
                                    <NavLink to={props.visit} className='btn-get-started'>{props.btnname}</NavLink>
                                </div>
                            </div>
                          <div className='col-lg-6 order-1 order-lg-2 header-img'>
                               <img src={web} className="img-fluid animated" alt="homeimg"/>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}
export default Common;