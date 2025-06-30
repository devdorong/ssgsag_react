import React from "react";
//css
import style from "./Banner.module.css";
function Banner() {
  return (
    <section className={style.banner}>
      <div className={style.layout}>
        <div className={style.banner_wrap}>
          <div className="swiper sw_banner">
            <div className={style["swiper-wrapper"]}>
              {/* <!-- Api 연동 --> */}
            </div>
          </div>
          <div className={style.banner_pagnation}></div>

          <button className={style.banner_slide_prev}>
            <img src="images/slider_arrow.svg" alt="" />
          </button>
          <button className={style.banner_slide_next}>
            <img src="images/slider_arrow.svg" alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
