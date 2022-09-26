import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./../../css/ItemDetail.modules.scss";
import DetailImg from "./DetailImg";
import ProductInfo from "./ProductInfo";
import Review from "./Review";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store";

function ItemDetail({ item }) {
  let cartList = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  // like btn Click
  let emptiedLike =
    "M18.9996 5.62299L15.6051 2.55614C12.2106 -0.510215 6.56995 0.17753 3.48147 3.57849C-0.397666 7.66674 -0.397863 14.5859 3.70675 18.9121L19 33.8811L34.2923 18.9121C38.3969 14.5859 38.3971 7.66747 34.5176 3.57849C31.4291 0.17753 25.7888 -0.510094 22.3942 2.55614L18.9996 5.62299ZM32.0081 16.6701C34.9446 13.533 34.8523 8.58052 32.1962 5.78099L32.1721 5.75565L32.1487 5.72978C30.0533 3.42248 26.4219 3.23047 24.5394 4.93062L18.9996 9.93557L13.4601 4.93076C11.5777 3.2306 7.94577 3.42244 5.85042 5.72978L5.82689 5.75569L5.8028 5.78108C3.14716 8.57988 3.05453 13.533 5.99094 16.6701L18.9999 29.4033L32.0081 16.6701Z";
  let [like, setLike] = useState([false, emptiedLike]);
  let [lkieColor, setLikeColor] = useState("6d6d6d");
  let changLike = () => {
    if (like[0] === false) {
      setLike([
        true,
        "M18.9996 5.62299L15.6051 2.55614C12.2106 -0.510215 6.56995 0.17753 3.48147 3.57849C-0.397666 7.66674 -0.397863 14.5859 3.70675 18.9121L19 33.8811L34.2923 18.9121C38.3969 14.5859 38.3971 7.66747 34.5176 3.57849C31.4291 0.17753 25.7888 -0.510094 22.3942 2.55614L18.9996 5.62299Z",
      ]);
      setLikeColor("fd5c5c");
    } else {
      setLike([false, emptiedLike]);
      setLikeColor("6d6d6d");
    }
  };

  //url 복사
  let copyUrl = async (text) => {
    try {
      await navigator.clipboard.writeText(text);

      alert("복사성공");
    } catch (error) {
      alert("다시 시도해주세요! ");
    }
  };

  //tab
  let tab = [
    { id: 0, title: "상품상세", content: <DetailImg item={item} /> },
    { id: 1, title: "고객리뷰", content: <Review item={item} /> },
    { id: 2, title: "상품고시정보", content: <ProductInfo item={item} /> },
  ];

  let [index, setIndex] = useState(0);

  // item id 받아오기
  let { id } = useParams();
  let findId = item.find((item) => item.id == id);

  // 리뷰 개수 카운팅
  let getLocal = localStorage.getItem("review");
  let getArry = JSON.parse(getLocal);
  let filterId = getArry.filter((getArry) => getArry.itemId === findId.id);
  // 리뷰 별점
  let starNum = 5;
  let average = 0;
  for (let i = 0; i < filterId.length; i++) {
    starNum += filterId[i].star;
    average = starNum / (filterId.length + 1);
  }
  let roundAver = Math.round(average);
  let starFull = () => {
    const arr = [];
    for (let i = 0; i < roundAver; i++) {
      arr.push(
        <svg version="1.1" viewBox="0 0 32 32" className="fullStar" key={i}>
          <path d="M29.895,12.52c-0.235-0.704-0.829-1.209-1.549-1.319l-7.309-1.095l-3.29-6.984C17.42,2.43,16.751,2,16,2  s-1.42,0.43-1.747,1.122l-3.242,6.959l-7.357,1.12c-0.72,0.11-1.313,0.615-1.549,1.319c-0.241,0.723-0.063,1.507,0.465,2.046  l5.321,5.446l-1.257,7.676c-0.125,0.767,0.185,1.518,0.811,1.959c0.602,0.427,1.376,0.469,2.02,0.114l6.489-3.624l6.581,3.624  c0.646,0.355,1.418,0.311,2.02-0.114c0.626-0.441,0.937-1.192,0.811-1.959l-1.259-7.686l5.323-5.436  C29.958,14.027,30.136,13.243,29.895,12.52z" />
        </svg>
      );
    }

    return arr;
  };

  // 가격 계산
  let saleCalcul = findId.price * (findId.sale / 100);
  let resultPrice = findId.price - saleCalcul;

  // 상품 개수 카운트 (0, ., +, - 는 제외) & 최대 수량 넘지않기
  let [value, setValue] = useState(1);

  let valueChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    numCheck(value);
  }, [value]);

  let numCheck = (v) => {
    let num = v;
    if (num === "0") {
      alert("상품수는 1개 이상부터 가능합니다!");
      setValue(1);
    } else if (num === "-" || num === "+" || num === ".") {
      alert("특수기호는 사용이 불가능합니다!");
      setValue(1);
    } else if (findId.maxQty !== "") {
      if (num > findId.maxQty) {
        alert(`최대 수량은 ${findId.maxQty} 개 입니다.`);
        setValue(findId.maxQty - 1);
      } else {
        setValue(num);
      }
    } else {
      setValue(num);
    }
  };

  let minus = () => {
    if (value === 1) {
      alert("상품수는 1개 이상부터 가능합니다!");
      setValue(1);
    } else {
      setValue(value - 1);
    }
  };

  let plus = () => {
    setValue(value + 1);
  };

  // 주문금액 합계
  let totalPirce = resultPrice * value;

  // 장바구니 버튼 클릭 시 모달
  let [modal, setModal] = useState(false);

  let openModal = () => {
    setModal(true);
  };

  let colseModal = () => {
    setModal(false);
  };

  // 장바구니 버튼 클릭
  let addCart = () => {
    openModal();

    dispatch(
      addItem({
        id: `${findId.id}`,
        title: `${findId.title}`,
        price: `${findId.price}`,
        sale: `${findId.sale}`,
        maxQty: `${findId.maxQty}`,
        thumb: `${findId.thumb}`,
        count: `${value}`,
      })
    );
  };

  // 추천 제품
  let rec = () => {
    let arry = [];
    let copyItem = [...item];
    let find = copyItem.find((copyItem) => copyItem.id === findId.id);
    let expect = copyItem.filter((el) => el !== find);

    for (let i = 0; i < 5; i++) {
      let saleCalcul = expect[i].price * (expect[i].sale / 100);
      let resultPrice = expect[i].price - saleCalcul;
      arry.push(
        <div className="ir-item" key={i}>
          <Link to={`/shop/itemDetail/${expect[i].id}`}>
            <article className="item-img">
              <img
                src={`/img/item/thumb/${expect[i].thumb}`}
                alt={expect[i].thumb}
                width="100%"
              />
            </article>
            <p className="item-list-title">{expect[i].title}</p>
            <span className="item-list-price">
              <b>{resultPrice}</b> 원
              {expect[i].sale !== "" ? (
                <em className="sale">{expect[i].sale}%</em>
              ) : null}
            </span>
          </Link>
        </div>
      );
    }

    return arry;
  };

  // let rec

  return (
    // { CartModal === true ? <CartModal /> : null }
    <section className="item-detai-wrap">
      {modal === true ? <CartModal colseModal={colseModal} /> : null}

      <div className="detail-top">
        <article className="item-main-img">
          <img
            src={`/img/item/thumb/${findId.thumb}`}
            alt={findId.title}
            width="80%"
          />
        </article>
        <div className="item-info">
          <h2 className="ii-title">{findId.title}</h2>
          <p className="ii-info-txt">{findId.desc}</p>
          <span className="review">
            {starFull()}
            {[1, 2, 3, 4, 5].slice(roundAver).map((el) => {
              return (
                <svg
                  version="1.1"
                  viewBox="0 0 32 32"
                  key={el}
                  className={`star `}
                >
                  <path d="M29.895,12.52c-0.235-0.704-0.829-1.209-1.549-1.319l-7.309-1.095l-3.29-6.984C17.42,2.43,16.751,2,16,2  s-1.42,0.43-1.747,1.122l-3.242,6.959l-7.357,1.12c-0.72,0.11-1.313,0.615-1.549,1.319c-0.241,0.723-0.063,1.507,0.465,2.046  l5.321,5.446l-1.257,7.676c-0.125,0.767,0.185,1.518,0.811,1.959c0.602,0.427,1.376,0.469,2.02,0.114l6.489-3.624l6.581,3.624  c0.646,0.355,1.418,0.311,2.02-0.114c0.626-0.441,0.937-1.192,0.811-1.959l-1.259-7.686l5.323-5.436  C29.958,14.027,30.136,13.243,29.895,12.52z" />
                </svg>
              );
            })}
            <span>{filterId.length + 1}개의 리뷰</span>
          </span>
          <ul className="ii-content">
            <li className="price">
              {findId.sale !== "" ? (
                <p className="sale">
                  {findId.sale}%
                  <em className="cost">
                    {findId.price
                      .toString()
                      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    원
                  </em>
                </p>
              ) : null}
              <b>
                {resultPrice
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
              </b>{" "}
              원
            </li>
            <li className="qty-wrap">
              구매수량
              <div className="qty">
                <button onClick={minus}>
                  <i className="icon minus" />
                </button>
                <input
                  type="number"
                  value={value}
                  onChange={valueChange}
                  className="num"
                  min={1}
                />
                <button onClick={plus}>
                  <i className="icon plus" />
                </button>
              </div>
            </li>
            <li className="result">
              주문금액
              <span>
                {totalPirce
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}{" "}
                원
              </span>
            </li>
          </ul>

          <div className="buttons-wrap">
            <button className="like-btn" onClick={changLike}>
              <svg
                className="lkie-none"
                viewBox="0 0 38 34"
                fill={"#" + lkieColor}
              >
                <path fillRule="evenodd" clipRule="evenodd" d={like[1]}></path>
              </svg>
            </button>
            <button
              className="share-btn"
              type="button"
              onClick={() => {
                copyUrl(decodeURI(window.location.href));
              }}
            >
              <svg viewBox="0 0 32 35" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M25.5 9.8C27.3226 9.8 28.8 8.32254 28.8 6.5C28.8 4.67746 27.3226 3.2 25.5 3.2C23.6775 3.2 22.2 4.67746 22.2 6.5C22.2 8.32254 23.6775 9.8 25.5 9.8ZM25.5 13C29.0899 13 32 10.0899 32 6.5C32 2.91015 29.0899 0 25.5 0C21.9102 0 19 2.91015 19 6.5C19 7.00407 19.0574 7.49475 19.166 7.96584L13.2462 11.8889L10.9897 13.2996C9.82276 12.1847 8.24135 11.4999 6.5 11.4999C2.91015 11.4999 0 14.4101 0 17.9999C0 21.5898 2.91015 24.4999 6.5 24.4999C8.22679 24.4999 9.79631 23.8266 10.9603 22.7281L19.0878 27.4291C19.0301 27.7775 19 28.1352 19 28.4999C19 32.0898 21.9102 34.9999 25.5 34.9999C29.0899 34.9999 32 32.0898 32 28.4999C32 24.9101 29.0899 21.9999 25.5 21.9999C23.4257 21.9999 21.5784 22.9716 20.3882 24.4846L12.6783 20.0251C12.8871 19.3878 13 18.7071 13 17.9999C13 17.3061 12.8913 16.6376 12.6899 16.0106L14.9785 14.5798L20.6465 10.8236C21.8369 12.159 23.5703 13 25.5 13ZM6.5 21.2999C8.32254 21.2999 9.8 19.8225 9.8 17.9999C9.8 16.1774 8.32254 14.6999 6.5 14.6999C4.67746 14.6999 3.2 16.1774 3.2 17.9999C3.2 19.8225 4.67746 21.2999 6.5 21.2999ZM28.8 28.4999C28.8 30.3225 27.3226 31.7999 25.5 31.7999C23.6775 31.7999 22.2 30.3225 22.2 28.4999C22.2 26.6774 23.6775 25.1999 25.5 25.1999C27.3226 25.1999 28.8 26.6774 28.8 28.4999Z"
                  fill="#6d6d6d"
                ></path>
              </svg>
            </button>
            <button className="basket-btn" onClick={addCart}>
              장바구니
            </button>
          </div>
        </div>
      </div>
      <div className="detail-tab-wrap">
        <ul className="tab-nav">
          {tab.map((a, i) => {
            return (
              <li
                className={index === a.id ? "active" : null}
                onClick={() => setIndex(a.id)}
                key={i}
              >
                {a.title}
              </li>
            );
          })}
        </ul>
        {tab
          .filter((a) => index === a.id)
          .map((a, i) => {
            return (
              <div className="tab-info" key={i}>
                {a.content}
              </div>
            );
          })}
      </div>
      <div className="item-recommend">
        <div className="ir-title">
          <h3>추천 제품</h3>
        </div>
        <div className="ir-list-wrap">{rec()}</div>
      </div>
    </section>
  );
}

function CartModal({ colseModal }) {
  return (
    <section className="modal-fixed">
      <div className="modal-content">
        <p>장바구니에 담았습니다.</p>
        <div className="btn-wrap">
          {/* <button>장바구니 이동</button> */}
          <button onClick={colseModal}>쇼핑 계속하기</button>
          <Link to="/cart">장바구니 이동</Link>
        </div>
      </div>
    </section>
  );
}

export default ItemDetail;
