import RecentCard from "./RecentCard";
import { contractProps } from "../../types";

export default function RecentContracts(props: contractProps) {
  return (
    <div className="recentContracts">
      <h4>Recent Contracts</h4>
      <div className="contractContainer">
        {props.data?.map((item) => {
          return (
            <RecentCard
              setSelectedJobId={props.setSelectedJobId}
              employer_name={item.employer_name}
              employer_logo={item.employer_logo}
              job_title={item.job_title}
              job_location={item.job_country}
              setPage={props.setPage}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}
