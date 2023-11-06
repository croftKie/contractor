import heart from "../../assets/heart.png";
import { jobCardProps } from "../../types";

export default function RecentCard(props: jobCardProps) {
  return (
    <div
      onClick={() => {
        props.setPage(1);
        props.setSelectedJobId(props.id);
      }}
      className="card"
    >
      <div className="content">
        <div>
          {props.employer_logo ? (
            <img src={props.employer_logo} alt="" />
          ) : (
            <img src={heart} alt="" />
          )}
          <p>{props.employer_name}</p>
        </div>
        <div>
          <p className="jobTitle">{props.job_title}</p>
          <p>{props.job_location}</p>
        </div>
      </div>
    </div>
  );
}
