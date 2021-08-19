import React, { Component } from "react";
import './index.css';

class Counter extends React.Component {
constructor(props) {
    super(props)

    this.state = {
         count: 0
    };
}
handleAddButton = () => {
    this.setState({ count: this.state.count + 1 })
};
handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
};
handleReset = () => {
    this.setState({ count: 0 })
}

    render() {
        return (
            <div>
                <p className="count">{this.state.count}</p>
                <button onClick={this.handleAddButton} className="addButton">+</button>
                <button onClick={this.handleMinusButton} className="minusButton">-</button>
                <br></br>
                <button onClick={this.handleReset} className="resetButton">Reset</button>
            </div>
        );
    }

}

export default Counter;