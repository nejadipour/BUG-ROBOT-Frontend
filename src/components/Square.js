import { Button } from "@material-ui/core";
import React from "react";

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.ChildElement = React.createRef();
    }

    handleClick = () => {
        console.log(this);
    };

    render() {
        return (
            <Button
                className={this.props.className}
                onClick={() => {
                    this.handleClick();
                }}
            >
            </Button>
        );
    }
}

export default Square;
