import search from "../../assets/search.png";
import { homeProps } from "../../types";
import { useState, useRef } from "react";

export default function SearchHome(props: homeProps) {
  const [mode, setMode] = useState("remote");
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="searchHome">
      <div className="introText">
        <p>Hello, Kieran</p>
        <h4>Find the perfect contract</h4>
      </div>
      <div className="searchBar">
        <input
          ref={inputRef}
          type="text"
          placeholder="What are you looking for?"
        />
        <button
          onClick={() => {
            props.setSearch({
              mode: mode,
              searchValue: inputRef.current?.value,
            });
            props.setPage(2);
          }}
        >
          <img src={search} alt="" />
        </button>
      </div>
      <div className="options">
        <button
          onClick={() => {
            setMode("remote");
          }}
        >
          Remote
        </button>
        <button
          onClick={() => {
            setMode("office");
          }}
        >
          In-office
        </button>
        <button
          onClick={() => {
            setMode("hybrid");
          }}
        >
          Hybrid
        </button>
      </div>
    </div>
  );
}
