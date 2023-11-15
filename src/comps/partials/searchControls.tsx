import { useState } from "react";
import back from "../../assets/back.png";

export default function SearchControls({
  fetch,
  query,
}: {
  fetch: any;
  query: string;
}) {
  const [page, setPage] = useState(1);
  return (
    <div className="searchControls">
      <button
        onClick={() => {
          setPage(page - 1);
          fetch(query, page);
        }}
      >
        <img src={back} alt="" />
      </button>
      <div className="page">
        <p>{page}</p>
      </div>
      <button
        onClick={() => {
          setPage(page + 1);
          fetch(query, 2);
        }}
      >
        <img className="next" src={back} alt="" />
      </button>
    </div>
  );
}
