import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
    render() {
        const { name, age } = this.props;
        return (
            <div>
                {this.name == 'John' && <p>Welcome, {name}!</p>}
                {age > 18 && age < 65 && <Age age={age} />}
            </div>
        )
    }
}

Welcome.defaultProps = {
    name: 'Guest',
    age: '24'
}