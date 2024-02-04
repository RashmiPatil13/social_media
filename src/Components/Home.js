import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux/actions";
import Detail from "./Detail";
import logo1 from "../assets/logo1.svg";

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const loading = useSelector((state) => state.loading);
  // const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  };

  // function handleClick({post}){
  //   navigate(<Detail post={post}/>)
  // }

  return (
    <div className="main">
      <p className="title">Social Media For Travellers</p>

      <input type="text" className="demo" placeholder="search hear..."></input>

      {/* <div className="demo">
          <input type="text" placeholder="Search here..."></input>
        </div> */}
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
          // <div key={post.id} onClick={()=>handleClick(post={post})} >
          //   <div className="post-container">
          //         <img
          //             src={`https://picsum.photos/200?random=${post.id}`}
          //             alt="Post"
          //         />

          //         <p style={{color: "black"}}>Title : {post.title}</p>
          //         <p>  {truncateText(post.body, 100)}</p>
          //             {post.body.length > 50 && (
          //         <Link to={`/item/${post.id}`}><span style={{color: "orange"}}>Read More...</span></Link>
          //     )}

          //   </div>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
