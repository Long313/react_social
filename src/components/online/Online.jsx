import "./online.css";
import { Users } from '../../dummyData';

const Online = () => {
  return (
    <>
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
        {Users.map((user, index) => (
          <div key={index}>
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img
                  className="rightbarProfileImg"
                  src={user.profilePicture}
                  alt=""
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">{user.username}</span>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
};

export default Online;
