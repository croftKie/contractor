import heart from "../../assets/heart.png";
import { singleJobType } from "../../types";

export default function JobInfoSection(props: singleJobType) {
  return (
    <div className="infoSection">
      <img src={heart} alt="" />
      <h3>{props.job.job_title}</h3>
      <p>
        {props.job.employer_name} / {props.job.job_country}
      </p>
    </div>
  );
}
