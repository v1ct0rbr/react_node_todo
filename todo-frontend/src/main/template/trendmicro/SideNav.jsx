import React from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import Icon from '../icon'
import { useHistory } from 'react-router-dom'

const sideNavIconStyle = { fontSize: '1.2em', verticalAlign: 'middle' }

export const pageTitle = {
    'home': 'Home',
    'about': ['Sobre'],
    'tasks/main': ['Tarefas', 'Primárias'],
    'tasks/secondary': ['Tarefas', 'Secundárias']
};

export default function MySideNav(props) {
    const history = useHistory()

    return (
        <SideNav onSelect={(selected) => {
            const to = '/' + selected;
            props.onSelect(selected)

            if (selected !== to) {
                history.push(to);
            }
        }} onToggle={props.onToggle} expanded={props.expanded}  >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected={props.selected} selected={props.selected}>
                <NavItem eventKey="home">
                    <NavIcon>
                        <Icon label={'home'} style={sideNavIconStyle} />
                    </NavIcon>
                    <NavText style={{ paddingRight: 32 }} title="Home">
                        Home
        </NavText>
                </NavItem>


                <NavItem eventKey="tasks">
                    <NavIcon>
                        <Icon label={'tasks'} style={sideNavIconStyle} />
                    </NavIcon>
                    <NavText style={{ paddingRight: 32 }} title="Tasks">
                        Tarefas
        </NavText>

                    <NavItem eventKey="tasks/main">

                        <NavText title="Main Policy">
                            Main tasks
            </NavText>

                    </NavItem>


                    <NavItem eventKey="tasks/secondary">

                        <NavText title="Secondary tasks">
                            Secondary tasks
            </NavText>

                    </NavItem>


                </NavItem>


                <NavItem eventKey="about">
                    <NavIcon>
                        <Icon label={'question'} style={sideNavIconStyle} />
                    </NavIcon>
                    <NavText style={{ paddingRight: 32 }} title="Sobre">
                        Sobre
        </NavText>
                </NavItem>


            </SideNav.Nav>
        </SideNav>
    )


}