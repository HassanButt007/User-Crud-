import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { deleteUser, userList } from '../reduxSlice/userDetailSlice';
import CustomerModal from '../component/CustomerModal';

const Contact = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState();
  const [showModal, setShowModal] = useState(false);


  const { users, loading } = useSelector((state) => state.app);
  const singleUser = users.filter((elem) => elem.id === id);

  useEffect(() => {
    dispatch(userList());
  }, [])

  if (loading) {
    return <h2 className='my-4 text-center'>Loading</h2>
  }

  const handleView = (id) => {
    setShowModal(true);
    setId(id);
  };



  return (
    <>
      {showModal && (
        <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-body">
              <h5 className='card-title'>{singleUser[0].name}</h5>
                  <p className='card-text'>{singleUser[0].gender}</p>
                  <p className='card-text'>{singleUser[0].email}</p>
                  <p className='card-text'>{singleUser[0].phone}</p>
                  <p className='card-text'>{singleUser[0].age}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <h2 className='my-4 text-center'>All User List ({users.length}) </h2>
      <div className='container'>
        <div className='row'>
          {users && users.map((elem) => (
            <div className='col-md-4' key={elem.id}>
              <div className='card mb-4'>
                <div className='card-body'>
                  <h5 className='card-title'>{elem.name}</h5>
                  <p className='card-text'>{elem.gender}</p>
                  <p className='card-text'>{elem.email}</p>
                  <p className='card-text'>{elem.phone}</p>
                  <p className='card-text'>{elem.age}</p>
                  <button to='#' className='btn btn-primary' onClick={() => handleView(elem.id)}>
                    View
                  </button>
                  <Link to={`/update/${elem.id}`} className='btn btn-primary mx-3'>
                    Edit
                  </Link>
                  <Link to='#' className='btn btn-primary' onClick={() => dispatch(deleteUser(elem.id))}>
                    Delete
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Contact