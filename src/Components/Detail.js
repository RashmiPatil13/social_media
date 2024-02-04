import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import logo1 from "../assets/logo1.svg";

const Detail = () => {
  const { id } = useParams();
  const posts = useSelector((state) => state.posts);
  const post = posts.find((post) => post.id === parseInt(id));

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  // function handleDetails(post) {
  //   const info = document.createElement("p");
  //   info.innerHTML = post.body;
  //   const postDatails = document.querySelector(".post-details");
  //   postDatails.appendChild(info);
  // }
  function handleInfo(post) {
    const info = document.createElement("p");
    info.innerHTML = post.id;
    const postDatails = document.querySelector(".post-details");
    postDatails.appendChild(info);
  }

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div className="detail-container">
      <div
        className="demo4"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <div style={{ flex: 1 }}>
          <p style={{ fontWeight: 700 }}> Post number # {post.id}</p>
          <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
        </div>
        {/* <div className="post-details" style={{ flex: 1 }}>
          <button onClick={() => handleInfo(post)} className="btn">
            {isOn ? "Details" : "User Info"}
          </button>
        </div> */}
        <div className="post-details" style={{ flex: 1 }}>
          <button className="">Details</button>
          <button onClick={() => handleInfo(post)} className="btn">
            User Info
          </button>
          <p>{post.body}</p>
        </div>
      </div>

      <div className="outer-container">
        {posts.map((post) => (
          <Link key={post.id} item={post} to={`/item/${post.id}`}>
            <div className="post-container">
              <img
                src={`https://picsum.photos/200?random=${post.id}`}
                alt="Post"
              />

              <p style={{ color: "black" }}>Title : {post.title}</p>

              <p>
                {" "}
                {truncateText(post.body, 100)}{" "}
                <span className="read" style={{ color: "orange" }}>
                  Read More...
                </span>
                <img className="vedio_btn" src={logo1}></img>
              </p>

              {post.body.length > 50 && <Link to={`/item/${post.id}`}></Link>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Detail;
