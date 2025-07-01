import React from "react";
//css
import style from "./Header.module.css";

function Header() {
  return (
    <>
      <header className={style.header}>
        <div className={style.layout}>
          <div className={style.header_top}>
            <div className={style.header_left}>
              <a href="#" className={style.header_left_logo}>
                <img src="images/img_logo_ssgsag.svg" alt="슥삭 메인로고" />
              </a>
              <div className={style.header_left_menu}>
                <ul>
                  <li>
                    <a href="#">내 일정</a>
                  </li>
                  <li>
                    <a href="#">
                      추천공고<span></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">슈퍼인턴</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={style.header_right}>
              <div className={style.header_right_link}>
                <ul>
                  <li>
                    <img src="images/ic_upload.svg" alt="" />
                    <a href="#">공고등록</a>
                  </li>
                  <li>
                    <img src="images/ic_advertise.svg" alt="" />
                    <a href="#">광고문의</a>
                  </li>
                </ul>
              </div>
              <div className={style.header_right_login}>로그인</div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
