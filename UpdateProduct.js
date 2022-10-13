import React, { useEffect, useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';


const UpdateProduct = () => {
    const [pname, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company, setCompany] = useState("");

    const params = useParams();
const navigate= useNavigate();

    useEffect(() => {

        getProductDetails();
    }, [])

    const productUpdate = async () => {
        // console.log(pname,price,category,company);

        let result = await fetch(`http://localhost:5000/product/${params.id}`, {
            method: 'put',
            body: JSON.stringify({ pname, price, category, company }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        result = result.json();
        // console.log(result);
       navigate("/")


    }
    const getProductDetails = async () => {
        console.log(params);
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json();
        // console.log(result);

        setName(result.pname);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }
    return (
        <>
            <div className='container my-3 '>

                <h4 className='text-center'>Update PRODUCT FORM</h4>
                <div className='d-flex justify-content-center'>


                    <div className="card  " style={{ width: "30rem", marginTop: "3rem" }}>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Product Name</label>
                                    <input type="text" className="form-control" value={pname} onChange={(e) => setName(e.target.value)} />

                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Product Price</label>
                                    <input type="text" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />

                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Product Category</label>
                                    <input type="text" className="form-control" value={category} onChange={(e) => { setCategory(e.target.value) }} />

                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Company Name</label>
                                    <input type="text" className="form-control" value={company} onChange={(e) => setCompany(e.target.value)} />

                                </div>


                                <button  onClick={productUpdate} className="btn btn-primary">Update Product</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default UpdateProduct