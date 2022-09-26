/* eslint-disable jsx-a11y/alt-text */
import "./../css/Brand.modules.scss";
import ceoimg from "./../img/brand/ceo.jpg";
import historyData from "./../data/history.data";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";

export default function Brand() {
  let [history, setHistory] = useState(historyData);
  return (
    <section className="brand-wrap">
      <article className="brand-visual">
        <div className="visiaul-sticky"></div>
        <div className="visual-wrapper">
          <div className="title">Brand Story</div>
          <div className="visual"></div>
        </div>
      </article>
      <div className="brand-info-wrap">
        <div className="brand-info">
          <figure>
            <img src={ceoimg} alt="오설록 회장" />
          </figure>
          <figcaption>
            <h2>About Osulloc</h2>
            <h5>Beautiful Devotion to Revive Tea Culture, Osulloc</h5>
            <p>
              대한민국의 프리미엄 차 브랜드 오설록(Osulloc)은 바쁜 일상 속에서도
              내면을 아름답게 가꾸고 일상에 삶의 멋을 더하며, 관계를 따뜻하게
              이어주는 가치 있는 쉼을 선사합니다.
              <br />
              <br />
              “ 어느 나라를 가도 나라마다 독특한 차가 하나씩은 있는데 우리나라는
              없다. 어떤 희생을 치르더라도 우리의 전통 차문화를 정립하고 싶다. -
              아모레퍼시픽 창업자 故 서성환 회장”
              <br />
              <br />
              아모레퍼시픽의 창업주이자 오설록의 장원인 고(故) 서성환 회장은
              천년의 역사를 가졌지만 어느 순간 자취를 감춰버린 우리나라의
              차문화를 늘 아쉬워했습니다. 우리나라에 고유의 차문화를
              정착시키겠다는 그의 일념으로 오설록의 아름다운 집념은
              시작되었습니다. 그러나, 돌과 바람이 전부였던 제주의 버려진 땅.
              억척스런 제주 사람의 손조차 한 번도 닿지 않은 채 버려진 3곳의 땅을
              제주의 자연을 이해하고 극복하며 푸른 꿈을 45여 년을 키워온 결과,
              제주의 땅은 세계적인 녹차 산지로 손꼽히는 최고의 차 재배지로
              거듭났으며 한국의 차 문화 정립을 위해 땀과 열정들이 모여
              세계적으로 권위 있는 명차 대회에서 매년 수상을 이어가며 한국의 차
              문화 전파를 위해 오설록의 아름다운 집념은 계속되고 있습니다.
              <br />
              <br />
              제주의 푸른 차밭, 차 문화의 깊이를 직접 체험할 수 있는 티스톤과
              티뮤지엄, 도심 속 티하우스 그리고 제주 자연과 정성을 오롯이 담은
              최고 품질의 차는 우리나라에 고유의 차 문화를 다시 부흥시키겠다는
              오설록의 노력이 이루어낸 결실입니다.
            </p>
          </figcaption>
        </div>
        {/* brand-info */}
        <div className="history-wrap">
          <div className="history-title">
            <h2>Since 1927</h2>
            <p>
              차밭을 개간한 집념을 근간으로 차를 재배하고, 가공 발효하여
              세계적으로 권위있는 명차 대회에서
              <br />
              꾸준히 수상을 이어가며 증명된 오설록의 차는 이제 전 세계의
              사람들과 만나고 있습니다.
            </p>
          </div>

          <Swiper
            slidesPerView={3}
            // slidesPerColumn={2}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            {history.map((a, i) => {
              return (
                <SwiperSlide key={i}>
                  <figure className="since-img">
                    <img src={"/img/history/" + history[i].img} width="100%" />
                  </figure>
                  <figcaption className="since-info">
                    <h2>{history[i].years}</h2>
                    <p>{history[i].desc}</p>
                  </figcaption>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      {/* brand-info-wrap */}
    </section>
  );
}
