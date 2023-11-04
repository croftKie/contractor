import Back from "./partials/Back";
import ForYouCard from "./partials/ForYouCard";
import SearchInfo from "./partials/SearchInfo";
import SearchControls from "./partials/searchControls";
import { searchProps } from "../types";

export default function Search(props: searchProps) {
  return (
    <>
      <Back setPage={props.setPage} />
      <SearchInfo />
      <div className="searchContent">
        {props.data?.map((item) => {
          return (
            <ForYouCard
              employer_name={item.employer_name}
              job_title={item.job_title}
              job_posted_at_timestamp={item.job_posted_at_timestamp}
              setPage={props.setPage}
            />
          );
        })}
      </div>
      <SearchControls />
    </>
  );
}
