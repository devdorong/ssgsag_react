import React from "react";
//css
import style from "./AppComponents.module.css";
function AppComponents() {
  return (
    <>
      <section className={style.app}>
        <div className={style.app_wrap}>
          <div className={style.app_item}>
            <div className={style.app_image}>
              <img src="images/img_install_guide.png" alt="#" />
            </div>
            <div className={style.app_text}>
              <div className={style.app_text_top}>
                <div className={style.app_top_main}>슥삭 앱 설치 안내</div>
                <div className={style.app_top_sub}>
                  슥삭 앱에서 더 편리하게 공고를 추천받고 일정을 관리할 수
                  있어요
                </div>
              </div>
              <div className={style.app_text_bottom}>
                <div className={style.app_bottom_apple}>
                  <a href="#">
                    <div className={style.apple_image}>
                      <img src="images/ic_app_store.png" alt="#" />
                    </div>
                    <div className={style.apple_text}>App Store에서 보기</div>
                  </a>
                </div>
                <div className={style.app_bottom_play}>
                  <a href="#">
                    <div className={style.play_image}>
                      <img src="images/ic_google_play.png" alt="#" />
                    </div>
                    <div className={style.play_text}>Google Play에서 보기</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AppComponents;
