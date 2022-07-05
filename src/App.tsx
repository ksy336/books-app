import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Books from './pages/Books';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
