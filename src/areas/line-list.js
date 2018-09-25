import React, { PureComponent } from "react";
import { connect } from "react-redux";

import LineItem from "./line";

class LineList extends PureComponent {
  render() {
    const { areaId, lines, addLine } = this.props;

    const lineList = lines.map(a => <LineItem key={a.id} name={a.name} />);

    return (
      <div>
        <h4>Lines</h4>
        <button onClick={() => addLine(areaId)}>Add Line</button>
        <ul>{lineList}</ul>
      </div>
    );
  }
}

export default LineList;
