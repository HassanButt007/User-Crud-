import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateUserData } from '../reduxSlice/userDetailSlice';
import { useNavigate } from 'react-router-dom';

const Update = () => {
    const { id } = useParams();
    const [updateUser, setUpdateUser] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { users, loading } = useSelector((state) => state.app);

    useEffect(() => {
        if (id && users.length > 0) {
            const singleUser = users.find((elem) => elem.id === id);
            setUpdateUser(singleUser);
        }
    }, [id, users]);

    const dataUpdate = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setUpdateUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const updateUserDataSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUserData(updateUser))
        navigate("/allpost");
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <h2 className='my-4 text-center'>Update the User</h2>
                    <div className="col-md-6">
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label>Name</label>
                                    <input type="text" className="form-control" name='name' placeholder="Name" value={updateUser.name || ''} onChange={dataUpdate} />
                                </div>
                                <div className="form-group col-md-12">
                                    <label>Email</label>
                                    <input type="email" className="form-control" name='email' placeholder="Email" value={updateUser.email || ''} onChange={dataUpdate} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input type="text" className="form-control" name='phone' placeholder="Phone" value={updateUser.phone || ''} onChange={dataUpdate} />
                            </div>

                            <div className="form-group">
                                <label>Age</label>
                                <input type="text" className="form-control" name='age' placeholder="Age" value={updateUser.age || ''} onChange={dataUpdate} />
                            </div>
                            <div className="form-group my-3 d-flex justify-content-between">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gender" value="male" checked={updateUser.gender === "male"} onChange={dataUpdate} />
                                    <label className="form-check-label" htmlFor="maleRadio">
                                        Male
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gender" value="female" checked={updateUser.gender === "female"} onChange={dataUpdate} />
                                    <label className="form-check-label" htmlFor="femaleRadio">
                                        Female
                                    </label>
                                </div>
                            </div>
                            <button type="button" className="btn btn-primary w-100" onClick={updateUserDataSubmit}>Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Update;
