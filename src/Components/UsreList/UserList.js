import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { fetchUser } from "../Redux/Actions/Actions";

import Loading from "../Loading/Loading";
import User from "./User";

const UserList = () => {
  const dispatch = useDispatch();

  const [userList, setUserList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  function fetchData() {
    // the function to  get data from the api
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        dispatch(fetchUser(response.data));
        setIsLoading(false);
        setUserList(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {userList.map((user) => (
            <User user={user} />
          ))}
        </div>
      )}
    </div>
  );
};
export default UserList;
