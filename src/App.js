import './App.css';
import React from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";


const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Route exact path="/">
        <Home/>
      </Route>
    </div>
  );
};
export default App;
