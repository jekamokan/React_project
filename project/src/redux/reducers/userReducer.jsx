export const SET_USER_TOKEN = 'SET_USER_TOKEN';
export const GET_TOKEN_ACTION = 'GET_TOKEN_ACTION';
export const GET_TOKEN_ACTION2 = 'GET_TOKEN_ACTION2';
export const SET_USER_AUTHORIZED = 'SET_USER_AUTHORIZED';
export const LOG_OUT_ACTION = 'LOG_OUT_ACTION';

export const defaultState = {
  login: '',
  email: '',
  password: '',
  token: '',
};
export default function userReducer(state = defaultState, action) {
  switch (action.type) {
    case GET_TOKEN_ACTION:
      return {
        ...state,
        login: action.payload.login,
        email: action.payload.email,
        password: action.payload.password,
      };
    case GET_TOKEN_ACTION2:
      return {
        ...state,
        login: action.payload.login,
        email: action.payload.email,
        password: action.payload.password,
      };
    case SET_USER_TOKEN:
      return {
        ...state,
        token: action.payload.token,
        isLoggedIn: true
      };
    case SET_USER_AUTHORIZED:
      return {
        ...state,
       
      };
    case LOG_OUT_ACTION:
      return {
        ...defaultState,
       
      };
    default:
      return state;
  }
}
export const getTokenAC = ({ login, email, password }) => ({
  type: GET_TOKEN_ACTION,
  payload: {
    login,
    email,
    password 
   },
});

export const getTokenAC2 = ({login,email,password,}) => ({
  type: GET_TOKEN_ACTION2,
  payload: {
    login,
    email,
    password,

  },
});

export const setUserTokenAC = (token) => ({
  type: SET_USER_TOKEN,
  payload: {
    token,
  },
});
export const logOutAC = () => ({
  type: LOG_OUT_ACTION,
});

