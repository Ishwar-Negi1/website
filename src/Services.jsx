import React from 'react';
import Sdata from './Sdata';
import Cards from './Cards';
const Services=()=>{
    return(<>
            <div className='my-5'>
                <h1 className='text-center'>Our services</h1>
            </div>
            <div className='container-fluid mb-5'>
                <div className="row">
                    <div className='col-10 mx-auto'>
                       <div class="row gy-4">
                          {
                              Sdata.map((curele,index)=>{
                                  return <Cards
                                  key = {index} 
                                  imgsrc={curele.imgsrc}
                                  title={curele.title}
                                  />
                              })
                          }  
                        </div>
                   </div>
                </div>
            </div>
    </>)
}
export default Services;