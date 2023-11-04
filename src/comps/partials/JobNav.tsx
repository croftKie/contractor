import { singleJobNavType } from "../../types";

export default function JobNav(props: singleJobNavType) {
  return (
    <div className="jobNav">
      <button
        onClick={() => {
          props.setJobText(props.job.job_highlights.Responsibilities);
        }}
      >
        Responsibilities
      </button>
      <button
        onClick={() => {
          props.setJobText(props.job.job_highlights.Qualifications);
        }}
      >
        Qualifications
      </button>
      <button
        onClick={() => {
          props.setJobText(props.job.job_highlights.Benefits);
        }}
      >
        Benefits
      </button>
    </div>
  );
}
