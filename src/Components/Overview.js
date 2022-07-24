import React, {Component, Components} from 'react';

const Overview = (props) => {
    const {tasks} = props;

    return(
        <ul className='list-group my-4 w-50'>
            {tasks.map((task) => {
                return <li className='list-group-item' key={task.id}>{task.text}</li>;
            })}
    </ul>
    )
}
export default Overview;