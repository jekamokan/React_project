import { put, takeEvery, call, select } from "redux-saga/effects";

// import {client} from './../../../index'
import { mutations, queries } from "../../gql";
import { GET_CATEGORIES, setCategoriesAC } from "../reducers/categoriesReducer";
import { GET_LIMIT_PRODUCTS, setLimitProductsAC } from "../reducers/limitProductReducer";
import { GET_PRODUCTS, setProductsAC } from "../reducers/productsReducer";
import { client } from "../..";
import { SEND_PRODUCT_IN_USER_ACTION } from "../reducers/cartReducer";
import { orderDataUpdate } from "../../utils";
// WORKERS


function* getLimitProducts(action) {

  const res = yield call(() => client.query({
    query: queries.GET_GOODS,
    variables: {
      query: JSON.stringify([
        {},
        {
          limit: [action.payload.limit],
          skip: [action.payload.skip]
        },

      ])
    }
  }))
  yield put(setLimitProductsAC({ data: res.data.GoodFind }));
}
function* getProducts() {

  const res = yield call(() => client.query({
    query: queries.GET_GOODS,
    variables: {
      query: JSON.stringify([
        {},
      ])
    }
  }))
  yield put(setProductsAC({ data: res.data.GoodFind }));
}

function* getCategories() {

  const res = yield call(() => client.query({
    query: queries.GET_CATEGORIES_SCHEMA,
    variables: {
      query: JSON.stringify([
        {},


      ])
    }
  }))
  yield put(setCategoriesAC({ data: res.data.CategoryFind }));

}
function* sendOrder(action) { 
  const token = yield select(state=>state.user.token) 
  const  {data}  = action.payload; 
  const res = yield call(() => 
      client.mutate({ 
        mutation: mutations.ADD_USERS_ORDER, 
        variables: { goods: orderDataUpdate(data) }, 
        context: { 
          headers: { 
            'Content-Type': 'application/json', 
            Authorization: `Bearer ${token}`, 
          } 
        } 
      }) 
    ); 
  console.log(res.data) 
}




// WATCHER
export function* productsSaga() {
  yield takeEvery(GET_PRODUCTS, getProducts);
  yield takeEvery(GET_CATEGORIES, getCategories);
  yield takeEvery(GET_LIMIT_PRODUCTS, getLimitProducts);
  yield takeEvery(SEND_PRODUCT_IN_USER_ACTION, sendOrder);
}
