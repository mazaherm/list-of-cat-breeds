import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";

import { catsReducer } from "./slices";
import { watchCatSaga } from "./sagas/catSaga";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: {
    cats: catsReducer,
  },
  middleware: [saga],
});
saga.run(watchCatSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
