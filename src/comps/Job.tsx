import JobAbout from "./partials/JobAbout";
import Back from "./partials/Back";
import JobControls from "./partials/JobControls";
import JobNav from "./partials/JobNav";
import JobInfoSection from "./partials/JobInfoSection";
import { jobProps } from "../types";
import { useState } from "react";

export default function Job(props: jobProps) {
  const [jobText, setJobText] = useState<string[]>(
    props.job.job_highlights.Responsibilities
  );
  return (
    <>
      <Back setPage={props.setPage} />
      <JobInfoSection job={props.job} />
      <JobNav job={props.job} setJobText={setJobText} />
      <JobAbout job_text={jobText} />
      <JobControls job={props.job} />
    </>
  );
}
