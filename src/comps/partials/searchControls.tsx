import heart from "../../assets/heart.png";

export default function SearchControls() {
  return (
    <div className="searchControls">
      <button>
        <img src={heart} alt="" />
      </button>
      <div className="page">
        <p>1</p>
      </div>
      <button>
        <img src={heart} alt="" />
      </button>
    </div>
  );
}
