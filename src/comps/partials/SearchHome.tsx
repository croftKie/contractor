import search from "../../assets/search.png";
import { homeProps } from "../../types";
import { useState, useRef } from "react";

export default function SearchHome(props: homeProps) {
  const [mode, setMode] = useState("remote");
  const inputRef = useRef<HTMLInputElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  const changeActive = (e: any) => {
    const children = optionsRef.current?.children || [];
    for (let i = 0; i < children.length; i++) {
      children[i].classList.remove("active");
    }
    console.log(e.target);
    e.target.classList.add("active");
  };

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
      <div ref={optionsRef} className="options">
        <button
          className="active"
          onClick={(e) => {
            setMode("remote");
            changeActive(e);
          }}
        >
          Remote
        </button>
        <button
          onClick={(e) => {
            setMode("office");
            changeActive(e);
          }}
        >
          In-office
        </button>
        <button
          onClick={(e) => {
            setMode("hybrid");
            changeActive(e);
          }}
        >
          Hybrid
        </button>
      </div>
    </div>
  );
}
