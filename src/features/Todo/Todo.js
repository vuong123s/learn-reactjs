import React from 'react';
import PropTypes from 'prop-types';

function Todo(props) {
    const { TodoItem } = props
    console.log(TodoItem)
    return (
        <div className="style">
            {TodoItem.title}
        </div>
    );
}

export default Todo;