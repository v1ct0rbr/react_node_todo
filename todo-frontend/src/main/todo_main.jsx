
import React, { PureComponent } from 'react';
//import styled from 'styled-components';
import Nav from './template/trendmicro/SideNav'
import MenuHeader from './template/menuHeader'
import Content from './template/content'
import About from './about/About'
import Footer from './template/footer'
import { handleMenuExpanded } from './template/templateFuncions'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'

/* const Main = styled.main`
    position: relative;
    overflow: hidden;
    transition: all .15s;
    padding: 0 20px;
    margin-left: ${props => (Expand(props.expanded))}px;
`; */

export default class extends PureComponent {
    state = {
        selected: 'tasks/main',
        expanded: false
    };

    onSelect = (selected) => {
        this.setState({ selected: selected });
    };

    onToggle = (expanded) => {
        this.setState({ expanded: expanded });
    };

    navigate = (pathname) => () => {
        this.setState({ selected: pathname });
    };

    render() {
        const { expanded } = this.state;
        return (
            <React.Fragment>
                <Router>
                    <Nav expanded={expanded} onSelect={this.onSelect} onToggle={this.onToggle} selected={this.state.selected} />
                    <div className="wrapper" style={handleMenuExpanded(expanded)}>
                        <MenuHeader />
                        <Switch>
                            <Route path="/tasks" component={<Content state={this.state} />}  ></Route>
                            <Route path="/about" component={<About />}  ></Route>
                        </Switch>
                        <Footer />
                    </div>
                </Router>
            </React.Fragment>
        );
    }
}

