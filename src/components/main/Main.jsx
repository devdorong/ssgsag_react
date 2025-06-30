import React from "react";
import Banner from "./banner/Banner";
import BannerUnder from "./bannerunder/BannerUnder";
import Cock from "./cock/Cock";
import Recently from "./recently/Recently";
import Now from "./now/Now";
import AppComponents from "./appcomponents/AppComponents";

function Main() {
  return (
    <>
      <Banner></Banner>
      <BannerUnder></BannerUnder>
      <Cock></Cock>
      <Recently></Recently>
      <Now></Now>
      <AppComponents></AppComponents>
    </>
  );
}

export default Main;
