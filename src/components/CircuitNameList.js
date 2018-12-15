import React from "react";
import { connect } from "react-redux";
import { fetchDetails } from "../actions/detailsActions";

class CircuitNameList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchDetails());
  }

  render() {
    const { circuits } = this.props; 
   

    return (  <div>
      <h2>Circuits Name</h2>
      <ul>
          { circuits.map( ( { circuitId, circuitName} ) => (
              <li key={ circuitId } >{ circuitName } </li>
          ) ) }
      </ul>
  </div>
    );
  }
}

const mapStateToProps = state => ({
  circuits: state.details.items,
  loading: state.details.loading,
  error: state.details.error
});

export default connect(mapStateToProps)(CircuitNameList);