import React from 'react';
import web from '../src/images/img2.jpg';
import Common from './Common';
const Home=()=>{
    return(<>
    <Common name='Grow your buisness with Ishwar Negi'
        imgsrc={web}
        visit='/services'
        btnname="Get Started"
    />

    </>)
}
export default Home;