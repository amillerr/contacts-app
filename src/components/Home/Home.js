import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="row d-flex flex-column">
          <Link to="/add" className="btn btn-outline-success my-5 ml-auto">Add contact</Link>
      </div>
    </div>
  );
};

export default Home;