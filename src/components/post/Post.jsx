import "./post.css";
import { FiMoreVertical } from "react-icons/fi";
import { useState } from "react";

const Post = ({ desc, photo, date, userId, like: newLike , comment }) => {
const [like, setLike] = useState(newLike);
const [statusLike, setStatusLike] = useState(false);
const handleLike = () => {
    setStatusLike(!statusLike);
}
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={`/assets/person/${userId}.jpeg`}
              alt=""
            />
            <span className="postUsername">Safak Kocaoglu</span>
            <span className="postDate">{date}</span>
          </div>
          <div className="postTopRight">
            <FiMoreVertical />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{desc}</span>
          <img className="topImg" src={photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/assets/like.png" alt="" onClick={handleLike}/>
            <img className="likeIcon" src="/assets/heart.png" alt="" onClick={handleLike}/>
            <span className="postLikeCounter">{like} people liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
