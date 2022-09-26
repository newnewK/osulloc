import { Link } from "react-router-dom";

export default function SearchResult({ item }) {
  // 검색어 로컬스토리지에서 받아오기.
  let searchItem = JSON.parse(localStorage.getItem("search"));
  console.log(searchItem);
  console.log(`${searchItem}`);

  // 검색어가 아이템 안에 있는지 확인 후, map 돌리기.
  let filterData = item.filter((item) => item.title.includes(`${searchItem}`));

  return (
    <section className="serach-result-wrap">
      <p className="recode">
        총 <span>{filterData.length}</span> 개의 상품이 검색되었습니다.
      </p>
      {filterData.length === 0 ? (
        <div className="serach-result-none">검색결과가 없습니다.</div>
      ) : (
        <div className="search-result-item-wrap">
          {filterData.map((a, i) => {
            let saleCalcul = a.price * (a.sale / 100);
            let resultPrice = a.price - saleCalcul;
            return (
              <div className="item" key={i}>
                <Link to={`/shop/itemDetail/${a.id}`}>
                  <article className="item-img">
                    <img
                      src={`/img/item/thumb/${a.thumb}`}
                      alt={a.title}
                      width="100%"
                    />
                  </article>
                  <p className="item-list-title">{a.title}</p>
                  <span className="item-list-price">
                    <b>
                      KRW{" "}
                      {resultPrice
                        .toString()
                        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                    </b>
                    {a.sale !== "" ? <em className="sale">{a.sale}%</em> : null}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
