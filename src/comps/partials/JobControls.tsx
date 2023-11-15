import heart from "../../assets/heart.png";
import { singleJobType } from "../../types";

export default function JobControls(props: singleJobType) {
  return (
    <div className="controls">
      <div className="favourite">
        <img src={heart} alt="" />
      </div>
      <a target="_blank" href={props.job.apply_options[0].apply_link}>
        <p>Apply For Contract</p>
      </a>
    </div>
  );
}
