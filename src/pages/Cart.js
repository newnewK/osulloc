import "./../css/Cart.modules.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { valueNum, addCount, minusCount, deleteItem } from "../store";

export default function Cart() {
  let cartList = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  // 수량 작성
  let [value, setValue] = useState(cartList);

  // let valueChange = (e) => {
  //   parseInt(e.target.value);
  // };

  // checkbox State
  let [checkItems, setCheckItems] = useState([]);

  // 낱개 선택
  let singCheck = (checked, id) => {
    if (checked) {
      setCheckItems((copy) => [...copy, id]);
    } else {
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  //전체선택
  let allCheck = (checked) => {
    if (checked) {
      let checking = [];
      cartList.forEach((el) => checking.push(el.id));
      setCheckItems(checking);
    } else {
      setCheckItems([]);
    }
  };

  //선택삭제
  let checkedDeteleItem = () => {
    if (checkItems.length === 0) {
      alert("삭제할 상품을 선택해주세요!");
    } else {
      checkItems.map((a, i) => {
        dispatch(deleteItem(checkItems[i]));
        setCheckItems(checkItems.splice(checkItems[i], 1));
      });
    }
  };

  //총 금액 계산
  let [total, setTotal] = useState(0); // 금액 합계
  let [delivery, setDelivery] = useState(0); // 배송비
  let [sale, setSale] = useState(0); // 할인 금액
  let [resultPrice, setResultPrice] = useState(0); // 총합계

  useEffect(() => {
    if (checkItems.length === 0) {
      console.log("비웠어~");
      setTotal(0);
      setDelivery(0);
      setSale(0);
      setResultPrice(0);
    } else {
      console.log("채웠어!");
      let totalPriceArr = [];
      let totalSaleArr = [];
      checkItems.map((a, i) => {
        // 체크된 아이디를 포함한 obj 찾아야함.
        let findId = cartList.find((cartList) => cartList.id === checkItems[i]);
        // obj 최종 합산 금액을 더해야한다.
        let saleCalcul = findId.price * (findId.sale / 100);
        // let resultPrice = findId.price - saleCalcul;
        // let totalPrice = resultPrice * findId.count;
        let totalPrice = findId.price * findId.count;
        let totalSale = saleCalcul * findId.count;
        // 여러개 일 경우, checkArr에 담아서 더해야한다!
        totalPriceArr.push(totalPrice);
        totalSaleArr.push(totalSale);
      });

      let sum = 0;
      let sum2 = 0;
      for (let i = 0; i < totalPriceArr.length; i++) {
        sum += totalPriceArr[i];
        sum2 += totalSaleArr[i];
      }
      setTotal(sum);
      setSale(sum2);

      // 배송비 : 3만원 이상일 경우, 배송비는 0원!
      if (total - sale >= 30000) {
        setDelivery(0);
      } else {
        setDelivery(2500);
      }

      // 상품금액 - 할인금액 + 배달비 = 총 합계 금액
      setResultPrice(total - sale + delivery);
    }
  });

  // 숫자 콤마
  let osResult = resultPrice
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  let osDelivery = delivery
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  let osSale = sale.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  let osTotal = total
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

  return (
    <section className="cart-wrap">
      {/* <h2 className="cart-title">Shopping Cart</h2> */}
      <div className="cart-list">
        <div className="cart-items">
          <ul className="item-all-check">
            <li>
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => allCheck(e.target.checked)}
                  checked={checkItems.length === cartList.length ? true : false}
                ></input>
                <span className="box"></span>
                전체 선택
              </label>
            </li>
            <li>
              <button onClick={checkedDeteleItem}>선택삭제</button>
            </li>
          </ul>
          <div className="item-wrap">
            <ul className="item-list">
              {cartList.length === 0 ? (
                <li className="none-list">장바구니에 담긴 상품이 없습니다.</li>
              ) : (
                cartList.map((a, i) => {
                  let saleCalcul = cartList[i].price * (cartList[i].sale / 100);
                  let resultPrice = cartList[i].price - saleCalcul;
                  let totalPirce = (resultPrice * cartList[i].count)
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
                  return (
                    <li className="item-info" key={i}>
                      <label>
                        <input
                          type="checkbox"
                          name={`check-${cartList[i].id}`}
                          onChange={(e) =>
                            singCheck(e.target.checked, cartList[i].id)
                          }
                          checked={
                            checkItems.includes(cartList[i].id) ? true : false
                          }
                        />
                        <span></span>
                      </label>
                      <div className="item-img-tit">
                        <article className="img">
                          <img
                            src={`/img/item/thumb/${cartList[i].thumb}`}
                            alt={cartList[i].title}
                            width="100%"
                          />
                        </article>
                        <div className="tit">
                          <p>{cartList[i].title}</p>
                          <span>
                            {cartList[i].sale === ""
                              ? null
                              : `${cartList[i].sale}% 할인`}
                          </span>
                        </div>
                      </div>
                      <div className="item-quantity">
                        <div className="btns">
                          <button
                            onClick={() => {
                              dispatch(minusCount(cartList[i].id));
                            }}
                          >
                            <i className="icon minus" />
                          </button>
                          <input
                            value={cartList[i].count}
                            onChange={(e) => {
                              dispatch(
                                valueNum(cartList[i].id, e.target.value)
                              );
                            }}
                            className="num"
                            type="number"
                          />
                          {/* <p>{cartList[i].count}</p> */}
                          <button
                            onClick={() => {
                              dispatch(addCount(cartList[i].id));
                            }}
                          >
                            <i className="icon plus" />
                          </button>
                        </div>
                      </div>
                      <p className="result-price">
                        <b>{totalPirce}</b>원
                      </p>
                      <button
                        className="delete-btn"
                        onClick={(e) => {
                          dispatch(deleteItem(cartList[i].id));
                          setCheckItems(checkItems.splice(checkItems[i], 1));
                        }}
                      >
                        <i className="icon delete" />
                        <span>상품 삭제</span>
                      </button>
                    </li>
                  );
                })
              )}
            </ul>
            <ul className="order-price pc-none">
              <li>
                상품 금액
                <span>
                  <b>+ {osTotal}</b> 원
                </span>
              </li>
              <li className="sale">
                할인 금액
                <span>
                  <b>- {osSale}</b> 원
                </span>
              </li>
              <li className="delivery">
                배송비
                <span>
                  <b>+ {osDelivery}</b> 원
                </span>
              </li>
              <li className="total-price">
                Total
                <span>
                  <b>{osResult}</b> 원
                </span>
              </li>
            </ul>
            <div className="order-btns">
              <button className="order-check">선택 상품 주문</button>
              <button className="order-all">전체 상품 주문</button>
            </div>
          </div>
        </div>
        <div className="order-summery">
          <h2>Order Summery</h2>
          <ul className="order-price mobile-none">
            <li>
              상품 금액
              <span>
                <b>+ {osTotal}</b>원
              </span>
            </li>
            <li className="sale">
              할인 금액
              <span>
                <b>- {osSale}</b>원
              </span>
            </li>
            <li className="delivery">
              배송비
              <span>
                <b>+ {osDelivery}</b>원
              </span>
            </li>
            <li className="total-price">
              Total
              <span>
                <b>{osResult}</b> 원
              </span>
            </li>
          </ul>
          <button className="order-btn">주문하기</button>
        </div>
      </div>
    </section>
  );
}
