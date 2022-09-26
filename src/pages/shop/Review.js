import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./../../css/tab.scss";

function Review({ item }) {
  let [modal, setModal] = useState(false);
  let [render, setRender] = React.useState(0);

  // review modal open
  let openModal = () => {
    setModal(true);
  };

  let colseModal = () => {
    setModal(false);
  };

  //현재 날짜
  let todayTime = () => {
    // 현재 날짜 및 시간
    let now = new Date();
    let todayYear = now.getFullYear();
    let todayMonth = now.getMonth() + 1;
    let todayDate = now.getDate();

    return todayYear + "." + todayMonth + "." + todayDate;
  };

  // item id 받아오기
  let { id } = useParams();
  let findId = item.find((item) => item.id == id);

  // 로컬스토리지 데이터 받아오기!
  let getLocal = localStorage.getItem("review");
  let getArry = JSON.parse(getLocal);
  console.log("Arry", getArry);
  let filterId = getArry.filter((getArry) => getArry.itemId === findId.id);
  let [reviewData, setReivewData] = useState(filterId);
  let star = (a) => {
    let arr = [];
    console.log(reviewData[a].star);
    for (let i = 0; i < reviewData[a].star; i++) {
      arr.push(
        <svg version="1.1" viewBox="0 0 32 32" className="fullStar" key={i}>
          <path d="M29.895,12.52c-0.235-0.704-0.829-1.209-1.549-1.319l-7.309-1.095l-3.29-6.984C17.42,2.43,16.751,2,16,2  s-1.42,0.43-1.747,1.122l-3.242,6.959l-7.357,1.12c-0.72,0.11-1.313,0.615-1.549,1.319c-0.241,0.723-0.063,1.507,0.465,2.046  l5.321,5.446l-1.257,7.676c-0.125,0.767,0.185,1.518,0.811,1.959c0.602,0.427,1.376,0.469,2.02,0.114l6.489-3.624l6.581,3.624  c0.646,0.355,1.418,0.311,2.02-0.114c0.626-0.441,0.937-1.192,0.811-1.959l-1.259-7.686l5.323-5.436  C29.958,14.027,30.136,13.243,29.895,12.52z" />
        </svg>
      );
    }

    return arr;
  };

  return (
    <section className="review-wrap">
      {modal == true ? (
        <WriteReview
          colseModal={colseModal}
          item={item}
          todayTime={todayTime}
        />
      ) : null}
      <div className="review-header">
        <p className="tit">
          리뷰 <span>{reviewData.length + 1}</span>
        </p>
        <button type="button" onClick={openModal}>
          리뷰 작성
        </button>
      </div>
      <div className="review-list-wrap">
        <ul className="review-list">
          <li>
            <div className="writer-wrap">
              <article className="writer-profile">
                <img width="100%" src="/img/profile.webp" alt="프로필" />
              </article>

              <div className="writer-info">
                <p className="writer-name">newnew</p>
                <span className="writer-ds ">
                  {[1, 2, 3, 4, 5].map((a) => {
                    return (
                      <svg
                        version="1.1"
                        viewBox="0 0 32 32"
                        key={a}
                        className="fullStar"
                      >
                        <path d="M29.895,12.52c-0.235-0.704-0.829-1.209-1.549-1.319l-7.309-1.095l-3.29-6.984C17.42,2.43,16.751,2,16,2  s-1.42,0.43-1.747,1.122l-3.242,6.959l-7.357,1.12c-0.72,0.11-1.313,0.615-1.549,1.319c-0.241,0.723-0.063,1.507,0.465,2.046  l5.321,5.446l-1.257,7.676c-0.125,0.767,0.185,1.518,0.811,1.959c0.602,0.427,1.376,0.469,2.02,0.114l6.489-3.624l6.581,3.624  c0.646,0.355,1.418,0.311,2.02-0.114c0.626-0.441,0.937-1.192,0.811-1.959l-1.259-7.686l5.323-5.436  C29.958,14.027,30.136,13.243,29.895,12.52z" />
                      </svg>
                    );
                  })}

                  <em className="write-day">{todayTime()}</em>
                </span>
              </div>
            </div>
            <div className="write-info">
              리뷰쓰기 클릭 후, <b>리뷰 작성 테스트</b>를 해주세요! 로그인이
              되지 않았을 경우, tester 로 작성되어집니다. &#128526;
              <br />
              새로고침 또는 다른 탭 메뉴에 이동 후 <b>작성한 리뷰</b>를
              확인해주세요!
            </div>
          </li>
          {{ getArry } !== []
            ? reviewData.map((a, i) => {
                return (
                  <li key={`${i}-key`}>
                    <div className="writer-wrap">
                      <article className="writer-profile">
                        <img
                          width="100%"
                          src="/img/profile.webp"
                          alt="프로필"
                        />
                      </article>
                      <div className="writer-info">
                        <p className="writer-name">{reviewData[i].wrieter}</p>
                        <span className="writer-ds ">
                          {star(i)}
                          {[1, 2, 3, 4, 5]
                            .slice(`${reviewData[i].star}`)
                            .map((el) => {
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
                          <em className="write-day">{todayTime()}</em>
                        </span>
                      </div>
                    </div>
                    <div className="write-info">{reviewData[i].review}</div>
                  </li>
                );
              })
            : null}
        </ul>
        <div className="more-list">
          <ul className="more more-reivew pc">
            <li className="active">1</li>
            <li>2</li>
            <li>3</li>
            <li>
              <i className="icon arrow-right" />
            </li>
          </ul>
          <button className="more more-reivew mobile">리뷰 더보기</button>
        </div>
      </div>
    </section>
  );
}

function WriteReview({ colseModal, item, todayTime }) {
  let { id } = useParams();
  let findId = item.find((item) => item.id == id);

  // 별점 남기기
  // 1. 마우스 오버로 해당 별 순번까지 드래그
  // 2. 해당 별 클릭하면 색은 유지
  // 3. 클릭한 해당 별 저장 후 로컬스토리지에 저장해야함.

  let [hovered, setHovered] = useState(null);
  let [clicked, setClicked] = useState(null);
  let [starWng, setStarWng] = useState(false);

  // 텍스트 글자수 체크 (최소 20자 이상)
  // 1. 텍스트가 작성될 때 마다, 카운팅
  // 2. 카운팅을 view 단에 보여줘야함.
  let [txtVal, setTxtVal] = useState("");
  let [txtWng, setTxtWng] = useState(false);
  let writeTxt = (e) => {
    setTxtVal(e.target.value);
    if (txtVal.length > 20) {
      setTxtWng(false);
    }
  };
  let txtBlur = () => {
    if (txtVal.length < 20) {
      console.log("20자가 안넘어갔어요!");
      setTxtWng(true);
    } else {
      setTxtWng(false);
    }
  };

  // 완료 버튼
  // 1. 버튼을 클릭시 텍스트 글자수가 20자 이상 완료가됨
  // 2. 글자수가 20자 이하라면, 경고창 띄우기
  // 3. 완료가 되면 로컬 스토리지에 저장
  let [submitWng, setSubmitWng] = useState(false);
  let [writeReview, setWriteReview] = useState(true);
  let [submitModal, setSubmitModal] = useState(false);
  const [count, setCount] = useState(
    () => JSON.parse(window.localStorage.getItem("review")) || []
  );

  // 로그인이 되면
  let writerId;
  let profileImg;
  let login = false;
  if (login === true) {
  } else {
    profileImg = "profile.webp";
    writerId = "tester";
  }

  let submit = () => {
    if (txtVal.length < 20 || clicked === null) {
      if (txtVal.length < 20 && clicked !== null) {
        setTxtWng(true);
      } else if (txtVal.length > 20 && clicked === null) {
        setStarWng(true);
      } else if (txtVal.length < 20 && clicked === null) {
        setTxtWng(true);
        setStarWng(true);
      }
      setSubmitWng(true);
      setTimeout(() => {
        setSubmitWng(false);
      }, 2000);
    } else {
      let reviewData = {
        itemId: findId.id,
        profile: profileImg,
        wrieter: writerId,
        star: clicked,
        review: txtVal,
        today: todayTime(),
      };
      let copy = [...count];
      copy.push(reviewData);
      setCount(copy);

      setTimeout(() => {
        setWriteReview(false);
        setSubmitModal(true);
      }, 500);
    }
  };

  useEffect(() => {
    window.localStorage.setItem("review", JSON.stringify(count));
  }, [count]);

  // 로컬 스토리지
  // 저장해야할 항목 : 1. 프로필 이미지 2. 작성한 아이디 3. 별점 4. 작성 날짜 5. 리뷰 6. 아이템 아이디
  // 아이템 아이디가 동일한 곳에 리뷰를 넣어준다!
  // 프로필이 없는 경우, 기본 프로필을 사용
  // 로그인 하지않았을 경우, tester 작성자가 설정
  // 작성 날짜를 찾아서 넣는다.
  // 별점, 리뷰는 받아서 넣어준다!
  // { itemId: "", profile : "", writer : "", star : "", review : "" }

  return (
    <section className="write-reivew-modal">
      {writeReview === false ? null : (
        <div className="write-review-modal-inner">
          <div className="modal-header">
            리뷰쓰기
            <button onClick={colseModal} className="close-review-modal">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20px"
                viewBox="0 0 24.2 21.3"
              >
                <path
                  className="st0"
                  d="M18.5,17.5c-0.1,0-0.3,0-0.4-0.1L5.4,4.6c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0l12.7,12.7
	c0.2,0.2,0.2,0.5,0,0.7C18.7,17.5,18.6,17.5,18.5,17.5z"
                />
                <path
                  className="st0"
                  d="M5.8,17.5c-0.1,0-0.3,0-0.4-0.1c-0.2-0.2-0.2-0.5,0-0.7L18.1,3.9c0.2-0.2,0.5-0.2,0.7,0s0.2,0.5,0,0.7L6.1,17.4
	C6,17.5,5.9,17.5,5.8,17.5z"
                />
                <path
                  className="st0"
                  d="M378.7,348.1c-0.1,0-0.3,0-0.4-0.1l-12.7-12.7c-0.2-0.2-0.2-0.5,0-0.7s0.5-0.2,0.7,0l12.7,12.7
	c0.2,0.2,0.2,0.5,0,0.7C378.9,348.1,378.8,348.1,378.7,348.1z"
                />
                <path
                  className="st0"
                  d="M365.9,348.1c-0.1,0-0.3,0-0.4-0.1c-0.2-0.2-0.2-0.5,0-0.7l12.7-12.7c0.2-0.2,0.5-0.2,0.7,0s0.2,0.5,0,0.7
	L366.3,348C366.2,348.1,366.1,348.1,365.9,348.1z"
                />
              </svg>
            </button>
          </div>
          <div className="review-modal-write">
            <div className="review-modal-product-content">
              <img
                src={`/img/item/thumb/${findId.thumb}`}
                alt={findId.title}
                // width="100%"
              />
              <div className="product-content-txt">
                <p>{findId.title}</p>
                <span>{findId.fullTit}</span>
              </div>
            </div>
            <div className="review-modal-section">
              <p className={`title ${starWng === true ? "warning" : null}`}>
                별점 평가
              </p>
              <span className="checking-score ">
                {[1, 2, 3, 4, 5].map((a) => {
                  return (
                    <svg
                      version="1.1"
                      viewBox="0 0 32 32"
                      className={`star ${
                        (clicked >= a) | (hovered >= a) && "fullStar"
                      }`}
                      key={a}
                      onMouseEnter={() => setHovered(a)}
                      onMouseLeave={() => {
                        setHovered(null);
                      }}
                      onClick={() => {
                        setClicked(a);
                        setStarWng(false);
                      }}
                    >
                      <path d="M29.895,12.52c-0.235-0.704-0.829-1.209-1.549-1.319l-7.309-1.095l-3.29-6.984C17.42,2.43,16.751,2,16,2  s-1.42,0.43-1.747,1.122l-3.242,6.959l-7.357,1.12c-0.72,0.11-1.313,0.615-1.549,1.319c-0.241,0.723-0.063,1.507,0.465,2.046  l5.321,5.446l-1.257,7.676c-0.125,0.767,0.185,1.518,0.811,1.959c0.602,0.427,1.376,0.469,2.02,0.114l6.489-3.624l6.581,3.624  c0.646,0.355,1.418,0.311,2.02-0.114c0.626-0.441,0.937-1.192,0.811-1.959l-1.259-7.686l5.323-5.436  C29.958,14.027,30.136,13.243,29.895,12.52z" />
                    </svg>
                  );
                })}
              </span>
            </div>
            <div
              className={`review-modal-section ${
                txtWng === true ? "warning" : null
              }`}
            >
              <p className="title">리뷰 작성</p>
              <textarea
                placeholder="자세하고 솔직한 리뷰는 다른 고객에게 큰 도움이 됩니다.(최소 20자 이상)"
                className="review-write-form"
                onChange={writeTxt}
                onBlur={txtBlur}
              ></textarea>
              <div className="review-modal-form-check">
                <span className="chechk-num">{txtVal.length}</span>
              </div>
            </div>
            <button className="submit-btn" type="submit" onClick={submit}>
              완료
            </button>
          </div>

          <div
            className={`submitWng ${submitWng === true ? "warningT" : null}`}
          >
            필수 정보를 모두 입력해주세요.
          </div>
        </div>
      )}

      {submitModal === true ? (
        <div className="review-completion">
          <h2>리뷰 작성 감사합니다 &#128525;</h2>
          <p>
            로컬스토리지에 저장되어
            <br /> 해당 상품 리뷰에서 작성하신 리뷰를 볼 수 있습니다!
          </p>
          <button onClick={colseModal}>확인</button>
        </div>
      ) : null}
    </section>
  );
}

export default Review;
