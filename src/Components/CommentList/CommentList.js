import React from "react";
import { useSelector } from "react-redux";
import Comment from "./Comment";
import Post from "../PostList/Post";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const CommentList = ({ match }) => {
  const commentList = useSelector((state) => state.commentList);
  const commentPostList = commentList.filter(
    (comment) => comment.postId == Number(match.params.id)
  );
  const postList = useSelector((state) => state.postList);
  const commentPost = postList.filter(
    (post) => post.id == Number(match.params.id)
  );
  return (
    <div>
      <Link to={"/user" + commentPost[0].userId}>
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
        <Post post={commentPost[0]} />
      </div>
      {commentPostList.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
export default CommentList;
