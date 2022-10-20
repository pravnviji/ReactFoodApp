
import { useReducer } from 'react'
import CardContext from './card-context'

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {

    if (action.type === 'ADD') {
        const updatedItem = state.items.concat(action.item)
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.totalAmount
        return {
            items: updatedItem,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState
}

const CardProvider = (props) => {

    const [cartState, dispatchCardAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = (item) => {
        dispatchCardAction({
            type: 'ADD',
            item: item
        })
    }
    const removeItemToCartHandler = (id) => {
        dispatchCardAction({
            type: 'REMOVE',
            id: id
        })
    }

    const cardContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler
    }
    return <CardContext.Provider value={cardContext}>
        {props.children}
    </CardContext.Provider>

}
export default CardProvider


