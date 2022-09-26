import { useState } from "react";
import { Link } from "react-router-dom";
import "./../css/main.modules.scss";
import brandStory from "./../img/main/brandstory.mp4";

export default function Main({ item }) {
  // 1. 가격에 세일을 계산하여 금액에 넣고, 세일이 있다면 디스 카운트에 넣어야함.
  // 금액을 계산 후, 000 단위로 점을 넣어야함.
  // 원래 가격 - 세일 가격 = "현재 가격"
  // 세일이 없다면? % => 안보이게하기

  let [listN, setListN] = useState(7);
  let moreList = () => {
    setListN(listN + 4);

    if (listN >= 15) {
      alert("더 이상 상품이 존재하지 않습니다.");
    }
  };

  return (
    <main>
      <article className="main-visual">
        <div className="visual-sticky"></div>
        <div className="visual-wrapper">
          <div className="visual"></div>
        </div>
      </article>
      <section className="main-contents">
        <div className="title">
          It's Always Tea Time <span>With OSULLOC Tea</span>
          <a href="/shop/itemList" className="shop-btn">
            Shop All
          </a>
        </div>
        <div className="product">
          <h5>Osulloc Tea's</h5>
          <p>
            대한민국이 가진 천혜의 자연 유산 제주,
            <br /> 화산섬 제주가 가진 경이로운 생명력으로 오설록 차는
            탄생합니다.
          </p>

          <div className="item-wrap">
            {item.map((el, i) => {
              let saleCalcul = item[i].price * (item[i].sale / 100);
              let resultPrice = item[i].price - saleCalcul;
              let num = listN;
              if (i <= num) {
                return (
                  <div className="item" key={i}>
                    <Link to={`/shop/itemDetail/${item[i].id}`}>
                      <article className="item-img">
                        <img
                          src={`/img/item/thumb/${item[i].thumb}`}
                          alt={item[i].title}
                          width="100%"
                        />
                      </article>
                      <p className="item-list-title">{item[i].title}</p>
                      <span className="item-list-price">
                        <b>
                          {resultPrice
                            .toString()
                            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                        </b>
                        {item[i].sale !== "" ? (
                          <em className="sale">{item[i].sale}%</em>
                        ) : null}
                      </span>
                    </Link>
                  </div>
                );
              }
            })}
          </div>

          <button className="more-list" onClick={moreList}>
            <span>more view</span>
          </button>
        </div>
        <div className="story">
          <video src={brandStory} autoPlay muted loop></video>
          <div className="story-txt">
            <h2>Osulloc Story</h2>
            <p>
              차 문화 부흥을 향한 아름다운 집념, 오설록
              <br />
              Beautiful Devotion to Revive Tea Culture, Osulloc
            </p>
            <div className="detail">
              <a href="/brand">자세히보기</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
