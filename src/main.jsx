import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './App.css';
import App from './App';
import StudentList from './pages/StudentList';
import HomePage from './pages/HomePage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage />} />
      {/* <Route path="/" element={<App />} /> */}
      {/* <Route path="/students" element={<StudentList />} /> */}
    </Routes>
  </BrowserRouter>
);
