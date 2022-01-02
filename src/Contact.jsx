import React,{useState} from 'react';

const Contact=()=>{
    const [data,setData] = useState({
    userName:'',
    Email:'',
    phone:'',
    password:'',
    });


    const inputEvent=(event)=>{
        const {name,value} = event.target;
        setData((preVal)=>{
            return {
                ...preVal,
                [name]:value,
            };

        });
    };
    const Submit=(e)=>{
        e.preventDefault();
        alert(`${data.userName}.my mobile number is ${data.phone}.my email is${data.Email},and password id ${data.password}`);

    };


    return(<>
            <div className="my-5" >
                <h1 className="text-center">Contact US</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={Submit}>
                       <div class="mb-3">
                         <label class="form-label">UserName</label>
                         <input type="name" class="form-control" name="userName" value={data.userName} onChange={inputEvent}/>
                        </div>
                        <div class="mb-3">
                         <label for="exampleInputEmail1" class="form-label">Email address</label>
                         <input type="email" class="form-control" name="Email" value={data.Email} onChange={inputEvent} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                         <label for="exampleInputEmail1" class="form-label">Phone</label>
                         <input type="number" class="form-control" name="phone" value={data.phone} onChange={inputEvent} id="exampleInputEmail1"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" name="password" value={data.password} onChange={inputEvent} id="exampleInputPassword1"/>
                        </div>
                       
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </>)
}
export default Contact;