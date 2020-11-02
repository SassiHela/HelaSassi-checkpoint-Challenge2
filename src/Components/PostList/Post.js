import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "./Post.css";

const Post = ({ post }) => {
  return (
    <Card border="secondary" style={{ width: "18rem", margin: 20 }}>
      <Card.Header>Post {post.id}</Card.Header>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
        <Card.Text>
          <Link
            className="comment-link"
            to={`/user${post.userId}/post${post.id}`}
          >
            Comments
          </Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Post;
