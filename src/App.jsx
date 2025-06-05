import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostForm from './components/PostForm';
import AdminPage from './components/AdminPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostForm />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
