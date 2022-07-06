import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Books from './pages/BooksPage';
import Detail from './pages/DetailPage';
import NoFound from './pages/NoFoundPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/book" element={<Detail />} />
          <Route path="*" element={<NoFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
