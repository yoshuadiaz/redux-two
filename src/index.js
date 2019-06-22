import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import { createStore, compose, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import { Provider } from "react-redux"
import rootReducer from "./core/rootReducer"
import Home from "./containers/Home"
import Planets from "./containers/Planets.container"
import PlanetSaga from "./core/modules/planets/planet.saga"

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(PlanetSaga)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/planets">Planetas</Link>
      <br />
      <Link to="/is-404">is-404</Link>
      <br />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about">Soy About</Route>
        <Route path="/planets" component={Planets} />
        <Route>
          <h1>404</h1>
          <p>Eso ni etsiste!!!</p>
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)
