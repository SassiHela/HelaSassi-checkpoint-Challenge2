import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
import User from "../UsreList/User";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const PostList = ({ match }) => {
  const postList = useSelector((state) => state.postList);
  const postUserList = postList.filter(
    (post) => post.userId == Number(match.params.id)
  );

  const userList = useSelector((state) => state.userList);
  const postUser = userList.filter(
    (user) => user.id == Number(match.params.id)
  );

  return (
    <div>
      <Link to="/">
        <RiArrowGoBackLine
          style={{
            marginLeft: 20,
            marginTop: 5,
            width: "30px",
            height: "30px",
            color: "black",
          }}
        />
      </Link>
      <div style={{ margin: "0 35%" }}>
        <User user={postUser[0]} />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {postUserList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
export default PostList;
