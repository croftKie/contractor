import Home from "./comps/Home";
import Job from "./comps/Job";
import Search from "./comps/Search";
import "./css/App.css";
import { useState, useEffect } from "react";
import { useFetch } from "./utils/useFetch";
import { data } from "./utils/fakeData";

export default function App() {
  const [page, setPage] = useState<number>(0);
  const [selectedJobId, setSelectedJobId] = useState<number>(0);
  const [search, setSearch] = useState({ mode: "remote", searchValue: "" });

  // useFetch("javascript");

  // useEffect(() => {
  //   data.forEach((item: any) => {
  //     item["id"] = Math.round(Math.random() * 1000000);
  //   });
  // }, []);

  console.log(data);

  return page === 0 ? (
    <Home
      setSelectedJobId={setSelectedJobId}
      data={data}
      setSearch={setSearch}
      setPage={setPage}
      page={page}
    />
  ) : page === 1 ? (
    <Job
      job={data.find((item: any) => item.id === selectedJobId)}
      setPage={setPage}
      page={page}
    />
  ) : (
    <Search data={data} search={search} setPage={setPage} page={page} />
  );
}