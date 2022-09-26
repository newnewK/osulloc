import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./../css/Login.modules.scss";
export default function Login() {
  // common header, footer none

  // store
  let user = useSelector((state) => state.login);

  // navigate
  let navigate = useNavigate();

  // Id, password blur
  let [userId, setUserId] = useState("");
  let [idWng, setIdWng] = useState(false); //아이디 입력하지않고, 포커스를 해제했을 때
  let [notMatch, setNotMatch] = useState(false); // 아이디 매치가 실패했을 때
  let [resEmpty, setResEmpty] = useState(false);

  let blurId = () => {
    if (userId.length === 0) {
      setIdWng(true);
    } else {
      setIdWng(false);
    }
  };

  let [userPw, setUserPw] = useState("");
  let [pwWng, setPwWng] = useState(false);

  // login
  // 로그인 실패 : 1. 아이디가 없을 경우 2. 아이디의 비밀번호가 일치않을 경우 3. 아이디 또는 비밀번호가 비워져있을 경우 4. 아이디& 비밀번호가 비워져있을 경우
  // 로그인 성공 : 아이디와 비밀번호가 일치했을 경우 -> 메인으로 돌아감!
  // 1. map 을 사용하여 아이디가 존재하는지 본다.
  // 2. 해당 아이디의 비밀번호가 일치하는지 본다.
  // 3. 로그인 실패 또는 성공

  const [singIn, setSingIn] = useState(
    () => JSON.parse(window.localStorage.getItem("singIn")) || "false"
  );

  let login = () => {
    if (userId !== "") {
      //store의 아이디와 작성한 아이디가 맞는지 확인하기.
      for (let i = 0; i < user.length; i++) {
        if (user[i].id === userId) {
          if (userPw === "" || user[i].password !== userPw) {
            setPwWng(true);
          } else if (user[i].password === userPw) {
            setSingIn("true");

            setTimeout(() => {
              navigate("/");
              window.location.reload();
            }, 100);
          }
        } else {
          setResEmpty(true);
          setPwWng(true);
        }
      }
    } else {
      setResEmpty(true);
      setPwWng(true);
    }
  };

  let onKeyPress = (e) => {
    if (e.key == "Enter") {
      login();
    }
  };

  useEffect(() => {
    window.localStorage.setItem("singIn", JSON.stringify(singIn));
  }, [singIn]);

  return (
    <section className="login-wrap">
      <div className="login">
        <h2>Login Or Create An Account</h2>
        <form>
          <div
            className={`field ${idWng === true ? "wngField" : null} ${
              notMatch === true ? "notMatch" : null
            } ${resEmpty === true ? "resEmpty" : null}`}
          >
            <input
              placeholder="아이디"
              onBlur={blurId}
              onChange={(e) => setUserId(e.target.value)}
              value={userId}
            />
            <em>아이디 형식이 올바르지 않습니다.</em>
          </div>
          <div className={`field ${pwWng === true ? "wngField" : null}`}>
            <input
              placeholder="비밀번호"
              //   onBlur={blurPw}
              onChange={(e) => setUserPw(e.target.value)}
              value={userPw}
              type="password"
              onKeyPress={onKeyPress}
            />
            <em>
              등록되지 않은 아이디거나, 아이디 또는 비밀번호가 회원정보와
              일치하지 않습니다.
            </em>
          </div>

          <button type="button" className="btnLogin" onClick={login}>
            log in
          </button>
        </form>
        <div className="login-info">
          <p className="title">기본 테스트 정보 안내</p>
          <ul className="info-wrap">
            <li>newnew</li>
            <li>new2209</li>
          </ul>
          {/* <span>아이디 및 비밀번호가 </span> */}
        </div>
      </div>
    </section>
  );
}
