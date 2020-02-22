
import React from 'react'
import Nav, { pageTitle } from './SideNav'
import ensureArray from 'ensure-array';
import Breadcrumbs from '@trendmicro/react-breadcrumbs';







export default (props) => {
    let { selected } = props.state

    const list = ensureArray(pageTitle[selected]);
    alert(list)

    return <div className="text-right" style={{ marginRight: '20px' }}> <Breadcrumbs>
        {list.map((item, index) => (
            <Breadcrumbs.Item
                active={index === list.length - 1}
                key={`${selected}_${index}`}
            >
                {item}
            </Breadcrumbs.Item>
        ))}
    </Breadcrumbs></div>

}
