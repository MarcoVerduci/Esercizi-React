import React from "react";
import { CounterDisplay } from './CounterDisplay';

export class Counter extends React.Component {

    state = { count: 0 };

    componentDidMount() {
        setInterval(() => {
            this.setState({
                count: this.state.count + 1,
            })
        }, 1000)
    }

    render() {
        return (
            <div>
                <CounterDisplay count={this.state.count} />
            </div>
        )
    }
}