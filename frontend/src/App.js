import './App.css';
import Content from './Components/Content';
import Nav from './Components/Nav';
import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { getAllAddAutors } from './assynncActions/autors'

function App() {
  return (
    <div>
      <Nav />
      <Content />
    </div>
  );
}

export default App;