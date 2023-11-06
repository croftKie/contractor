import heart from "../../assets/heart.png";
import { jobCardProps } from "../../types";

export default function ForYouCard(props: jobCardProps) {
  const dateTime: number = props.job_posted_at_timestamp || 1000;

  return (
    <div
      onClick={() => {
        props.setPage(1);
        props.setSelectedJobId(props.id);
      }}
      className="card"
    >
      <div className="logo">
        {props.employer_logo ? (
          <img src={props.employer_logo} alt="" />
        ) : (
          <img src={heart} alt="" />
        )}
      </div>
      <div className="text">
        <p className="jobTitle">{props.job_title}</p>
        <p>{new Date(dateTime * 1000).toDateString()}</p>
      </div>
    </div>
  );
}
