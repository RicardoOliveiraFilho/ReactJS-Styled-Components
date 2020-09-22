import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import MainTheme from "./theme/main";

function App() {
  return (
    <React.Fragment>
      <MainTheme />
      <Header />
      <Content />
      <Footer />
    </React.Fragment>
  );
}

export default App;
