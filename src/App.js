//feature-1
import React, {useState} from 'react';
//import logo from './logo.svg';
//import './App.css';
import data from './data.json';
import Products from './components/Products';
//import Testp from './components/Testp';

function App() {
/*
  let appState = {
    products: data.products,
    size: '',
    sort: ''
  };
*/

  const [products, setProducts] = useState(data.products);

  return (
    <div className='grid-container'>

      <header>
        <a href='/'>React Shopping Cart</a>
      </header>

      <main>
        <div className='content'>
          <div className='main'>
            <Products products={products}/>
          </div>
          <div className='sidebar'>
            Cart items
          </div>
        </div>
      </main>

      <footer>All right is reserved</footer>

    </div>
  );
}

export default App;
