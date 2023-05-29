import React from "react";

export class Age extends React.Component {
    render() {
        const { age } = this.props;
        if (age > 18 && age < 65) {
            return <p>Your age is {age}.</p>
        }
    }
}