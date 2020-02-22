import React, { useState } from 'react'
import IconButton from '../../template/iconButton'
import InputList from '../../template/InputList'
import DateFunctions from '../../helpers/dateFuntions'

export default props => {

    const [editionId, setEditionId] = useState(0);

    const resetEditionId = () => {
        setEditionId(0)
    }

    const setEdition = (newValue) => {

        setEditionId(newValue)

    }

    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td>
                    <InputList setEditionIdOnClick={() => setEdition(todo._id)} resetEdition={() => setEdition(0)} onFinish={resetEditionId} item={todo} updateDescription={props.updateDescription} edition_id={editionId} ></InputList></td>
                <td>{DateFunctions(todo.createdAt)} </td>
                <td className="actions">
                    <div className="input-group">


                        <div className="input-group-append">
                            <IconButton style={todo.done ? "success" : "warning"} icon={todo.done ? 'check-double' : 'check'} onClick={() => props.handleMarkAsDone(todo)} />
                            <IconButton style={editionId != todo._id ? 'primary' : 'success'} icon="pencil-alt" onClick={() => { setEdition(todo._id); }} />
                            <IconButton style="danger" icon="trash-alt" hide={!todo.done} onClick={() => props.handleRemove(todo)} />
                        </div></div>
                </td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="col-sm-6 ">Descrição</th>
                    <th className="col-sm-4">Criado em:</th>
                    <th className="col-sm-2">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}