

import React from "react";

class List extends React.Component {
    constructor(props){
        super(props)

        this.doneTask = this.doneTask.bind(this);

    }

    doneTask(e){
        e.target.classList.contains('done') ? e.target.classList.remove('done') : e.target.classList.add('done');
      }
    render() {
        const {tasks} = this.props;
        return (
            <>
                <ul>
                    {tasks?.map((list) =><>
                                        <li onClick = {this.doneTask}>
                                        {list.text}
                                        </li>
                                        </>
                    )}
                </ul>
            </>
        )
    }
}

export default List;