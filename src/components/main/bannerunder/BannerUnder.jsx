import React from "react";
//css
import style from "./BannerUnder.module.css";

function BannerUnder() {
  return (
    <section className={style.banner_under}>
      <ul>
        <li>
          <button className={style.banner_bt}>
            <div className={style.bt_image}>
              <img src="images/ic_activity.png" alt="#" />
            </div>
            <div className={style.bt_text}>대외활동</div>
            <span className={style.bt_hot}>HOT</span>
          </button>
        </li>
        <li>
          <button className={style.banner_bt}>
            <div className={style.bt_image}>
              <img src="images/ic_contest.png" alt="#" />
            </div>
            <div className={style.bt_text}>공모전</div>
            {/* <!-- <span>HOT</span> --> */}
          </button>
        </li>
        <li>
          <button className={style.banner_bt}>
            <div className={style.bt_image}>
              <img src="images/ic_internship.png" alt="#" />
            </div>
            <div className={style.bt_text}>인턴십</div>
            {/* <!-- <span>HOT</span> --> */}
          </button>
        </li>
        <li>
          <button className={style.banner_bt}>
            <div className={style.bt_image}>
              <img src="images/ic_education.png" alt="#" />
            </div>
            <div className={style.bt_text}>교육·︎강연</div>
            {/* <!-- <span>HOT</span> --> */}
          </button>
        </li>
      </ul>
    </section>
  );
}

export default BannerUnder;
