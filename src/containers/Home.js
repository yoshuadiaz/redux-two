import {
  connect
} from "react-redux"
import {
  withRouter
} from 'react-router-dom'
import Home from "../views/Home"

const mapStateToProps = state => ({
  counter: state.counter
})

export default withRouter(connect(mapStateToProps)(Home))