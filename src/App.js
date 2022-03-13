import React, { Fragment } from "react";
import { Redirect, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Routes } from "react-router-dom";
import ReactDOM from 'react-dom';
import Home from "./pages/home";
import Product from "./pages/product";
import Setting from "./pages/setting";
import NewFactor from "./pages/new-factor";
import Header from "./header/header";
import ProductLIstPrivder from "./context/productContect";


function App() {
  return (
    <Fragment>
      <Header />
      <ProductLIstPrivder>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/new-factor" element={<NewFactor />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
        </ProductLIstPrivder>
    </Fragment>
  );
}

export default App;
