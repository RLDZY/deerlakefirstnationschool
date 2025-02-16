"use client"
import { Separator } from "@/components/ui/separator"

// /components/PostsList.js
import { useEffect, useState } from 'react';

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('api/posts');
        if (!res.ok) throw new Error('Failed to fetch posts');
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
  
    <div>
      <ul>
        {posts.map((post) => (
          <div key={post.id}>
            <p className="text-[.8rem] text-gray-600">Posted Date: {post.createdAt}</p>
            <p className="font-bold">{post.content}</p>
            <h1 className="text-[.8rem] text-gray-800">Posted By: {post.title}</h1>
            <Separator className="my-4"/>
          </div>
          
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
