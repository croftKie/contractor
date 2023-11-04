import { singleJobAbout } from "../../types";

export default function JobAbout(props: singleJobAbout) {
  return (
    <div className="aboutJob">
      <h4>About the Job</h4>
      {props.job_text.map((item) => {
        return (
          <>
            <p>{item}</p>
            <br />
          </>
        );
      })}
    </div>
  );
}
