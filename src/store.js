import { configureStore, createSlice } from "@reduxjs/toolkit";

let cartData = createSlice({
  name: "cart",
  initialState: [
    {
      id: 14,
      title: "제주 유채&꿀 티",
      desc: "제주의 화사하고 향긋한 유채와 달달한 꿀을 블렌딩하여 따스한 블렌디드 티입니다. 제주 차밭의 맛과 향을 가벼운 가격으로 즐겨보세요.",
      thumb: "tt15.png",
      price: 9500,
      sale: 10,
      maxQty: "",
      detailImg: "td15.jpeg",
      fullTit: "제주유채&꿀티 20입(티백)",
      type: "침출차",
      qty: "30g(1.5g x 20입)",
      content:
        "녹차(제주산), 설탕, 살구향혼합제제(주정, 프로필렌글리콜, 정제수, 합성향료, 트리아세틴, 초산, 천연향료), 유채꽃(제주산), 꿀분말(벌꿀(국산))",
      outPack: "종이",
      inPack: "폴리에틸렌",
      count: 2,
    },
  ],
  reducers: {
    valueNum(state, action) {
      let valueN = state.findIndex((a) => a.id === action.payload);
      let target = action.payload.e.target.value;
      state[valueN].count = target;
    },
    addCount(state, action) {
      let nums = state.findIndex((a) => a.id === action.payload);
      state[nums].count++;
    },
    minusCount(state, action) {
      let nums = state.findIndex((a) => a.id === action.payload);
      if (state[nums].count > 1) {
        state[nums].count--;
      } else {
        alert("1개 이하로는 안돼요!");
      }
    },
    deleteItem(state, action) {
      let copy = [...state];
      let index = state.findIndex((a) => a.id === action.payload);
      copy.splice(index, 1);
      return copy;
    },
    deleteChecked(state, action) {
      let copy = [...state];
      let index = state.findIndex((a) => a.id === action.payload);
      let parentElement = index.parentElement;
      copy.splice(parentElement, 1);
      return copy;
    },
    addItem(state, action) {
      let index = state.findIndex((a) => a.id === action.payload.id);
      if (index === -1) {
        state.push(action.payload);
      } else {
        let overlap = Number(action.payload.count);
        let existing = Number(state[index].count);
        state[index].count = overlap + existing;
      }
    },
  },
});

let login = createSlice({
  name: "login",
  initialState: [
    {
      id: "newnew",
      password: "new2209",
    },
  ],
});

export let {
  addCount,
  valueNum,
  minusCount,
  deleteItem,
  deleteChecked,
  addItem,
  findId,
} = cartData.actions;

export default configureStore({
  reducer: {
    cart: cartData.reducer,
    login: login.reducer,
  },
});
