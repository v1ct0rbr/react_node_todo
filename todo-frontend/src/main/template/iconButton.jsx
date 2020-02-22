import React from 'react'
import If from '../helpers/if'
import Icon from './icon'



export default props => (
    <If test={!props.hide}>
        <button className={'btn btn-' + props.style} onClick={props.onClick} >
            <Icon label={props.icon}></Icon>
        </button>
    </If>
)
