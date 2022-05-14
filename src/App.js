import './App.css';
import React from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import AddContact from "./components/AddContact/AddContact";
import EditContact from "./components/EditContact/EditContact";


const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/add">
        <AddContact/>
      </Route>
      <Route path="/edit/:id">
        <EditContact/>
      </Route>
    </div>
  );
};
export default App;
