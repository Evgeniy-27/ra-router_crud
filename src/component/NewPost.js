import React, { useState, useEffect, useContext } from "react";
// eslint-disable-next-line no-unused-vars
import { Redirect } from "react-router-dom";
import PostsContext from "../contexts/PostsContext.js";
import useJsonFetch from "../hoocks/useJsonFetch.js";

export default function NewPost(props) {
  // eslint-disable-next-line no-unused-vars
  const { posts, setPosts, url } = useContext(PostsContext);
  const [value, setValue] = useState();
  // eslint-disable-next-line no-unused-vars
  const [zapros, setZapros, data, loading] = useJsonFetch();
  const { history } = props;
  // console.log(props.match);

  const handleClose = () => {
    history.goBack();
    // setRedirectActive(true);
  };

  const handleChange = (evt) => {
    setValue(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setZapros({
      url: `${url}posts`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: 0,
        content: value,
      }),
    });
  };

  useEffect(() => {
    if (data) {
      history.goBack();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="new-post">
      <div className="top">
        <span onClick={handleClose}>X</span>
      </div>
      <form onSubmit={handleSubmit}>
        <textarea name="text" onChange={handleChange} value={value} />
        <div className="submit">
          <button type="submit" className="button">
            Опубликовать
          </button>
        </div>
      </form>
    </div>
  );
}
