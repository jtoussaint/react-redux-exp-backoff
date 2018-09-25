import React, { PureComponent } from "react";
import { connect } from "react-redux";

class LineItem extends PureComponent {
  render() {
    const { id, name } = this.props;

    return (
      <li>
        <span>{name}</span>
      </li>
    );
  }
}
export default LineItem;
