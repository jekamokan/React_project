import { put, takeEvery, call } from "redux-saga/effects";

import {client} from '../..'
import { GET_TOKEN_ACTION, GET_TOKEN_ACTION2, setUserTokenAC } from "../reducers/userReducer";
import { mutations, queries } from "../../gql";
// WORKERS
function* getToken(action) {
  const res = yield call(() => client.query({
    query: queries.GET_TOKEN,
    variables: {
      ...action.payload
    }
  }))
  if(res.data.login){
    yield put(setUserTokenAC(res.data.login));
  }
}



function* setUser(action) {
  try {
    const { login, password } = action.payload;

    const res = yield call(() =>
      client.mutate({
        mutation: mutations.CREATE_NEW_USER,
        variables: { user: { login, password } },
      })
    );

    if (res.data.UserUpsert._id) {
      const tokenRes = yield call(() =>
        client.query({
          query: queries.GET_TOKEN,
          variables: { login, password },
        })
      );

      if (tokenRes.data.login) {
        yield put(setUserTokenAC(tokenRes.data.login));

      }
    }
  } catch (error) {
    console.error('Error in setUser saga:', error);
    alert(error)
  }
}
 
 





// WATCHER
export function* userSaga() {
  yield takeEvery(GET_TOKEN_ACTION, getToken);
  yield takeEvery(GET_TOKEN_ACTION2, setUser);
}
