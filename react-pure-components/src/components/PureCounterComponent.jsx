import React, { PureComponent } from 'react';
export default class pureCounterComponent extends PureComponent {

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
        console.log("Pure Component");
        return (
            <div>
                <h1>Pure Component</h1>
                <h3>{this.state.value}</h3>
                <button onClick={this.handleToggle}>Set Toggle</button>
                <button onClick={this.handleCounter}>Counter</button>
            </div>
        );
    }
}