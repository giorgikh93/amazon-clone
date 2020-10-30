
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount,0)
    
export const initialState = {
    user:null,
    basket: [],
}


function reducer(state, action) {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.payload]
            }
        case 'REMOVE_FROM_BASKET':
            const id = action.payload
            return { ...state, basket: state.basket.filter(item => item.id !== id) }
            case 'SET_USER':
                console.log(action.payload,'action.payload')
                return {
                    ...state,
                    user:action.payload
                }
        default:
            return state
    }
}
export default reducer