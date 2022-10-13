import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
    const [name,setName] =useState("");
    const [email,setEmail] =useState("");
    const [password,setPassword] =useState("");
    
    const navigate = useNavigate();

  
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/');
        }

    },[]);

    const collectData = async () =>{
        console.log(name,email,password);

        let result = await fetch('http://localhost:5000/register',{
          method:'post',
          body:JSON.stringify({name,email,password}),
          headers:{
            'Content-Type':'application/json'
          },
        });
        result = await result.json()
        // console.log(result);
        localStorage.setItem('user',JSON.stringify(result));

        if(result){
          // console.log(result);
             navigate('/');
        }
    }

  return (
    <>
   
  <div  className="container ">
    
                <p  className="text-center h1 fw-bold  ">Sign up</p>
                <div className='d-flex justify-content-center'>
                   <div className="card  " style={{width:"30rem", marginTop:"3rem" }}>
                   <div className="card-body">
                <form  >
                  <div  className="d-flex flex-row align-items-center mb-4">
                   
                    <div  className="form-outline flex-fill mb-0">
                    <label  className="form-label" >Your Name</label>
                      <input type="text"   className="form-control" name={name} onChange={(e)=>setName(e.target.value)}  />
                    
                    </div>
                  </div>

                  <div  className="d-flex flex-row align-items-center mb-4">
                   
                    <div  className="form-outline flex-fill mb-0">
                    <label  className="form-label" >Your Email</label>
                      <input type="email"   className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    
                    </div>
                  </div> 

                  <div  className="d-flex flex-row align-items-center mb-4">
                
                    <div  className="form-outline flex-fill mb-0">
                    <label  className="form-label" >Password</label>
                      <input type="password"  className="form-control" name={password} onChange={(e)=>setPassword(e.target.value)} />
                     
                    </div>
                  </div>

                  

                  <div  className="d-flex justify-content-center my-5 mb-lg-4">
                    <button type="button"  className="btn btn-primary btn-lg" onClick={collectData}>Register</button>
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

export default SignUp