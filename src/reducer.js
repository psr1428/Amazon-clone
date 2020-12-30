export const initialState = {
    basket: [],

};

export const getBasketTotal = (basket) =>
    basket.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {


    switch (action.type) {
        case 'ADD-TO-BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'Remove-basket':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`can't remove an item ${action.id}`);
            }
            return {
                ...state,
                basket: newBasket
            }

        case 'Set-user':
            const email = action.user.email;
            const name = email.split("@", 1);
            return {
                ...state,
                user: action.user,
                name: name,
                email: email
            }
        case 'Empty_basket':
            return {
                ...state,
                basket: []
            }
        default:
            return state;
    }
};

export default reducer;