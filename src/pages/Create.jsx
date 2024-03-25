import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from "react-redux";
import { createUser } from "../reduxSlice/userDetailSlice"
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getUserData = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("users: ", users);
        dispatch(createUser(users));
        navigate("/allpost");
    }


    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <h2 className='my-4 text-center'>Fill the Data</h2>
                    <div className="col-md-6">
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label>Name</label>
                                    <input type="text" className="form-control" name='name' placeholder="Name" onChange={getUserData} />
                                </div>
                                <div className="form-group col-md-12">
                                    <label>Email</label>
                                    <input type="email" className="form-control" name='email' placeholder="Email" onChange={getUserData} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="text" className="form-control" name='phone' placeholder="Phone" onChange={getUserData} />
                            </div>

                            <div className="form-group">
                                <label>Age</label>
                                <input type="text" className="form-control" name='age' placeholder="age" onChange={getUserData} />
                            </div>
                            <div className="form-group my-3 d-flex justify-content-between">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gender" value="male" onChange={getUserData} />
                                    <label className="form-check-label" htmlFor="maleRadio">
                                        Male
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gender" value="female" onChange={getUserData} />
                                    <label className="form-check-label" htmlFor="femaleRadio">
                                        Female
                                    </label>
                                </div>
                            </div>
                            <button type="button" className="btn btn-primary w-100" onClick={handleSubmit}>Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home