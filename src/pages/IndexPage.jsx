import React from "react";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";
import Popup from "../components/popup/Popup";

function IndexPage() {
  return (
    <>
      <Popup></Popup>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default IndexPage;
