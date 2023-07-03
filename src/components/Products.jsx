import React from 'react'
import { AddCart, RemoveCart} from './Icons'
import { useCart } from '../hooks/useCart'

export default function Products({products}) {
    const {addToCart, cart, removeFromCart} = useCart()

    const checkProductInCart = product => {
        const check = cart.some(item => item.id === product.id)
        return check
    }

  return (
    <section>
        <ul className='containter__products'>
            {
                products.map(product =>{
                    const isProductInCart = checkProductInCart(product)
                    
                    return(
                        <li className='card-products' key={product.id}>
                            <img src={product.images[0]} alt={product.title} />
                            <div className="section-02">
                                <strong>{product.title}</strong>
                                <p>$ {product.price}</p>
                            </div>
                            <button className="section-03" 
                                style={{
                                    backgroundColor: isProductInCart?
                                    "red" :
                                    "#161f27"
                                }}

                                onClick={
                                ()=> isProductInCart ? 
                                removeFromCart(product) : 
                                addToCart(product)}>

                                {isProductInCart ? 
                                <RemoveCart/>:
                                <AddCart/>}
                                
                            </button>
                        </li>
                    )
                })
            }
        </ul>
    </section>
  )
}
