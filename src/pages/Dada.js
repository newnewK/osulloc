import "./../css/Dada.modules.scss";

export default function Dada() {
  return (
    <section className="dada-wrap">
      <article className="dada-visual">
        <div className="visiaul-sticky"></div>
        <div className="visual-wrapper">
          <div className="title">茶茶日常</div>
          <div className="visual"></div>
        </div>
      </article>
      <div className="dada-content">
        <div className="dada-img-tit">
          <h2>
            다다일상,
            <br /> 차와 함께 하는 삶
          </h2>
          <p>
            차를 마시는 것은 일상의 쉼을 가지며,
            <br className="pc-none" /> 나를 이끌어내고 세상을 따뜻하게
            <br className="pc-none" />
            바라보는 것에 관한 일입니다.
            <br />
            <br className="pc-none" />
            당신이 언제 어디에 있든 차와 함께
            <br className="pc-none" /> 삶의 아름다운 여백을 만들어 나가길
            바랍니다.
          </p>

          <ul className="dada-img-wrap ">
            <li className="img-row2">
              <img src="/img/dada/dada_1.jpeg" alt="dada" />
              <img src="/img/dada/dada_2.jpeg" alt="dada" />
            </li>
            <li className="img-txt">
              <img src="/img/dada/dada_3.jpeg" alt="dada" />
              <div className="dada-text align-bottom">
                <p className="dada-desc">
                  차 한 잔은 차분하게 하루를 정리하고 내일로 한 걸음 더 나아가게
                  만드는 기분이 들어요. 하루를 마무리하는 온점 같은 시간이라고
                  할까.
                </p>
                <p className="dada-caption">가구 브랜드 대표 양윤선</p>
              </div>
            </li>
            <li className="img-row2">
              <img src="/img/dada/dada_4.jpeg" alt="dada" />
              <img src="/img/dada/dada_5.jpeg" alt="dada" />
            </li>
            <li className="img-row2">
              <img src="/img/dada/dada_6.jpeg" alt="dada" />
              <img src="/img/dada/dada_7.jpeg" alt="dada" />
            </li>
            <li className="img-txt">
              <img src="/img/dada/dada_8.jpeg" alt="dada" />
              <div className="dada-text align-bottom">
                <p className="dada-desc">
                  운동을 매일 하는 것도 중요하지만 가장 신경 쓰는 부분은 수분
                  보충이에요. 운동 전에 물을 마시고 운동을 마치면 따뜻한 차를
                  마셔요.
                </p>
                <p className="dada-caption">러닝 트레이너 임소영</p>
              </div>
            </li>
            <li className="img-txt">
              <img src="/img/dada/dada_9.jpeg" alt="dada" />
              <div className="dada-text ">
                <p className="dada-desc">
                  후각이 예민하다 보니 차를 마실 때도 향을 가장 신경 써요. 좋은
                  향을 내는 차가 심신에 안정을 줘서 더 즐기게 됐어요.
                </p>
                <p className="dada-caption">채식 요리 연구가 신주하</p>
              </div>
            </li>
            {/*  */}
            <li className="img-txt">
              <img src="/img/dada/dada_10.jpeg" alt="dada" />
              <div className="dada-text align-bottom">
                <p className="dada-desc">
                  작업에 집중하기 시작하면 쉴 틈이 없는 제게, 차 한잔의 여유는
                  정말 소중하거든요.
                </p>
                <p className="dada-caption">테이핑 아티스트 박건우</p>
              </div>
            </li>
            <li className="img-txt">
              <img src="/img/dada/dada_11.jpeg" alt="dada" />
              <div className="dada-text ">
                <p className="dada-desc">
                  차가운 공기 때문인지 진한 자연의 냄새와 차 향이 함께
                  느껴지는데 집에서 마실 때와는 또 다르더라고요.
                </p>
                <p className="dada-caption">오지 캠퍼 강서구</p>
              </div>
            </li>
            <li className="img-row2">
              <img src="/img/dada/dada_12.jpeg" alt="dada" />
              <img src="/img/dada/dada_13.jpeg" alt="dada" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
