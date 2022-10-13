import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        // console.log("click");
        localStorage.clear();
        navigate('/signup');
    }

    return (
        <>
            <div className='container-fuild'>


                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to='/'>E-Dashboard</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                            {
                                auth ? 
                                <>
                                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                               <li className="nav-item">
                                   <Link className="nav-link active" aria-current="page" to='/'>Products</Link>
                               </li>
                               <li className="nav-item">
                                 <Link className="nav-link" to='/add'>Add Product</Link>
                               </li>
                               {/* <li className="nav-item">
                                   <Link className="nav-link" to='/update'>Update Product</Link>
                               </li> */}

                               <li className="nav-item">
                                   <Link className="nav-link" to='/profile'>Profile</Link>
                               </li>
                               <li className="nav-item " >
                               <Link className="nav-link  "  to='/signup' onClick={logout}>Logout  ({JSON.parse(auth).name})</Link>

                               </li>
                             
                               </ul>
                                </> : <>
                                
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link " to='/signup'>SignUp</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/login'>login</Link>

                                </li>

                            </ul>

                                
                                </>
                            }

                           
                            {/* <li className="nav-item">{auth? <Link className="nav-link" to='/signup' onClick={logout}>Logout</Link>:
                                    <Link className="nav-link" to='/signup'>SignUp</Link>}
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to='/login'>login</Link>
                                </li> */}

                           


                        </div>


                        {/* <form  className="d-flex" role="search">
        <input  className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button  className="btn btn-outline-success" type="submit">Search</button>
      </form> */}

                    </div>

                </nav >
            </div >

        </>
    )

}



export default Nav;



