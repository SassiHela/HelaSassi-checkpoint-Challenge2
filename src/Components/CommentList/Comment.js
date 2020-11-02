import React from "react";
import { Card } from "react-bootstrap";

const Comment = ({ comment }) => {
  return (
    <Card style={{ margin: "0 25px ", border: "none" }}>
      <Card.Body>
        {comment.email}
        <Card body>{comment.body}</Card>
      </Card.Body>
    </Card>
  );
};
export default Comment;
