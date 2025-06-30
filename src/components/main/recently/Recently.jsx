import React from "react";
import style from "./Recently.module.css";
function Recently() {
  return (
    <>
      <section className={style.recently}>
        <div className={style.recently_wrap}>
          <p className={style.recently_top}>
            <span>요즘 </span>핫한 공고만 찾고 있다면?
          </p>
          <div className={style.recently_bottom}>
            <ul className={style.recently_list}>{/* <!-- API 대체 --> */}</ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Recently;
