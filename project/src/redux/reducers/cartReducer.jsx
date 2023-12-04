export const GET_CART_ACTION = 'GET_CART_ACTION';
export const REMOVE_FROM_CART_ACTION = 'REMOVE_FROM_CART_ACTION';
export const ADD_PRODUCT_IN_CART_ACTION = 'ADD_PRODUCT_IN_CART_ACTION';
export const REMOVE_PRODUCT_IN_CART_ACTION = 'REMOVE_PRODUCT_IN_CART_ACTION';
export const SEND_PRODUCT_IN_USER_ACTION = 'SEND_PRODUCT_IN_USER_ACTION';
export const RESET_CART_AFTER_SENT_ACTION = 'RESET_CART_AFTER_SENT_ACTION'

const defaultState = {
  data: [],
};
export default function cartReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_CART_ACTION:
      const existingItem = state.data.find(
        (item) => item._id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          data: state.data.map((item) => {
            if (item._id === action.payload.id) {
              return {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: (item.quantity + 1) * item.price,
              };
            } else {
              return item;
            }
          }),
        };
      } else {
        // Если объект не существует, создаем новый с quantity равным 1
        return {
          ...state,
          data: [
            ...state.data,
            {
              ...action.payload.data,
              quantity: 1,
              totalPrice: action.payload.data.price,
            },
          ],
        };
      }

    case REMOVE_FROM_CART_ACTION:
      return {
        ...state,
        data: state.data.filter((item) => item._id !== action.payload.id),
      };
    case ADD_PRODUCT_IN_CART_ACTION:
      //Находим существующий обьект
      const existingItemForAdd = state.data.find(
        (item) => item._id === action.payload.id
      );
      if (existingItemForAdd) {
        // Если объект существует, увеличиваем его quantity на 1
        return {
          ...state,
          data: state.data.map((item) => {
            if (item._id === action.payload.id) {
              return {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: (item.quantity + 1) * item.price, // Умножаем на quantity
              };
            } else {
              return item;
            }
          }),
        };
      }
      return;
    case REMOVE_PRODUCT_IN_CART_ACTION:
      //Находим существующий обьект
      const existingItemForRemove = state.data.find(
        (item) => item._id === action.payload.id
      );
      if (existingItemForRemove) {
        // Если объект существует, увеличиваем его quantity на 1
        return {
          ...state,
          data: state.data.map((item) => {
            if (item._id === action.payload.id) {
              return {
                ...item,
                quantity: item.quantity - 1,
                totalPrice: (item.quantity - 1) * item.price, // Умножаем на quantity
              };
            } else {
              return item;
            }
          }),
        };
      }
      break;
      case RESET_CART_AFTER_SENT_ACTION:
        return {
          ...defaultState,
        }
    default:
      return state;
  }
}
export const getCartAC = (data, id, quantity = 1) => ({
  type: GET_CART_ACTION,
  payload: {
    data,
    id,
    quantity,
  },
});
export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART_ACTION,
  payload: {
    id,
  },
});
export const addProductInCart = (id, value = 1) => ({
  type: ADD_PRODUCT_IN_CART_ACTION,
  payload: {
    id,
    value,
  },
});
export const removeProductInCart = (id, value = 1) => ({
  type: REMOVE_PRODUCT_IN_CART_ACTION,
  payload: {
    id,
    value,
  },
});
export const sendProductInUser = (data) => ({
  type: SEND_PRODUCT_IN_USER_ACTION,
  payload: {
    data
  },
});
export const resetCartAfterSent = () => ({
  type: RESET_CART_AFTER_SENT_ACTION,
})
