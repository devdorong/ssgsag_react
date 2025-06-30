import React from "react";
//css
import style from "./Now.module.css";
function Now() {
  return (
    <>
      <section className={style.now}>
        <div className={style.now_wrap}>
          <p className={style.now_top}>
            <span>방금</span> 게시된 공고만 찾고 있다면?
          </p>
          <div className={style.now_bottom}>
            <ul className={style.now_list}>{/* <!-- API 대체 --> */}</ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Now;
