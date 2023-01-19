import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogData } from "../blogData";
import { useAuth } from "../hooks/auth";

const BlogPost = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const auth = useAuth();

  const returnalblog = () => {
    navigate("/blog");
  };

  const blogpost = blogData.find((post) => post.slug === slug);
  const canDelete =
    auth.user?.isAdmin || blogpost.author === auth.user?.username;

  const deleteBlog = (titulo) => {
    const deleteSelect = blogData.filter((title) => title.title !== titulo);
    console.log(deleteSelect);
    return deleteSelect;
  };
  return (
    <div className="ms-4 mt-4">
      <button className="btn btn-primary my-2" onClick={returnalblog}>
        Volver al Blog
      </button>
      <h2 className="fs-1 mt-4">{blogpost.title}</h2>
      <p className="fs-2">{blogpost.content}</p>
      <p className="fs-4">{blogpost.author}</p>

      {canDelete && (
        <button
          className="btn btn-danger mt-2"
          onClick={() => deleteBlog(blogpost.title)}
        >
          Eliminar
        </button>
      )}
    </div>
  );
};

export default BlogPost;
