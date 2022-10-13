import React, { useState } from 'react'


const AddProduct = () => {
  const [pname,setName] = useState("");
  const [price,setPrice] = useState("");
  const [category,setCategory] = useState("");
  const [company,setCompany] = useState("");

  const[error,setError] = useState(false);


const addPrd = async () => {

if(!pname || !price || !category || !company)
{
  setError =true;
  return false;
}


  // console.log(name,price,category,company);
  const userId = JSON.parse(localStorage.getItem('user'));
  // console.log(userId._id);
  let result = await fetch('http://localhost:5000/product', {
    method:'post',
    body: JSON.stringify({pname,price,category,company,userId}),
    headers:{
      "Content-Type":"application/json"
    }
  });

  result = await result.json();
  console.log(result);


} 


  return (
   <>
   <div className='container my-3 '>

<h4 className='text-center'>ADD PRODUCT FORM</h4>
<div className='d-flex justify-content-center'>


   <div className="card  " style={{width:"30rem", marginTop:"3rem" }}>
   <div className="card-body">
   <form>
  <div className="mb-3">
    <label  className="form-label">Product Name</label>
    <input type="text" className="form-control" value={pname} onChange={(e)=>setName(e.target.value)} required />

  </div>
  <div className="mb-3">
    <label  className="form-label">Product Price</label>
    <input type="text" className="form-control" value={price} onChange={(e)=>setPrice(e.target.value)} required />
   
  </div>
  <div className="mb-3">
    <label  className="form-label">Product Category</label>
    <input type="text" className="form-control" value={category} onChange={(e)=>{setCategory(e.target.value)}} required  />
   
  </div>
  <div className="mb-3">
    <label  className="form-label">Company Name</label>
    <input type="text" className="form-control" value={company} onChange={(e)=>setCompany(e.target.value)} required  />
   
  </div>
  
 
  <button onClick={addPrd} className="btn btn-primary">Add Product</button>
</form>
  </div>
</div>
</div>
   
   </div>
   </>
  )
}

export default AddProduct