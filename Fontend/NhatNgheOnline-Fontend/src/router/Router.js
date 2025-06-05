import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Sử dụng BrowserRouter thay cho HashRouter
import HomePage from '../pages/Home/Home';
import SearchPage from '../pages/Search/SearchPage'; 
import Login from '../pages/Login';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
