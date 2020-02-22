import React from 'react'

export default props => (
    <span  onMouseDown={props.setEditionIdOnClick} className="col-sm-12" style={{ cursor: 'pointer', textDecorationLine: props.todo.done ? 'line-through' : 'none', color: !props.todo.done ? '#000' : '#ccc' }} >{props.todo.description}</span>
)