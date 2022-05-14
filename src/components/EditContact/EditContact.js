import React from 'react';
import {Link, useParams} from "react-router-dom";

const EditContact = () => {

  const {id} = useParams()

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <h3 className="display-5 text-center my-4">Edit Person - {id}</h3>
        <div className="col-md-6 shadow mx-auto p-3">
          <form action="">
            <div className="form-group">
              <input type="text" placeholder="Name" className="form-control"/>
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" className="form-control"/>
            </div>
            <div className="form-group">
              <input type="number" placeholder="Phone" className="form-control"/>
            </div>
            <div className="form-group d-flex justify-content-between">
              <input type="submit" value="Update" className="btn btn-dark"/>
              <Link to="/" className="btn btn-danger">Cancel</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditContact;