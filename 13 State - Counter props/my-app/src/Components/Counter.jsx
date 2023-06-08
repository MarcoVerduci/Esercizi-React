import React from "react";

export class Counter extends React.Component {
    constructor(props) {
        super(props)

        this.state = { count: props.initialValue };

        setInterval(() => {
            this.setState({
                count: this.state.count + props.incrementAmount,
            })
        }, props.incrementInterval)
    }

    render() {
        return (
            <h1>{this.state.count}</h1>
        )
    }
}