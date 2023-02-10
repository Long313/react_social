import Online from "../online/Online";
import "./rightbar.css";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="birthDayText">
            <b>Pola Foster</b> and <b>3 other</b> friends have a birthday today
          </span>
        </div>

        <img className="rightbarAd" src="/assets/ad.png" alt="" />
        <Online/>
      </div>
    </div>
  );
};

export default Rightbar;
