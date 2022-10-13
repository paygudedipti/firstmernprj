import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");

     useEffect(()=>{
            const auth = localStorage.getItem('user');
            if(auth){
                navigate("/");
            }
     },[])
    const handleLogin = async ()=>{
        // console.log(email,password);
        let result = await fetch("http://localhost:5000/login",{
            method:'post',
        body:JSON.stringify({email,password}),
        headers:{
            "Content-Type":"application/json"
        }
    
    });

    result = await result.json();
    // console.log(result);
    if(result.name){
       localStorage.setItem("user", JSON.stringify(result));
         navigate("/");
    }else{
        alert("please enter correct details")
    }
}

  return (
   <>
   <div  className="container ">
    
                <p  className="text-center h1 fw-bold ">Sign In</p>
                <div className='d-flex justify-content-center'>
                   <div className="card  " style={{width:"30rem", marginTop:"3rem" }}>
                   <div className="card-body">
                <form >               
                  <div  className="d-flex flex-row align-items-center mb-4">
                    
                    <div  className="form-outline flex-fill mb-0">
                    <label  className="form-label" >Your Email</label>
                      <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}  />
                    
                    </div>
                  </div> 

                  <div  className="d-flex flex-row align-items-center mb-4">
                  
                    <div  className="form-outline flex-fill mb-0">
                    <label  className="form-label" >Password</label>
                      <input type="password"  className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}  />
                     
                    </div>
                  </div>

                  

                  <div  className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" onClick={handleLogin}  className="btn btn-primary btn-lg" >Login</button>
                  </div>

                </form>

              </div>
              {/* <div  className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                   className="img-fluid" alt="Sample IMG" />

              </div> */}
            </div>
          </div>
        </div>
      
   </>
  )
}

export default Login