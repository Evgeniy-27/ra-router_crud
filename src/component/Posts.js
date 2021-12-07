/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import moment from 'moment/min/moment-with-locales';
import useJsonFetch from "../hoocks/useJsonFetch.js";
import PostsContext from "../contexts/PostsContext.js";
moment.locale("ru");

export default function Posts(props) {
  
  const { advanced, setAdvanced, url, posts, setPosts } = useContext(
    PostsContext
  );
  
  const [zapros, setZapros, data] = useJsonFetch();

  useEffect(() => {
    if (!data) {
      setZapros({
        url: `${url}posts`,
        method: "GET",
      });
    }
    if (data) {
      setPosts(data.resolve);
    }
  
  }, [data]);

// console.log(posts);
// console.log(data)
  return (
    <div>
     
      <div className="main-top">
        <Link to="/posts/new" className="button">
          Создать пост
        </Link>
      </div>

      {data &&
        data.resolve.map((o) => (
          
          <Link to={`/posts/${o.id}`} key={o.id}>
            <div className="item-post" >
              <div className="item-post-header">
                <div className="item-post-img"></div>
                <div className="item-post-name">
                  <span>Имя</span>
                  <span>{moment(o.created).fromNow(1)}</span>
                </div>
              </div>
              <div className="item-post-content">
                <p>{o.content}</p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
