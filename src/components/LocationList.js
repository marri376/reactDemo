import React from "react";
import { connect } from "react-redux";
import { fetchDetails } from "../actions/detailsActions";

class LocationList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchDetails());
  }
  render() {
    const { circuits } = this.props; 
       return (  <div>
      <h2>Locations</h2>
      <ul>
          { circuits.map( ( { circuitId,Location } ) => (
              <li key={ circuitId } > { Location.locality }, { Location.country }</li>
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

export default connect(mapStateToProps)(LocationList);