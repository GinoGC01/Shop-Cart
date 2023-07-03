import {cartInitialState, cartReducer} from '../Reducers/CartReducer.js'
import { useReducer } from 'react'

export function useCartReducer () {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const addToCart = (product) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: product
        })
    }

    const removeFromCart = (product)=> {dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product

    })}

    const restartToCart = (product) => {dispatch({
        type: 'RESTART_FROM_CART',
        payload: product
    })}

    const clearCart = () => {
        dispatch({
            type: 'CLEAR_CART',
        })
    }

    return{
        state, addToCart, clearCart, removeFromCart, restartToCart
    }
}