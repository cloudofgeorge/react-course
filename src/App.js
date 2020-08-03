import React from 'react';
import './App.css';
import Product from "./Product";

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          Hello world
        </h1>
      </header>
      <Product name='Avocado' count='10' />
    </div>
  );
}

export default App;
