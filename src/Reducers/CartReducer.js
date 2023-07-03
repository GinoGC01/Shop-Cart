// carrito ↓
export const cartInitialState = JSON.parse(localStorage.getItem('cart')) || []

const CART_ACTIONS_TYPE = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    RESTART_FROM_CART: 'RESTART_FROM_CART',
    CLEAR_CART:'CLEAR_CART'
}

export const updateLocalStorage = state => {
    localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) =>{
    // actionType => string de acción que tiene que hacer
    // actionPayload => objeto que necesitamos para actualizar el estado 
    const {type: actionType, payload: actionPayload} = action

    switch (actionType) {
        // agrega
        case CART_ACTIONS_TYPE.ADD_TO_CART:{
            const {id} = actionPayload
            const productInCartIndex = state.findIndex(item =>  item.id === id)

            if(productInCartIndex >= 0){
                // const newState = structuredClone(state)
                // newState[productInCartIndex].quantity += 1
                const newState = [
                    ...state.slice(0, productInCartIndex),{
                        ...state[productInCartIndex], 
                        quantity:state[productInCartIndex].quantity +1},
                        ...state.slice(productInCartIndex + 1)
                ]
                updateLocalStorage(newState)
                return newState
            }

            const newState =  [
                // copia el estado
                ...state,
                // copia el objeto
                {
                    ...actionPayload,
                    quantity: 1
                }
            ]

            updateLocalStorage(newState)
            return newState
        }

        // elimina el producto 
        case CART_ACTIONS_TYPE.REMOVE_FROM_CART:{
            const {id} = actionPayload
            const removeItem = state.filter(item => item.id !== id)
            updateLocalStorage(removeItem)
            return removeItem   
        }
        // elimina la cantidad
        case CART_ACTIONS_TYPE.RESTART_FROM_CART:{
            const {id} = actionPayload
            const productInCartIndex = state.findIndex(item =>  item.id === id)
            const newState = [... state]


            if(newState[productInCartIndex].quantity > 1){
                newState[productInCartIndex].quantity --
                updateLocalStorage(newState)
                return newState
            }

            if(newState[productInCartIndex].quantity <= 1) {
                const {id} = actionPayload
                const removeItem = state.filter(item => item.id !== id)
                updateLocalStorage(removeItem)
                return removeItem   
            }
        }
        // vacía el carrito
        case CART_ACTIONS_TYPE.CLEAR_CART: {
            updateLocalStorage(cartInitialState)
            return cartInitialState
        }
    }

    return state

}