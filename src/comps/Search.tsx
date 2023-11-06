import Back from "./partials/Back";
import ForYouCard from "./partials/ForYouCard";
import SearchInfo from "./partials/SearchInfo";
import SearchControls from "./partials/searchControls";
import { searchProps } from "../types";
import { useState, useEffect } from "react";
import { useFetch } from "../utils/useFetch";

export default function Search(props: searchProps) {
  const [data, setData] = useState<any>([]);

  const fetch = async (query: string) => {
    const response = await useFetch(query);

    response.forEach((item: any) => {
      item["id"] = Math.round(Math.random() * 1000000);
    });
    setData(response);
  };

  useEffect(() => {
    fetch(props.search.searchValue);
  }, []);

  return (
    <>
      <Back setPage={props.setPage} />
      <SearchInfo />
      <div className="searchContent">
        {data?.map((item: any) => {
          return (
            <ForYouCard
              employer_logo={item.employer_logo}
              employer_name={item.employer_name}
              job_title={item.job_title}
              job_posted_at_timestamp={item.job_posted_at_timestamp}
              setPage={props.setPage}
              setSelectedJobId={props.setSelectedJobId}
              id={item.id}
            />
          );
        })}
      </div>
      <SearchControls />
    </>
  );
}
