import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
    render() {
        const { name, age } = this.props;
        return (
            <div>
                <p>Welcome, {name}!</p>
                {age !== undefined && <Age age={age} />}
            </div>
        )
    }
}

Welcome.defaultProps = {
    name: 'Guest',
    age: '24'
}