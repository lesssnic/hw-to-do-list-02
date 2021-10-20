

import React from "react";

class CustomInput extends React.Component {
    constructor(props){
        super(props)

    }

    changeInput(e){
        console.log(this.props);
    }
    render() {
        const {newTask} = this.props;
        
        return (
            <>
                <input type="text" value={newTask} onChange={this.changeInput}/>
                <button>Add new task</button>
            </>
        )
    }
}

export default CustomInput;