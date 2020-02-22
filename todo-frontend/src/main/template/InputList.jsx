import React, { useState } from 'react'

import Icon from '../template/icon'
import SpanList from '../template/spanList'
import If from '../helpers/if'
import CustomInput from '../template/CustomInput'




export default props => {
    const [description, setDescription] = useState(props.item.description)

    const handleChange = (e) => {
        setDescription(e.target.value)
    };


    return (<React.Fragment>
        <If test={!(props.edition_id == props.item._id)}>
            <SpanList setEditionIdOnClick={props.setEditionIdOnClick} todo={props.item}> </SpanList>
        </If>
        <If test={props.edition_id == props.item._id}>
            <div className="input-group col-sm-6 ">

                <CustomInput onChange={handleChange} value={description} />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" onClick={() => { props.updateDescription(props.item._id, description); props.onFinish() }}>
                        <Icon label="save"></Icon>
                    </button>
                    <button className="btn btn-outline-secondary" onClick={props.resetEdition}>
                        <Icon label="times"></Icon>
                    </button>
                </div>
            </div>
        </If>
    </React.Fragment>)
}

