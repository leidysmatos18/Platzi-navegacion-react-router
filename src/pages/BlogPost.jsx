import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogData } from "../blogData";

const BlogPost = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  const returnalblog = () => {
    navigate("/blog");
  };

  const blogpost = blogData.find((post) => post.slug === slug);
  return (
    <div className="ms-4 mt-4">
      <button className="btn btn-primary my-2" onClick={returnalblog}>
        Volver al Blog
      </button>
      <h2 className="fs-1 mt-4">{blogpost.title}</h2>
      <p className="fs-2">{blogpost.content}</p>
      <p className="fs-4">{blogpost.author}</p>
    </div>
  );
};

export default BlogPost;
