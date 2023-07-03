import React, { useId } from 'react'
import {ShoppBag, RemoveCart} from './Icons'
import { useCart } from '../hooks/useCart'



export function Cart() {
    const cartCheckboxId = useId()
    const {cart, addToCart, clearCart, restartToCart} = useCart()
  return (
    <>
        <label htmlFor={cartCheckboxId} className='menu-desplegable'>
            <ShoppBag/>
        </label>
        <input type='checkbox' id={cartCheckboxId} hidden style={{
           width:"0",
           height:"0",
           padding:"0"}} />

        <aside className='cart'>
            <h2>Cart</h2>
            <ul className='items__cart'>
            {cart.map((product) => {return (
                <li className='card__cart' key={product.id}>
                <img src={product.images[0]} alt={product.title} />
                <div><strong>{product.title}</strong> - ${product.price}</div>
                <footer>
                    <small>
                        Qty: {product.quantity}
                    </small>
                    <button onClick={()=>addToCart(product)}>+</button>
                    <button onClick={()=>restartToCart(product)}>-</button>
                </footer>
            </li>
            )})}
            </ul>

            <button className='remove__cart' onClick={clearCart}>
                <RemoveCart/>
            </button>
        </aside>
    </>
  )
}
