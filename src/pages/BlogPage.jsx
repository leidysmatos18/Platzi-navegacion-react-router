import React from "react";
import { Link, Outlet } from "react-router-dom";
import { blogData } from "../blogData";

const BlogPage = () => {
  return (
    <>
      <h1 className="fs-1 text-center my-4">Blog</h1>
      <Outlet />

      <ul className="list-unstyled mt-5">
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
      <Link
        to={`/blog/${post.slug}`}
        className="text-decoration-none fs-1 lh-lg ms-4"
      >
        {post.title}
      </Link>
    </li>
  );
};

export default BlogPage;
