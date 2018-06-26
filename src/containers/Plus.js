import React from "react";
import { connect } from "react-redux";

const Plus = props => (
  <div>
    <h1>The count is: {props.plus}</h1>
    <button onClick={props.addByTwo}>Add 1</button>
    <button onClick={props.addByTwoAsync}>Add 1 Async</button>
  </div>
);

const mapState = state => ({
  plus: state.plus,
});

const mapDispatch = ({ plus: { addBy, addByAsync }}) => ({
  addByTwo: () => addBy(2),
  addByTwoAsync: () => addByAsync(2)
});

export default connect(mapState, mapDispatch)(Plus);
