import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import { createStore, compose, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import Home from "./containers/Home"

const m_AqueNo = store => next => action => {
  if (action.type === "SUMAR UNO") {
    console.log("A que no...", action)

    store.dispatch({ type: "RESTAR UNO" })
  }

  next(action)
}

// https://medium.com/netscape/creating-custom-middleware-in-react-redux-961570459ecb

const initialState = {
  counter: 10
}
function rootReducer(state = initialState, action) {
  // lógica condicional
  switch (action.type) {
    case "SUMAR UNO":
      return { ...state, counter: state.counter + 1 }
    case "RESTAR UNO":
      return { ...state, counter: state.counter - 1 }
    default:
      return state
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(m_AqueNo))
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/is-404">is-404</Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about">Soy About</Route>
        <Route>
          <h1>404</h1>
          <p>Eso ni etsiste!!!</p>
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)
