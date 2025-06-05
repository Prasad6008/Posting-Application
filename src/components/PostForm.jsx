import React, { useState } from 'react';
import axios from 'axios';
import './index.css'

function PostForm() {
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    rating: '',
    username: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData)
    try {
      await axios.post('http://localhost:5000/api/posts', formData);
      alert('Post submitted!');
      setFormData({ title: '', image: '', rating: '', username: '' });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='container'>
      <h1>Create a Post</h1>

    <form onSubmit={handleSubmit} className='form_div'>
      <input name="username" placeholder="Username" value={formData.username} onChange={handleChange} required/>
      <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required/>
      <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required/>
      <input name="rating" type="number" placeholder="Rating" value={formData.rating} onChange={handleChange} required/>
      <button type="submit">Submit</button>
    </form>

    </div>
  );
}

export default PostForm;
