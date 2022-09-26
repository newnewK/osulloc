// /* eslint-disable jsx-a11y/alt-text */
// import { Link } from "react-router-dom";
// import logo from "./../logo.svg";
// import mobileLogo from "./../img/mobile-logo.svg";
// import { useState } from "react";
// import "./../css/Header.modules.scss";

// function Header() {
//   // modal state
//   let [modal, setModal] = useState(false);

//   // hidden menu onClick
//   let openModal = () => {
//     setModal(true);
//   };

//   // modal close onClick
//   let closeModal = () => {
//     setModal(false);
//   };

//   return (
//     <>
//       {modal === true ? (
//         <div className={"mobile-nav" + (modal === true ? " openMn" : "")}>
//           <div className="mn-top">
//             <img src={mobileLogo}></img>
//             <button onClick={closeModal}>
//               <i className="icon close"></i>
//             </button>
//           </div>
//           <div className="mn-bottom">
//             <ul className="mn-list">
//               <li>
//                 <Link to="/shop/ItemList">제품</Link>
//               </li>
//               <li>
//                 <Link to="/">선물추천</Link>
//               </li>
//               <li>
//                 <Link to="/">다다일상</Link>
//               </li>
//               <li>
//                 <Link to="/">브랜드</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       ) : (
//         <div className="mobile-nav"></div>
//       )}
//       <header className="header">
//         <ul className="mobile-header">
//           <li className="nav-btn" onClick={openModal}>
//             <i className="icon nav-bar"></i>
//           </li>
//           <li>
//             <i className="icon search"></i>
//           </li>
//         </ul>
//         <div className="header-left">
//           <h1 className="logo">
//             <Link to="/">
//               <img src={logo}></img>
//             </Link>
//           </h1>

//           <nav className="nav">
//             <ul>
//               <li>
//                 <Link to="/shop/ItemList">제품</Link>
//               </li>
//               <li>
//                 <Link to="/">선물추천</Link>
//               </li>
//               <li>
//                 <Link to="/">다다일상</Link>
//               </li>
//               <li>
//                 <Link to="/">브랜드</Link>
//               </li>
//             </ul>
//           </nav>
//         </div>

//         <ul className="header-right">
//           <li>
//             <i className="icon search"></i>
//           </li>
//           <li>
//             <Link to="/">
//               <i className="icon basket"></i>
//             </Link>
//           </li>
//           <li>
//             <Link to="/">로그인</Link>
//           </li>
//           <li>
//             <Link to="/">회원가입</Link>
//           </li>
//         </ul>

//         <ul className="mobile-header">
//           <li>
//             <Link to="/">
//               <i className="icon basket"></i>
//             </Link>
//           </li>
//           <li>
//             <Link to="/">
//               <i className="icon mypage"></i>
//             </Link>
//           </li>
//         </ul>
//       </header>
//     </>
//   );
// }

// export default Header;
