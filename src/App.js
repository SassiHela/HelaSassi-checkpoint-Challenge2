import "./App.css";
import { useState, useEffect } from "react";
import UserList from "./Components/UsreList/UserList";
import PostList from "./Components/PostList/PostList";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import { fetchComment, fetchPost } from "./Components/Redux/Actions/Actions";
import { useDispatch } from "react-redux";
import CommentList from "./Components/CommentList/CommentList";
function App() {
  const dispatch = useDispatch();

  function fetchPostData() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        dispatch(fetchPost(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function fetchCommentData() {
    // the function to  get data from the api
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then(function (response) {
        dispatch(fetchComment(response.data));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  useEffect(() => {
    fetchPostData();
    fetchCommentData();
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={UserList} />

        <Route exact path="/user:id" component={PostList} />

        <Route path="/user:id/post:id" component={CommentList} />
      </Switch>
    </div>
  );
}

export default App;
