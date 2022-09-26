import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

export default function Sample({ nonHF }) {
  useEffect(() => {
    nonHF();
  }, []);

  let [id, setId] = useState("");
  let [pw, setPw] = useState("");
  const [button, setButton] = useState(true);
  // const goToMain = () => {
  //   navigate('/');
  // };

  const realId = "kiki@naver.com";
  const realPw = "12345678";

  function changeButton() {
    id.includes("@") && pw.length >= 5 ? setButton(false) : setButton(true);
  }
  return (
    <>
      <input
        placeholder="전화번호 사용자 이름 또는 이메일"
        id="id"
        className="login"
        onChange={(e) => {
          setId(e.target.value);
        }}
        onKeyUp={changeButton}
      />
      <input
        type="password"
        placeholder="비밀번호"
        id="password"
        className="login"
        onChange={(e) => {
          setPw(e.target.value);
        }}
        onKeyUp={changeButton}
      />
      <button
        type="button"
        className="loginButton"
        disabled={button}
        onClick={(e) => {
          if (realId == id) {
            if (realPw == pw) {
              e.stopPropagation();
              alert("성공");
            }
          } else {
            alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
          }
        }}
      >
        로그인
      </button>
    </>
  );
}

// 테스트 해야하는 법
