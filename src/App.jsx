import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllProductsPage from "./pages/AllProductsPage.js";
import ProductPage from "./pages/ProductPage.js";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/" exact component={AllProductsPage} />
        <Route path="/products/:id" component={ProductPage} />
      </Switch>
    </div>
  </Router>
);

export default App;
