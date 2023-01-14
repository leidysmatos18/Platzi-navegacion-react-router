import React from "react";
import { useParams } from "react-router-dom";
import { blogData } from "../blogData";

const BlogPost = () => {
  const resp = useParams();
  const { slug } = resp;
  console.log(resp);

  const blogpost = blogData.find((post) => post.slug === slug);
  return (
    <div>
      <h2>{blogpost.title}</h2>
      <p>{blogpost.content}</p>
      <p>{blogpost.author}</p>
    </div>
  );
};

export default BlogPost;
