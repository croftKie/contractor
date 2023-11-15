import { singleJobAbout } from "../../types";

export default function JobAbout(props: singleJobAbout) {
  const arr: string[] = props.job_text || [];

  return (
    <div className="aboutJob">
      <h4>About the Job</h4>
      {arr.map((item) => {
        return (
          <>
            <p dangerouslySetInnerHTML={{ __html: item }}></p>
            <br />
          </>
        );
      })}
    </div>
  );
}
