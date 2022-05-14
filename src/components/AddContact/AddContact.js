import React from 'react';

const AddContact = () => {
  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <h3 className="display-5 text-center my-4">Add Person</h3>
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
            <div className="form-group">
              <input type="submit" value="Send" className="btn btn-block btn-dark"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;