import React from "react";
import { Link } from "react-router-dom";
import { blogData } from "../blogData";

const BlogPage = () => {
  return (
    <>
      <h1 className="fs-1 text-center my-4">Blog Page</h1>
      <ul className="list-unstyled ms-4">
        {blogData.map((post) => (
          <BlogLink post={post} key={post.title} />
        ))}
      </ul>
    </>
  );
};

const BlogLink = ({ post }) => {
  return (
    <li>
      <Link to={`/blog/${post.slug}`} className="text-decoration-none fs-2">
        {post.title}
      </Link>
    </li>
  );
};

export default BlogPage;
