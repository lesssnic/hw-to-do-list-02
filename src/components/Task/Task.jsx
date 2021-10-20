



import React from "react";

class Task extends React.Component {
    constructor(props){
        super(props)

    }

    render() {
        const {text} = this.props;
        return (
            <>
                <p>{text}</p>
            </>
        )
    }
}

export default Task;