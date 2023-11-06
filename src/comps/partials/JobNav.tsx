import { singleJobNavType } from "../../types";
import { useRef } from "react";

export default function JobNav(props: singleJobNavType) {
  const optionsRef = useRef<HTMLDivElement>(null);

  const changeActive = (e: any) => {
    const children = optionsRef.current?.children || [];
    for (let i = 0; i < children.length; i++) {
      children[i].classList.remove("active");
    }
    console.log(e.target);
    e.target.classList.add("active");
  };
  return (
    <div ref={optionsRef} className="jobNav">
      <button
        className="active"
        onClick={(e) => {
          props.setJobText(props.job.job_highlights.Responsibilities);
          changeActive(e);
        }}
      >
        Responsibilities
      </button>
      <button
        onClick={(e) => {
          props.setJobText(props.job.job_highlights.Qualifications);
          changeActive(e);
        }}
      >
        Qualifications
      </button>
      <button
        onClick={(e) => {
          props.setJobText(props.job.job_highlights.Benefits);
          changeActive(e);
        }}
      >
        Benefits
      </button>
    </div>
  );
}
