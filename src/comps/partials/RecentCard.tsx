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
          <img src={heart} alt="" />
          <p>{props.employer_name}</p>
        </div>
        <div>
          <p>{props.job_title}</p>
          <p>{props.job_location}</p>
        </div>
      </div>
    </div>
  );
}
