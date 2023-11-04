import heart from "../../assets/heart.png";

export default function Nav(){
    return <div className="nav">
        <div className="favouriteIcon">
            <img src={heart} alt="" />
        </div>
    </div>
}