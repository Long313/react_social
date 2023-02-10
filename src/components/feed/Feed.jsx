import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";
import Post from "../post/Post";
const Feed = () => {
  return (
    <div className="feed">
      <Share />
      {Posts.map((post) => (
        <Post key={post.id} desc={post.desc} photo={post.photo} date={post.date} userId={post.userId} like={post.like} comment={post.comment} />
      ))}
    </div>
  );
};

export default Feed;
