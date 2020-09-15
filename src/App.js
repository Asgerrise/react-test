import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";

import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Nav from "./Nav";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  );
};

render(<App />, document.querySelector("#root"));
