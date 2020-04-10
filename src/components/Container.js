import React, { Component } from "react";
import { connect } from "react-redux";
import {
  testCase1,
  testCaseAdd,
  testCaseDelete,
} from "../actions/actionTemplate";
class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      obj: {},
      id: 1,
    };
  }

  handleClick = (e) => {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        this.props.testCase1(this.state.count);
      }
    );
  };

  handleDelete = (e) => {
    this.props.testCaseDelete(this.state.id);
    this.setState({
      obj: this.props.tempSomeArray,
    });
  };

  render() {
    return (
      <>
        <h1>count:</h1>
        {this.props.tempCount}
        <h1>some Array:</h1>
        {this.props.tempSomeArray.map((item, index) => {
          return item;
        })}
        <h1>update count:</h1>
        <button onClick={() => this.handleClick(this.state.count)}>
          {/* <button onClick={() => this.props.testCase1(this.state.count)}> */}
          Updating Count
        </button>
        <h1>update testCaseAdd:</h1>
        <button onClick={() => this.props.testCaseAdd(this.state.obj)}>
          TestCaseAdd
        </button>
        <h1>delete item:</h1>
        <button onClick={this.handleDelete}>Delete Item</button>
      </>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    tempCount: state.template.count,
    tempSomeArray: state.template.someArray,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    testCase1: (countValue) => dispatch(testCase1(countValue)),
    testCaseAdd: (dataObj) => dispatch(testCaseAdd(dataObj)),
    testCaseDelete: (id) => dispatch(testCaseDelete(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Container);
