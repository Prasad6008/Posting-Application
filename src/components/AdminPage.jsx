import React, { useEffect, useState } from 'react';
import './admin.css'

const AdminPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
     fetch('http://192.168.43.194:5000/api/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <>
    <h2>📋 All User Posts</h2>
    <div className='post_div' style={{ padding: "20px" }}>
      
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        posts.map((post) => (
          <div className='post'
            key={post._id}
            style={{
              border: '1px solid #ccc',
              margin: '10px 0',
              padding: '10px',
              borderRadius: '8px',
            }}
          >
            <img
              src={post.image}
              alt={post.title}
              style={{ width: '100px', height: '100px', objectFit: 'cover' }}
            />
            <h3>{post.title}</h3>
            <p>⭐ Rating: {post.rating}</p>
            <p>👤 Posted by: {post.username}</p>
          </div>
        ))
      )}
    </div>
    </>
  )
};

export default AdminPage;
