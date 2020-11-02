import React from "react";
import img1 from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import img7 from "../../Assets/img7.jpg";
import img8 from "../../Assets/img8.jpg";
import img9 from "../../Assets/img9.jpg";
import img10 from "../../Assets/img10.jpg";

import { Link } from "react-router-dom";
import "./User.css";

const User = ({ user }) => {
  return (
    <div key={user.id} className="user-container">
      <div className="user">
        <div className="img-container">
          {user.id === 1 ? <img src={img1} className="userimg" alt="" /> : null}
          {user.id === 2 ? <img src={img2} className="userimg" alt="" /> : null}
          {user.id === 3 ? <img src={img3} className="userimg" alt="" /> : null}
          {user.id === 4 ? <img src={img4} className="userimg" alt="" /> : null}
          {user.id === 5 ? <img src={img5} className="userimg" alt="" /> : null}
          {user.id === 6 ? <img src={img6} className="userimg" alt="" /> : null}
          {user.id === 7 ? <img src={img7} className="userimg" alt="" /> : null}
          {user.id === 8 ? <img src={img8} className="userimg" alt="" /> : null}
          {user.id === 9 ? <img src={img9} className="userimg" alt="" /> : null}
          {user.id === 10 ? <img src={img10} className="userimg" /> : null}

          <div className="inner-img-container"></div>
          {/* Boule de connexion */}
        </div>

        {/* conteneur de nom et de l'email */}
        <div className="sidebox">
          <span className="spanstyle1">
            <b>{user.name}</b>
          </span>
          <br></br>
          <span className="spanstyle2">
            {user.email} <br></br>
            <Link to={`/user${user.id}`} className ="link-post"> Posts</Link>
          </span>
        </div>
      </div>
    </div>
  );
};
export default User;
