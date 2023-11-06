import back from "../../assets/back.png";

export default function SearchControls() {
  return (
    <div className="searchControls">
      <button>
        <img src={back} alt="" />
      </button>
      <div className="page">
        <p>1</p>
      </div>
      <button>
        <img className="next" src={back} alt="" />
      </button>
    </div>
  );
}
