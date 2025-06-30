import React from "react";
//css
import style from "./Cock.module.css";
function Cock() {
  return (
    <>
      <section className={style.cock}>
        <div className={style.cock_wrap}>
          <p className={style.cock_top}>
            슥삭이<span> 콕 </span>집은 공고
          </p>
          <div className={style.cock_bottom}>
            <ul className={style.cock_list}>{/* <!-- Api 연동 --> */}</ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cock;
