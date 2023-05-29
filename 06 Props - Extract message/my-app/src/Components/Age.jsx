import React from "react";

export class Age extends React.Component {
    render() {
        const { age } = this.props;
        return <p>Your age is {age}.</p>
    }
}

Age.defaultProps = {
    age: '"'
}