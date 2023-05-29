import React from "react";

export class Welcome extends React.Component {
    render() {
        const { name } = this.props;
        return (
            <p>Welcome, {name}!</p>
        )
    }
}

Welcome.defaultProps = {
    name: 'Guest'
}