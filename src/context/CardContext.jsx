import { createContext } from "react";
import {useCartReducer} from '../hooks/useCartReducer'

export const CartContext = createContext()

export function CartProvider ({children}){
    const {state, addToCart, clearCart, removeFromCart, restartToCart} = useCartReducer()
    // function whitState (){
    //     const [cart, setCart] = useState([])

    //     function addToCart (product){
    //         const productInCartIndex = cart.findIndex(item => item.id === product.id)
    //         if(productInCartIndex >= 0){
    //             const newCart = structuredClone(cart)
    //             newCart[productInCartIndex].quantity += 1
    //             return setCart(newCart)
    //         }
    //         setCart((prevState)  =>([
    //             ...prevState,
    //             {
    //                 ...product,
    //                 quantity: 1
    //             }
    //         ]))
    //     }
    
    //      function restartToCart (product){
    //         const productInCartIndex = cart.findIndex(item => item.id === product.id)
    
    //         const newCart = structuredClone(cart)
    
    //         if(newCart[productInCartIndex].quantity > 1){
    //             newCart[productInCartIndex].quantity --
    //             return setCart(newCart)
    //         }
    
    //         if(newCart[productInCartIndex].quantity <= 1){
    //             return  removeFromCart(product)
    //         }
    
    
    //     }
    
    //     function removeFromCart (product) {
    //         setCart( prevState => prevState.filter(item => item.id !== product.id))
    //     }
    
    //     const clearCart = ()=>{
    //         setCart([])
    //     }
    // }
    return(
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            clearCart,
            removeFromCart,
            restartToCart
        }}>
            {children}
        </CartContext.Provider>

    )
    
}