import { Post } from "src/models/User";
import { useState, useEffect } from "react";
import { getAllPost } from "@services/Posts";

export const useGetPosts = () => {
  const [posts, setPosts] = useState<Post[]>();
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  useEffect(() => {
    getAllPost().then(({ data, error }) => {
      if (error) {
        setError(error.message);
      } else {
        setPosts(data);
      }
    });
    setloading(false);
  }, []);

  return {
    posts,
    loading,
    error,
  };
};
