import back from "../../assets/back.png";

export default function Back(props: { setPage: any }) {
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
