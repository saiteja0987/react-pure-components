import React, { Component } from 'react';

export default class SimpleCounterComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggle: false,
            value: 0
        };
    }

    handleToggle = () => {
        this.setState((prevState) => ({
            toggle: !prevState.toggle
        }));
    };

    handleCounter = () => {
        if (this.state.toggle === true) {
            this.setState((prevState) => ({
                value: prevState.value + 1
            }));
        }
    };

    render() {
        console.log("Simple Component");
        return (
            <div>
                <h1>Simple Component</h1>
                <h3>{this.state.value}</h3>
                <button onClick={this.handleToggle}>Set Toggle</button>
                <button onClick={this.handleCounter}>Counter</button>
            </div>
        );
    }
}