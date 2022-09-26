# OULLOC 쇼핑몰 프로젝트 - newnew

## 프로젝트 설명

'오설록' 브랜드의 쇼핑몰 프로젝트입니다.
장바구니 기능, 로그인/로그아웃 기능, 검색 기능, 리뷰 작성 기능 구현했습니다.
오설록의 기존 디자인과 리뉴얼한 디자인을 추가하여 만든 반응형 홈페이지입니다.

## OULLOC 파일 정리

src 파일 내부 js 파일만 정리하였습니다.

```bash
├── common
│   ├── Footer.js
│   ├── Header.js
│   └── Search.js
├── data
│   ├── history.data.js
│   └── item.data.js
├── pages
│   ├── shop
│   │    ├── DetailImg.js
│   │    ├── ItemDetail.js
│   │    ├── ItemList.js
│   │    ├── ProductInfo.js
│   │    └── Review.js
│   ├──  Barnd.js
│   ├──  Cart.js
│   ├──  Dada.js
│   ├──  Login.js
│   ├──  Main.js
│   └──  SearchResult.js
├── utils
│   └── ScrollTop.js
│
└── store.js

```

## OULLOC 기능 설명

## 장바구니 기능, 로그인/로그아웃 기능, 검색 기능, 리뷰 작성 기능 등

---

### [ 로그인, 로그아웃 기능 ]

---

1. 로그인 실패
   - 아이디를 입력하지 않았을 경우
   - 비밀번호를 입력하지 않았을 경우
   - 아이디가 틀린 경우
   - 아이디는 일치하지만 비밀번호가 틀린 경우
2. 로그인 성공
   - 아이디, 비밀번호가 일치하는 경우
   - 로컬 스토리지 "signIn" 이 true로 변경되며 로그인을 저장
   - 메인 페이지로 이동하며, 상단 로그아웃 기능이 추가
3. 로그아웃
   - 로그인 후, 로그아웃 클릭시 로컬 스토리지 "signIn"이 false로 변경
   - 헤더 로그인 기능 추가

---

### [ 리뷰작성 기능 ]

---

1.
