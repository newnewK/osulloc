import { useState } from "react";
import { Link } from "react-router-dom";
import "./../../css/ItemList.modules.scss";

export default function ItemList({ item }) {
  let [listN, setListN] = useState(7);
  let moreList = () => {
    setListN(listN + 4);

    if (listN >= 15) {
      alert("더 이상 상품이 존재하지 않습니다.");
    }
  };
  return (
    <section className="item-list-wrap">
      <article className="list-visual">
        <div className="visiaul-sticky"></div>
        <div className="visual-wrapper">
          <div className="title">Osulloc Tea</div>
          <div className="visual"></div>
        </div>
      </article>
      <section className="item-view-wrapper">
        <div className="list-wrap">
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
                          <span>KRW</span>
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
      </section>
    </section>
  );
}
