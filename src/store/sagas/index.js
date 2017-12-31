import { takeEvery } from "redux-saga/effects/";

import * as actionTypes from "../actions/actionTypes";
import {
  logoutSaga,
  checkAuthTimeOutSaga,
  authUserSaga,
  authCheckStateSaga
} from "./auth";

export function* watchAuth() {
  yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
  yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeOutSaga);
  yield takeEvery(actionTypes.AUTH_USER, authUserSaga);
  yield takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga);
}
