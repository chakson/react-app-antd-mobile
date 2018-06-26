import React, { Component } from "react";
import { connect } from "react-redux";
import { dispatch } from "@rematch/core";

class Plus extends Component {
  state = {
    name: 8
  }
  render() {
    const { plus } = this.props;
    return (
      <div>
        <h1>The count is: {plus}</h1>
        <button onClick={() => dispatch.plus.addBy(2)}>Add 2</button>
        <button onClick={() => dispatch.plus.addByAsync(2)}>Add 2 Async</button>
      </div>
    );
  }
}

const mapState = state => ({
  plus: state.plus,
});

export default connect(mapState)(Plus);
