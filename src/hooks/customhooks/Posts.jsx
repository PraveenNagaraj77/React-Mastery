import React from "react";
import useFetch from "./useFetch";

const Posts = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>Error: {error}</h2>;
  }
  return (
    <div>
      <h1>Posts</h1>

      {data.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Posts;
