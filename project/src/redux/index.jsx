
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas";
import userReducer from './reducers/userReducer';
import productReducer from './reducers/productsReducer';
import cartReducer from './reducers/cartReducer';
import categoriesReducer from './reducers/categoriesReducer';
import limitProductReducer from './reducers/limitProductReducer';

const getStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: combineReducers({
      user: userReducer,
      products: productReducer,
      limitProducts: limitProductReducer,
      cart: cartReducer,
      categories: categoriesReducer
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  });

  sagaMiddleware.run(rootSaga)

  return store
}

export default getStore