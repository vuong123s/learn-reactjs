import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo.js'
import "./todo.css"

TodoFeature.propTypes = {
    TodoItem: PropTypes.object,
};

function TodoFeature(props) {
    const todoList = [
        {
            id: 1,
            title: 'Eat',
        },
        {
            id: 2,
            title: 'Sleep',
        },
        {
            id: 3,
            title: 'Working',
        }
    ]
    
    return (
        <div>
            {
                todoList.map((x) => {
                    return (<Todo TodoItem={x} ></Todo>)
                })
            }
        </div>
    );
}

export default TodoFeature;