/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
import logo from "./../img/footer-logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="ft-left">
          <input type="checkbox" id="treatmentPolicy" />
          <label htmlFor="treatmentPolicy">
            개인&#183;영상정보 처리방침 <i className="icon arrow"></i>
            <ul className="tpInfo footer-info">
              <li>
                <Link to="/">
                  개인정보 처리방침 <i className="icon link"></i>
                </Link>
              </li>
              <li>
                <Link to="/">
                  영상정보 처리방침 <i className="icon link"></i>
                </Link>
              </li>
            </ul>
          </label>

          <input type="checkbox" id="moreF" />
          <label htmlFor="moreF">
            더보기 <i className="icon arrow"></i>
            <ul className="mfInfo footer-info">
              <li>
                <Link to="/">회사소개</Link>
              </li>
              <li>
                <Link to="/">뷰티포인트</Link>
              </li>
              <li>
                <Link to="/">임직원 할인</Link>
              </li>
            </ul>
          </label>
        </div>
        <div className="ft-right">
          <ul className="footer-menu">
            <li>
              <Link to="/">
                사이트맵 <i className="icon link"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                공지사항 <i className="icon link"></i>
              </Link>
            </li>
            <li>
              <Link to="/">
                전자공고 <i className="icon link"></i>
              </Link>
            </li>
            <li>
              <input type="checkbox" id="sns" />
              <label htmlFor="sns">
                SNS <i className="icon arrow"></i>
                <ul className="snsInfo footer-info">
                  <li>
                    <Link to="/">
                      페이스북 <i className="icon link"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      인스타그램 <i className="icon link"></i>
                    </Link>
                  </li>
                </ul>
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <img src={logo} className="foot-logo" />
        <div className="cs-enter">
          <div className="cs call">
            고객상담센터 &#183; 주문/배송문의
            <b>080-805-5555</b>
            <em>평일 09:30 - 17:00 (점심 11:30 - 13:00)</em>
          </div>
          <div className="cs inquiry">
            특판, 대량구매 문의
            <ul>
              <li>
                이메일 &#58;
                <a href="mailto : help@osulloc.com">help@osulloc.com</a>
              </li>
              <li>
                카카오톡 &#58;<span>osullocmall</span>{" "}
              </li>
            </ul>
            <em>평일 09:30 - 17:00 (점심 11:30 - 13:00)</em>
          </div>
          <p>
            본 사이트는 포트폴리오 저작물이므로 사용된 이미지는 무료 이미지 및
            오설록 업체의 이미지를 편집하여 사용하였으므로 저작권은 해당 기업 및
            이미지 저적자에게 있음을 알려드립니다.
            <br />
            문제의 소지가 있으면 newnew31@naver.com로 연락주시기 바랍니다.
          </p>
        </div>
        <div className="company-info">
          <ul>
            <li>㈜ 오설록</li>
            <li>대표이사 서혁제 </li>
            <li>사업자등록번호 390-87-01499 </li>
            <li>주소 서울특별시 용산구 한강대로 100, 14층(한강로2가)</li>
            <li>통신판매업신고번호 2019-서울용산-1173호</li>
          </ul>
          <address>&#169; osulloc</address>
        </div>
      </div>
    </footer>
  );
}
