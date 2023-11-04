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
        <img src={heart} alt="" />
      </div>
      <div className="text">
        <p>{props.job_title}</p>
        <p>{new Date(dateTime * 1000).toLocaleString()}</p>
      </div>
    </div>
  );
}
