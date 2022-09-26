/* eslint-disable jsx-a11y/alt-text */
import { Link, useLocation, useNavigate } from "react-router-dom";
import mobileLogo from "./../img/mobile-logo.svg";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Header({ openSearch }) {
  let cartList = useSelector((state) => state.cart);

  // url 값에 맞는 class 적용
  let location = useLocation();
  let locationPath = location.pathname;
  let [headerClass, setHeaderClass] = useState(["white", "fixed"]);
  let detailId = locationPath.slice(16, 18);

  useEffect(() => {
    let params =
      locationPath === `/shop/itemDetail${detailId}` ||
      locationPath === "/cart" ||
      locationPath === "/login" ||
      locationPath === "/searchResult";

    if (params == true) {
      setHeaderClass("bgWhite fixed");
    } else {
      setHeaderClass("white fixed");
    }
  }, [location]);

  // scroll
  const [ScrollY, setScrollY] = useState(0);

  const handleFollow = () => {
    setScrollY(window.pageYOffset);

    let params =
      locationPath === `/shop/itemDetail${detailId}` ||
      locationPath === "/cart" ||
      locationPath === "/login" ||
      locationPath === "/searchResult";
    if (params !== true) {
      if (ScrollY > 100) {
        setHeaderClass("bgWhite fixed");
      } else {
        setHeaderClass("white fixed");
      }
    }
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });

  // modal state
  let [modal, setModal] = useState(false);

  // hidden menu onClick
  let openModal = () => {
    setModal(true);
  };

  // modal close onClick
  let closeModal = () => {
    setModal(false);
  };

  //로그인이 됐을 경우
  let loginCheck = JSON.parse(localStorage.getItem("singIn"));
  let [singIn, setSignIn] = useState(loginCheck);
  let [pbModal, setPbModal] = useState(false);
  let [spyOpen, setSpyOpen] = useState(true);
  let openM = () => {
    if (spyOpen === true) {
      setPbModal(true);
      setSpyOpen(false);
    } else {
      setPbModal(false);
      setSpyOpen(true);
    }
  };
  let logOut = () => {
    setSignIn(false);
    closeModal();
  };

  // 모바일 버전일 경우, 검색창
  let navigate = useNavigate();

  const [searchItem, setSearchItem] = useState(() =>
    JSON.parse(window.localStorage.getItem("search"))
  );

  let [searchval, setSearchval] = useState("");
  let searchTxt = () => {
    let text = searchval;
    setSearchItem(`${text}`);
    navigate("/searchResult");
    window.location.reload();
  };

  let onKeyPress = (e) => {
    if (e.key == "Enter") {
      searchTxt();
    }
  };

  useEffect(() => {
    window.localStorage.setItem("search", JSON.stringify(searchItem));
  }, [searchItem]);

  return (
    <>
      {modal === true ? (
        <section className={"mobile-nav" + (modal === true ? " openMn" : "")}>
          <div className="close-modal" onClick={closeModal}></div>
          <aside className="main-menu">
            <button onClick={closeModal} className="closeMenu close-wrap">
              <div className="line line1"></div>
              <div className="line line2"></div>
            </button>
            <nav className="main-nav">
              <ul>
                <li>
                  <Link to="/shop/ItemList" onClick={closeModal}>
                    shop
                  </Link>
                </li>
                <li>
                  <Link to="/brand" onClick={closeModal}>
                    brand
                  </Link>
                </li>
                <li>
                  <Link to="/dada" onClick={closeModal}>
                    dada
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={closeModal}>
                    noice
                  </Link>
                </li>
                <li>
                  <Link to="/cart" onClick={closeModal}>
                    cart&#40;{cartList.length}&#41;
                  </Link>
                </li>
                {singIn === true ? (
                  <li>
                    <button onClick={logOut}>logout</button>
                  </li>
                ) : (
                  <li>
                    <Link to="/login" onClick={closeModal}>
                      login
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
            <div className="search-wrap">
              <input
                type="keyword"
                value={searchval}
                onChange={(e) => {
                  setSearchval(e.target.value);
                }}
                onKeyPress={onKeyPress}
              ></input>
              <button type="button" onClick={searchTxt}>
                <i className="icon search"></i>
              </button>
            </div>
            <p className="copyright">&copy;osulloc</p>
          </aside>
        </section>
      ) : (
        <div className="mobile-nav"></div>
      )}
      <header className={"header " + headerClass}>
        <button type="button" onClick={openModal} className="hiddenMenu">
          <svg className="icon" version="1.1" viewBox="0 0 24.2 21.3">
            <g>
              <path
                className="st0"
                d="M21.1,4.5h-18C2.8,4.5,2.6,4.2,2.6,4s0.2-0.5,0.5-0.5h18c0.3,0,0.5,0.2,0.5,0.5S21.4,4.5,21.1,4.5z"
              />
              <path
                className="st0"
                d="M18.1,11.2h-15c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h15c0.3,0,0.5,0.2,0.5,0.5S18.4,11.2,18.1,11.2z"
              />
              <path
                className="st0"
                d="M21.1,17.8h-18c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h18c0.3,0,0.5,0.2,0.5,0.5S21.4,17.8,21.1,17.8z"
              />
            </g>
          </svg>
        </button>
        <div className="header-left">
          <h1 className="logo">
            <Link to="/">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 64 21.3"
              >
                <g>
                  <path
                    d="M4.1,10.6c0-0.6,0.1-1.2,0.3-1.7C4.6,8.4,4.9,8,5.3,7.6C5.7,7.3,6.1,7,6.7,6.8c0.5-0.2,1.1-0.3,1.7-0.3S9.5,6.6,10,6.8
		c0.5,0.2,1,0.5,1.3,0.8C11.7,8,12,8.4,12.2,8.9c0.2,0.5,0.3,1.1,0.3,1.7c0,0.6-0.1,1.2-0.3,1.7c-0.2,0.5-0.5,1-0.9,1.3
		C11,14,10.5,14.3,10,14.5c-0.5,0.2-1.1,0.3-1.7,0.3s-1.2-0.1-1.7-0.3c-0.5-0.2-1-0.5-1.3-0.8c-0.4-0.4-0.7-0.8-0.9-1.3
		C4.2,11.8,4.1,11.3,4.1,10.6z M5.7,10.6c0,0.5,0.1,0.8,0.2,1.2c0.1,0.4,0.3,0.7,0.6,0.9C6.7,13,7,13.2,7.3,13.3
		c0.3,0.1,0.7,0.2,1,0.2s0.7-0.1,1-0.2c0.3-0.1,0.6-0.3,0.8-0.6c0.2-0.2,0.4-0.5,0.6-0.9c0.1-0.3,0.2-0.7,0.2-1.2
		c0-0.4-0.1-0.8-0.2-1.2c-0.1-0.3-0.3-0.6-0.6-0.9C10,8.3,9.7,8.1,9.4,8C9,7.9,8.7,7.8,8.3,7.8C8,7.8,7.6,7.9,7.3,8
		C7,8.1,6.7,8.3,6.5,8.6C6.2,8.8,6,9.1,5.9,9.5C5.8,9.8,5.7,10.2,5.7,10.6z"
                  />
                  <path
                    d="M14.2,12.5c0.2,0.2,0.4,0.3,0.6,0.4c0.2,0.1,0.4,0.2,0.7,0.3c0.2,0.1,0.5,0.1,0.7,0.2c0.2,0,0.5,0.1,0.8,0.1
		c0.4,0,0.7-0.1,1-0.2c0.2-0.1,0.4-0.4,0.4-0.7c0-0.4-0.1-0.6-0.4-0.8c-0.3-0.2-0.6-0.3-1.1-0.4c-0.5-0.1-0.9-0.2-1.3-0.4
		c-0.4-0.1-0.7-0.3-1-0.5c-0.3-0.2-0.5-0.4-0.6-0.7c-0.1-0.3-0.2-0.6-0.2-0.9c0-0.4,0.1-0.7,0.2-1c0.2-0.3,0.4-0.5,0.6-0.7
		c0.3-0.2,0.6-0.3,0.9-0.4c0.3-0.1,0.7-0.1,1.1-0.1c0.5,0,1,0.1,1.5,0.2c0.5,0.2,1,0.4,1.4,0.7l-0.6,1.2c-0.3-0.2-0.7-0.4-1.1-0.6
		c-0.4-0.1-0.8-0.2-1.2-0.2c-0.2,0-0.3,0-0.5,0c-0.2,0-0.3,0.1-0.5,0.1c-0.1,0.1-0.3,0.2-0.3,0.3c-0.1,0.1-0.1,0.3-0.1,0.4
		c0,0.1,0,0.3,0.1,0.4c0,0.1,0.1,0.2,0.2,0.3c0.1,0.1,0.3,0.2,0.5,0.3c0.2,0.1,0.4,0.2,0.8,0.2c0.5,0.2,1,0.3,1.4,0.5
		c0.4,0.2,0.7,0.3,0.9,0.5c0.2,0.2,0.4,0.4,0.5,0.7c0.1,0.3,0.2,0.6,0.2,0.9c0,0.4-0.1,0.7-0.2,1c-0.2,0.3-0.4,0.5-0.6,0.7
		c-0.3,0.2-0.6,0.3-1,0.4c-0.4,0.1-0.8,0.1-1.2,0.1c-0.6,0-1.2-0.1-1.7-0.3c-0.6-0.2-1.1-0.5-1.5-0.8L14.2,12.5z"
                  />
                  <path
                    d="M24.6,14.8c-0.5,0-0.9-0.1-1.3-0.2c-0.4-0.2-0.8-0.4-1.1-0.6c-0.3-0.3-0.5-0.6-0.7-1c-0.2-0.4-0.3-0.8-0.3-1.3V6.7h1.6v4.8
		c0,0.3,0,0.5,0.1,0.8c0.1,0.2,0.2,0.5,0.3,0.6c0.1,0.2,0.3,0.3,0.6,0.4c0.2,0.1,0.5,0.2,0.8,0.2c0.3,0,0.6,0,0.8-0.2
		c0.2-0.1,0.4-0.2,0.6-0.4c0.1-0.2,0.3-0.4,0.4-0.6c0.1-0.2,0.1-0.5,0.1-0.8V6.7H28v4.9c0,0.5-0.1,0.9-0.3,1.3
		c-0.2,0.4-0.4,0.7-0.7,1c-0.3,0.3-0.7,0.5-1.1,0.6C25.5,14.7,25.1,14.8,24.6,14.8z"
                  />
                  <path d="M29.5,6.7h1.6v6.6h4.2v1.2h-5.8V6.7z" />
                  <path d="M36.3,6.7h1.6v6.6h4.2v1.2h-5.8V6.7z" />
                  <path
                    d="M42.6,10.6c0-0.6,0.1-1.2,0.3-1.7c0.2-0.5,0.5-0.9,0.9-1.3c0.4-0.4,0.8-0.6,1.3-0.8c0.5-0.2,1.1-0.3,1.7-0.3
		s1.2,0.1,1.7,0.3c0.5,0.2,1,0.5,1.3,0.8c0.4,0.4,0.7,0.8,0.9,1.3c0.2,0.5,0.3,1.1,0.3,1.7c0,0.6-0.1,1.2-0.3,1.7
		c-0.2,0.5-0.5,1-0.9,1.3c-0.4,0.4-0.8,0.6-1.3,0.8c-0.5,0.2-1.1,0.3-1.7,0.3s-1.2-0.1-1.7-0.3c-0.5-0.2-1-0.5-1.3-0.8
		s-0.7-0.8-0.9-1.3C42.7,11.8,42.6,11.3,42.6,10.6z M44.2,10.6c0,0.5,0.1,0.8,0.2,1.2c0.1,0.4,0.3,0.7,0.6,0.9
		c0.2,0.3,0.5,0.4,0.8,0.6c0.3,0.1,0.7,0.2,1,0.2s0.7-0.1,1-0.2c0.3-0.1,0.6-0.3,0.8-0.6c0.2-0.2,0.4-0.5,0.6-0.9
		c0.1-0.3,0.2-0.7,0.2-1.2c0-0.4-0.1-0.8-0.2-1.2c-0.1-0.3-0.3-0.6-0.6-0.9c-0.2-0.2-0.5-0.4-0.8-0.6c-0.3-0.1-0.7-0.2-1-0.2
		c-0.4,0-0.7,0.1-1,0.2c-0.3,0.1-0.6,0.3-0.8,0.6c-0.2,0.3-0.4,0.6-0.6,0.9C44.3,9.8,44.2,10.2,44.2,10.6z"
                  />
                  <path
                    d="M52.1,10.7c0-0.6,0.1-1.1,0.3-1.6c0.2-0.5,0.5-0.9,0.8-1.3C53.6,7.3,54,7,54.6,6.8c0.5-0.2,1.1-0.3,1.7-0.3
		c1.5,0,2.7,0.7,3.6,1.9l-1,0.8c-0.3-0.5-0.6-0.8-1.1-1.1c-0.5-0.3-1-0.4-1.5-0.4c-0.4,0-0.7,0.1-1,0.2c-0.3,0.2-0.6,0.4-0.8,0.6
		c-0.2,0.3-0.4,0.6-0.5,0.9c-0.1,0.4-0.2,0.7-0.2,1.1c0,0.4,0.1,0.8,0.2,1.1c0.1,0.4,0.3,0.7,0.6,0.9c0.2,0.3,0.5,0.5,0.9,0.6
		c0.3,0.1,0.7,0.2,1.1,0.2c0.3,0,0.5,0,0.7-0.1c0.2-0.1,0.4-0.2,0.7-0.3c0.2-0.1,0.4-0.3,0.6-0.5c0.2-0.2,0.3-0.4,0.5-0.6l1,0.8
		c-0.4,0.6-1,1.1-1.5,1.4c-0.6,0.3-1.3,0.5-2.1,0.5c-0.6,0-1.1-0.1-1.6-0.3c-0.5-0.2-0.9-0.5-1.3-0.8c-0.4-0.4-0.7-0.8-0.9-1.3
		C52.2,11.9,52.1,11.3,52.1,10.7z"
                  />
                </g>
              </svg>
            </Link>
          </h1>

          <nav className="nav">
            <ul>
              <li>
                <Link to="/shop/ItemList">shop</Link>
              </li>
              <li>
                <Link to="/brand">brand</Link>
              </li>
              <li>
                <Link to="/dada">dada</Link>
              </li>
              <li>
                <Link to="/">notice</Link>
              </li>
            </ul>
          </nav>
        </div>

        <ul className="header-right">
          <li>
            <button onClick={() => openSearch()}>search</button>
          </li>
          <li>
            <Link to="/cart">cart&#40;{cartList.length}&#41;</Link>
          </li>
          {singIn === "true" ? (
            <li>
              <button type="button" onClick={logOut}>
                logout
              </button>
            </li>
          ) : (
            <li>
              <Link to="/login">login</Link>
            </li>
          )}
        </ul>

        <ul className="mobile-header">
          <li>
            <Link to="/cart" onClick={closeModal}>
              cart&#40;{cartList.length}&#41;
            </Link>
          </li>
          {singIn === "true" ? null : (
            <li>
              <Link to="/">
                <svg
                  className="icon"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 24.2 21.3"
                >
                  <g>
                    <path
                      className="st0"
                      d="M11.6,11.1c-2.7,0-4.9-2.2-4.9-4.9S9,1.3,11.6,1.3c2.7,0,4.9,2.2,4.9,4.9S14.3,11.1,11.6,11.1z M11.6,2.3
		c-2.1,0-3.9,1.7-3.9,3.9s1.7,3.9,3.9,3.9s3.9-1.7,3.9-3.9S13.8,2.3,11.6,2.3z"
                    />
                    <g>
                      <path
                        className="st0"
                        d="M17.2,20h-0.5v-1.6l0-0.8h0l-0.4,0.8l-0.5,0.9h-0.4l-0.5-0.9l-0.4-0.8h0l0,0.8V20h-0.5v-3.4h0.5l1.1,2l1.1-2
			h0.5V20z"
                      />
                      <path
                        className="st0"
                        d="M18.8,18.8l-1.3-2.2h0.6l0.9,1.6l0.9-1.6h0.6l-1.3,2.2V20h-0.5V18.8z"
                      />
                    </g>
                    <path
                      className="st0"
                      d="M4.1,19.5c-0.2,0-0.4-0.2-0.4-0.4c0-0.1-0.3-3.2,1.8-4.7c1.6-1.2,3.5-1.7,6.3-1.6c2.5,0,4.4,0.4,6,1.2
		c0.2,0.1,0.3,0.4,0.2,0.6c-0.1,0.2-0.4,0.3-0.6,0.2c-1.5-0.7-3.2-1.1-5.6-1.1c-2.7,0-4.3,0.4-5.8,1.5c-1.7,1.2-1.5,3.9-1.5,4
		C4.5,19.3,4.3,19.5,4.1,19.5C4.1,19.5,4.1,19.5,4.1,19.5z"
                    />
                  </g>
                </svg>
              </Link>
            </li>
          )}
        </ul>
      </header>
    </>
  );
}
