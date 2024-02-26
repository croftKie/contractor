import search from "../../assets/search.png";
import styled from "styled-components";
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
    <SearchHomeContainer>
      <IntroText>
        <p>Hello, Kieran</p>
        <h4>Find the perfect contract</h4>
      </IntroText>
      <SearchBar>
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
      </SearchBar>
      <Options ref={optionsRef}>
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
      </Options>
    </SearchHomeContainer>
  );
}

const SearchHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const IntroText = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    color: ${(props) => props.theme.colors.baseRed};
    font-size: 1.4rem;
  }
`;

const SearchBar = styled.div`
  display: flex;
  width: 100%;
  gap: 5%;

  input {
    flex: 9;
    height: 30px;
    background-color: rgba(211, 211, 211, 0.317);
    border: none;
    border-radius: 10px;
    padding-left: 3%;
  }

  button {
    flex: 1;
    background-color: ${(props) => props.theme.colors.baseRed}${(props) => props.theme.colors.baseRed};
    border-radius: 10px;
    border: none;
    outline: none;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 15px;
      filter: invert(100%);
    }
  }
`;

const Options = styled.div`
  display: flex;
  gap: 10px;

  button {
    background: none;
    border: 2px solid rgba(128, 128, 128, 0.317);
    border-radius: 25px;
    height: 30px;
    width: 70px;
    cursor: pointer;

    &.active {
      background-color: ${(props) => props.theme.colors.baseRed};
      border: none;
      color: white;
    }
  }
`;
