import React from 'react'

import Grid from '../../template/grid'
import IconButton from '../../template/iconButton'

export default props => {

    const keyHandler = (e) => {
        if (e.key == "Enter") {
            e.shiftKey ? props.handleSearch() : props.handleAdd()

        } else if (e.key == "Escape") {
            props.handleClearSearch()
        }
    }

    return (
        <div role="form" className='todoForm row' style={{ width: '100%' }}>
            <Grid cols='12 9 10' >
                <div className="input-group">
                    <input id='description' className='form-control' onKeyUp={keyHandler} onKeyDown={() => { props.handleKeyDown() }} onChange={props.handleChange} placeholder="Adicione um tarefa" value={props.description} />
                    <div className="input-group-append">
                        <IconButton style="outline-secondary" hide={false} icon="search" onClick={props.handleSearch}></IconButton>
                        <IconButton style="outline-secondary" hide={false} icon="plus" onClick={props.handleAdd}></IconButton>
                        <IconButton style="outline-secondary" hide={false} icon="eraser" onClick={props.handleClearSearch}></IconButton>
                    </div>
                </div>
            </Grid>
        </div>
    )
}