import './App.css'
import { useState} from 'react'
import Products from './components/Products'
import {Header} from './components/Header'
import {products as initialProdcuts} from './mocks/Products.json'
import { useFilters } from './hooks/useFilters'
import { Cart } from './components/Cart'
import { CartProvider } from './context/CardContext'


function App() {

  const [products] = useState(initialProdcuts)
  const {filterProducts} = useFilters()

  const filteredProducts = filterProducts(products)


  return (
    <div className="App">
      <h1>Products</h1>
      <CartProvider>
        <Header/>
        <Cart/>
        <Products products={filteredProducts}/>
      </CartProvider>
    </div>
  )
}

export default App
