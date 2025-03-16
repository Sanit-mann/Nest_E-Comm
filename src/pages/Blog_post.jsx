import React from "react";
import { useParams } from "react-router-dom";

function Blog_post() {
  const params = useParams();
  console.log(params);
  return <div>Blog_post - {params.id}</div>;
}

export default Blog_post;
