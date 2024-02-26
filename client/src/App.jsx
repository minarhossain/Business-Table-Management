import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProductList from "./pages/ProductList";
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import FullScreenLoader from "./components/masterLayout/FullScreenLoader";


function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
      <FullScreenLoader />

    </>
  )
}

export default App
