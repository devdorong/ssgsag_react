import React from "react";
//css
import style from "../footer/Footer.module.css";
function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer_wrap}>
        <div className={style.footer_top}>
          <div className={style.footer_top_left}>
            <div className={style.fl_top}>고객센터</div>
            <div className={style.fl_bottom}>
              <div className={style.flb_top}>전화 010-1234-5678</div>
              <div className={style.flb_bottom}>
                <div className={style.flbb_t}>
                  운영시간<span> 10:10-19:00 </span>(토∙일, 공휴일 휴무)
                </div>
                <div className={style.flbb_b}>
                  점심시간<span> 12:30-14:00</span>
                </div>
              </div>
            </div>
          </div>
          <div className={style.footer_top_right}>
            <div className={style.ftr_left}>
              <div className={style.ftrl_top}>회사</div>
              <div className={style.ftrl_bottom}>
                <ul>
                  <li>
                    <a href="#">회사 소개</a>
                  </li>
                  <li>
                    <a href="#">서비스 소개</a>
                  </li>
                  <li>
                    <a href="#">채용</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={style.ftr_right}>
              <div className={style.ftrr_top}>비즈니스</div>
              <div className={style.ftrr_bottom}>
                <ul>
                  <li>
                    <a href="#">광고 문의</a>
                  </li>
                  <li>
                    <a href="#">공고 등록</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={style.footer_middle}></div>
        <div className={style.footer_bottom}>
          <div className={style.fb_left}>
            <div className={style.fbl_top}>
              <p>
                <a href="#">
                  <b>(주)이십사점오</b>
                </a>
              </p>
              <p>
                <a href="#">
                  <b>대표이사</b> 김신우{" "}
                </a>
                <span className={style.bar}></span>
                <a href="#">
                  {" "}
                  <b>사업자등록번호</b> 123-45-67890
                </a>
              </p>
              <p>
                <a href="#">
                  <b>직업정보제공사업 신고번호</b> J1700020250005
                </a>
              </p>
              <p>
                <a href="#">
                  <b>주소</b> 대전 중구 대종로 708, 2층{" "}
                </a>
                <span className={style.bar}></span>
                <a href="#"> 서울시 마포구 마포대로 122, 15층</a>
              </p>
              <p>
                <a href="#">
                  <b>광고 문의</b> sales@ssgsag.kr{" "}
                </a>
                <span className={style.bar}></span>
                <a href="#">
                  {" "}
                  <b>제휴 문의</b> ssgsag.univ@gmail.com
                </a>
              </p>
            </div>
            <div className={style.fbl_bottom}>
              <a href="#">이용약관</a>
              <a href="#">
                <strong>개인정보 처리방침</strong>
              </a>
            </div>
          </div>
          <div className={style.fb_right}>
            <a href="#">
              <img src="images/ic_instagram.svg" alt="#" />
            </a>
            <a href="#">
              <img src="images/ic_naver_blog.svg" alt="#" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
