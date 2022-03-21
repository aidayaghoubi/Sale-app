import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/product";
import Setting from "./pages/setting";
import NewFactor from "./pages/new-factor";
import Header from "./header/header";
import ProductLIstPrivder from "./context/productContect";
import FactorContextProvider from "./context/factorContext";


function App() {
  return (
    <Fragment>
      <Header />
      <ProductLIstPrivder>
        <FactorContextProvider>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/new-factor" element={<NewFactor />} />
            {/* <Route path="/new-factor/:id" component={<NewFactor />} /> */}
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </FactorContextProvider>
      </ProductLIstPrivder>
    </Fragment>
  );
}

export default App;
