import React, { Component } from "react";
import Band from "./Band";

class Bands extends Component {
  render() {
    const renderBands = this.props.bands.map((band) => (
      <Band key={band.id} deleteBand={this.props.deleteBand} band={band} />
    ));

    return <div>{renderBands}</div>;
  }
}

export default Bands;
