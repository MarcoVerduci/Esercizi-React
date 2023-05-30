import React from "react";

export class ClickCounter extends React.Component {
    state = { count: 0 }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <p>Counter: {this.state.count}</p>
                <button onClick={this.incrementCount}>+</button>
            </div>
        )
    }
}