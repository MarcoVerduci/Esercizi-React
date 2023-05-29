import React from "react";

export class Welcome extends React.Component {
    render() {
        const { name, age } = this.props;
        return (
            <div>
                <p>Welcome, {name}!</p>
                <p>Your age is {age}</p>
            </div>
        )
    }
}

Welcome.defaultProps = {
    name: 'Guest',
    age: '"'
}