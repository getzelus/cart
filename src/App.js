//feature-1
import React, {useState} from 'react';
//import logo from './logo.svg';
//import './App.css';
//import Testa from './Test/Testa';
import data from './data.json';
import Products from './components/Products';
import Filter from './components/Filter';


function App() {
  const [products, setProducts] = useState(data.products);
  const [size, setSize] = useState('');
  const [sort, setSort] = useState('');

  const sortProducts = (e) => {
    const newSort = e.target.value;
    setSort(newSort);
    let newProducts = products.slice();

    if (newSort === 'lowest'){
      newProducts.sort( (a,b) => (
        a.price < b.price? -1:1
      ));
    }else if (newSort === 'highest'){
      newProducts.sort( (a,b) => (
        a.price < b.price? 1:-1
      ));
    }else if (newSort === ''){
      newProducts.sort( (a,b) => (
        a._id < b._id? -1:1
      ));
    }   
    setProducts(newProducts);
  };

  const filterProducts = (e) => {
    const newSize = e.target.value;
    setSize(newSize);

    if (newSize === ''){
      setProducts(data.products);
      return;
    }

    let newProducts = data.products.filter(
      (product) => product.availableSizes.indexOf(newSize) >= 0
    );
    setProducts(newProducts);
  };

  return (
    <div className='grid-container'>

      <header>
        <a href='/'>React Shopping Cart</a>
      </header>

      <main>
        <div className='content'>
          <div className='main'>
            <Filter 
             count={products.length} 
             size={size}
             sort={sort}
             filterProducts={filterProducts}
             sortProducts={sortProducts}
            />
            <Products products={products}/>
          </div>
          <div className='sidebar'>
            Cart items
          </div>
        </div>
      </main>

      <footer>
        All right is reserved
      </footer>

    </div>
  );
}

export default App;
