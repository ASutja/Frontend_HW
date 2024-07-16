import { put, takeEvery, all, call } from 'redux-saga/effects';
import { LOAD_TODOS, setTodos } from './actions';

function* fetchTodos() {
  const todos = yield call(() => {
    return [
      { id: 1, text: 'Learn Redux-Saga', completed: false },
      { id: 2, text: 'Create a Todo App', completed: false }
    ];
  });
  yield put(setTodos(todos));
}

function* watchLoadTodos() {
  yield takeEvery(LOAD_TODOS, fetchTodos);
}

export default function* rootSaga() {
  yield all([
    watchLoadTodos(),
  ]);
}
