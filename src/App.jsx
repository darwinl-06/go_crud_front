import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './static/style.css';
import Home from './pages/Home.jsx';
import CreateGame from './pages/CreateGame.jsx';
import GetGame from './pages/GetGame.jsx';
import UpdateGame from './pages/UpdateGame.jsx';
import DeleteGame from './pages/DeleteGame.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/create" element={<CreateGame />} />
        <Route path="/get" element={<GetGame />} />
        <Route path="/update" element={<UpdateGame />} />
        <Route path="/delete" element={<DeleteGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
