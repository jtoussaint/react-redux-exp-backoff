import React, { PureComponent } from "react";
import { connect } from "react-redux";

import LineList from "./line-list";

class AreaItem extends PureComponent {
  render() {
    const { id, name, lines, addLine } = this.props;

    return (
      <li>
        <h2>{name}</h2>
        <LineList areaId={id} lines={lines} addLine={addLine} />
      </li>
    );
  }
}
export default AreaItem;
