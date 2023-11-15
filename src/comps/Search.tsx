import Back from "./partials/Back";
import ForYouCard from "./partials/ForYouCard";
import SearchInfo from "./partials/SearchInfo";
import SearchControls from "./partials/searchControls";
import { searchProps } from "../types";
import { useEffect } from "react";
import { useFetch } from "../utils/useFetch";

export default function Search(props: searchProps) {
  const fetch = async (query: string, page: number) => {
    const response = await useFetch(query, page);

    response.forEach((item: any) => {
      item["id"] = Math.round(Math.random() * 1000000);
    });
    props.setData(response);
  };

  useEffect(() => {
    fetch(props.search.searchValue, 1);
  }, []);

  return (
    <>
      <Back setPage={props.setPage} />
      <SearchInfo query={props.search.searchValue} />
      <div className="searchContent">
        {props.data?.map((item: any) => {
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
      <SearchControls fetch={fetch} query={props.search.searchValue} />
    </>
  );
}
