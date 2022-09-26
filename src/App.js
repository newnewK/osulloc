import "./App.scss";
import Header from "./common/Header";
import Footer from "./common/Footer";
import { Routes, Route, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
// import * as React from "react";
import { Reset } from "styled-reset";
import Main from "./pages/Main";
import ItemList from "./pages/shop/ItemList";
import ItemDetail from "./pages/shop/ItemDetail";
import Brand from "./pages/Brand";
import Cart from "././pages/Cart";
import Dada from "././pages/Dada";
import itemData from "./data/item.data";
import Login from "./pages/Login";
import Search from "./common/Search";
import SearchResult from "./pages/SearchResult";

//test
import Sample from "./test";

function App() {
  let [item, setItem] = useState(itemData);
  let [search, setSearch] = useState(false);
  let openSearch = () => {
    setSearch(true);
  };
  let closeSearch = () => {
    setSearch(false);
  };

  return (
    <div className="App">
      {search === true ? <Search closeSearch={closeSearch} /> : null}
      <Reset />
      <Header item={item} search={search} openSearch={openSearch} />

      <Routes>
        <Route path="/" element={<Main item={item} />} />
        <Route path="/shop/itemList" element={<ItemList item={item} />} />
        <Route
          path="/shop/itemDetail/:id"
          element={<ItemDetail item={item} />}
        />
        <Route path="/brand" element={<Brand />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dada" element={<Dada />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Sample />} />
        <Route path="/searchResult" element={<SearchResult item={item} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
