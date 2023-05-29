import React from "react";

export class Age extends React.Component {
    render() {
        const { age } = this.props;
        if (age > 18) {
            return <p>Your age is {age}.</p>
        } else {
            return 'You are very young!';
        }
    }
}