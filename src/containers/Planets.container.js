import React, { Component } from "react"
import { connect } from "react-redux"
import actionTypes from "../core/modules/planets/Planets.actions"

export class Planets extends Component {
  componentDidMount() {
    this.props.loadPlanets()
  }
  render() {
    return (
      <div>
        {this.props.isLoading && <p>Estoy cargando, dame chanse...</p>}
        {this.props.hasError && <p>NO SE PUDO</p>}

        {!this.props.isLoading &&
          !this.props.hasError &&
          this.props.data.length > 0 &&
          this.props.data.map(planet => (
            <p key={planet.name}>Planeta{planet.name}</p>
          ))}

        {!this.props.isLoading &&
          !this.props.hasError &&
          this.props.data.length === 0 && <p>No hay nada</p>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isLoading: state.Planets.isLoading,
  hasError: state.Planets.hasError,
  data: state.Planets.data || []
})

const mapDispatchToProps = dispatch => ({
  loadPlanets: () => dispatch({ type: actionTypes.LOAD_PLANETS })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Planets)
