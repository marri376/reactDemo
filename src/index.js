
import React from "react";
import ReactDOM from "react-dom";
import Navigation from './containers/router';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { BrowserRouter as Router } from "react-router-dom";


const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);


const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
   <Router>
    <Navigation />
  </Router>
  </Provider>,
  rootElement
);