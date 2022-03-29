import React, { Fragment } from "react";
import { Route, Router, Redirect } from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/product";
import Setting from "./pages/setting";
import { Routes } from "react-router-dom";
import NewFactor from "./pages/new-factor";
import Header from "./header/header";
import ProductLIstPrivder from "./context/productContect";
import FactorContextProvider from "./context/factorContext";
import FactorPrint from "./pages/factor";


function App() {
  return (
    <Fragment>
      <Header />
      <ProductLIstPrivder>
        <FactorContextProvider>
          <Routes>
            {/* <Route path='/' exact>
                <Redirect to='/home' />
              </Route> */}
            <Route path="/home" element={<Home />} exact />
            <Route path="/product" element={<Product />} exact />
            <Route path="/new-factor" element={<NewFactor />} exact />
            <Route path="/new-factor/:id" element={<FactorPrint />} exact />
            <Route path="/setting" element={<Setting />} exact />
          </Routes>
        </FactorContextProvider>
      </ProductLIstPrivder>
    </Fragment>
  );
}

export default App;
