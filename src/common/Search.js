import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../css/SearchResult.modules.scss";

export default function Search({ closeSearch }) {
  // navigate
  let navigate = useNavigate();

  const [searchItem, setSearchItem] = useState(
    () => JSON.parse(window.localStorage.getItem("search")) || ""
  );

  let [searchval, setSearchval] = useState("");
  let searchTxt = () => {
    let text = searchval;
    setSearchItem(`${text}`);
    navigate("/searchResult");
  };

  useEffect(() => {
    window.localStorage.setItem("search", JSON.stringify(searchItem));
  }, [searchItem]);

  return (
    <section className="search-modal">
      <div className="search-header">
        <button
          className="closeSearch close-wrap"
          onClick={() => {
            closeSearch();
          }}
        >
          <div className="line line1"></div>
          <div className="line line2"></div>
        </button>
      </div>
      <div className="search-bar">
        <form>
          <input
            type="keyword"
            placeholder="Start Searching"
            onChange={(e) => {
              setSearchval(e.target.value);
            }}
            onKeyPress={searchTxt}
            value={searchval}
          ></input>
        </form>
        <em className="search-guide">
          검색어를 입력하시고 엔터를 누르세요.
          <br />
          "제주" 또는 "세작"으로 검색 해보세요! &#128072;
        </em>
      </div>
    </section>
  );
}
