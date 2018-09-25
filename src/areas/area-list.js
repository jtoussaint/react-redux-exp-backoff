import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { addLine } from "./actions";

import AreaItem from "./area";

class AreaList extends PureComponent {
  render() {
    const { areas, addLine } = this.props;

    const areaList = areas.map(a => (
      <AreaItem
        key={a.id}
        id={a.id}
        name={a.name}
        lines={a.lines}
        addLine={addLine}
      />
    ));

    return (
      <div>
        <h1>Areas</h1>
        <ul>{areaList}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  areas: state.areas
});

const mapDispatchToProps = dispatch => ({
  addLine: areaId => dispatch(addLine(areaId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AreaList);
