import back from "../../assets/back.png";
import { setPageProps } from "../../types";

export default function Back(props: setPageProps) {
  return (
    <div className="backButton">
      <div
        onClick={() => {
          props.setPage(0);
        }}
        className="back"
      >
        <img src={back} alt="" />
      </div>
    </div>
  );
}
