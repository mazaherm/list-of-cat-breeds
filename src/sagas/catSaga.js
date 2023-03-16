import { call, put, takeEvery } from "redux-saga/effects";
import { fetchCats, fetchCatsSuccess, fetchCatsFailed } from "../slices";
import { catbreeds as catbreedsService } from "../services";

export function* watchCatSaga() {
  yield takeEvery(fetchCats, catSaga);
}

function* catSaga() {
  try {
    const cats = yield call(catbreedsService);

    yield put(fetchCatsSuccess(cats));
  } catch (error) {
    yield put(fetchCatsFailed(error.name));
  }
}
