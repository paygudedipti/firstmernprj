import React, { useEffect, useState } from 'react';
import {Link } from 'react-router-dom';

const ProductList = () => {
    const [products,setProduct] = useState([]);
      // serch filter data
  

  
    const getProducts = async () =>{
         let result = await fetch('http://localhost:5000/products');
         result = await result.json();
        setProduct(result);
        
    }
    useEffect(()=>{
        getProducts();
     },[]);
 

     const deleteProduct= async (id) =>{
          // console.warn(id);  
          let result =  await fetch(`http://localhost:5000/product/${id}`,{
            method:"delete"
          });
           
          result =  await result.json();
          if(result){
            getProducts();
          }

     }

     const searchHandle = async(e) =>{
      // console.log(e.target.value);
      let key = e.target.value;
      let result = await fetch(`http://localhost:5000/product/search/${key}`);
      result = await result.json();

      if(result){
        setProduct(result);

      }

     }

    // console.log(products);

// const deleteProduct =  async (id) =>{
// console.log(id)
// // let result = await  fetch(`http://localhost:5000/product/${id}`,{
// //   method:"delete"
// // });
// // result = await result.json()
// // if(result){
// //   alert("record deleted")
// // }
// }

  return (
  <>
  <div className='container'>
    <h3 className='text-center my-3'>Product List</h3>


    <input  className="form-control px-5 me-2" type="search" placeholder="Search" aria-label="Search" onChange={searchHandle} />
     <table className="table">
   
  <thead>
    <tr>   
    <th scope="col">Product ID</th>
      <th scope="col">Product Name</th>
      <th scope="col">Product Price</th>
      <th scope="col">Product category</th>
      <th scope="col">Company Name</th>
      <th scope="col">Operations</th>
    </tr>
  </thead>
  <tbody>
    {
 products.map((item,ind)=>{
       return (
        <>
        <tr key={item._id}>
        <td>{ind+1} </td>
          <td>{item.pname} </td>
          <td>{item.price} </td> 
          <td>{item.category} </td>
          <td> {item.company}</td>
          <td><button className='btn btn-danger' onClick={()=>deleteProduct(item._id)} >delete</button></td>
           <td> <Link className='btn btn-info' to={`/update/${item._id}`}> update</Link> </td>
        </tr>
          
        </>
       )
        
         
        })
    }

  </tbody>
  </table> 
  </div>
  </>
  )
}

export default ProductList