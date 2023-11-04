import { contractProps } from "../../types";
import ForYouCard from "./ForYouCard";

export default function ContractsForYou(props: contractProps) {
  return (
    <div className="contractsForYou">
      <h4>Contracts For You</h4>
      <div className="contractContainer">
        {props.data?.map((item) => {
          return (
            <ForYouCard
              setSelectedJobId={props.setSelectedJobId}
              employer_name={item.employer_name}
              job_title={item.job_title}
              job_posted_at_timestamp={item.job_posted_at_timestamp}
              setPage={props.setPage}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}
