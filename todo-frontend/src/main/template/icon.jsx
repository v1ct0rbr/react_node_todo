import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default props =>
    (
        <FontAwesomeIcon icon={['fas', props.label]} style={props.style} />
    )