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
        <Product name='Avocado' count='10'>
            Avocados make just about anything better, from salads to veggie-packed salsas to smoothies. Smear avocados onto toast, mash 'em into guacamole, or top your morning eggs with a couple slices
        </Product>
    </div>
  );
}

export default App;
