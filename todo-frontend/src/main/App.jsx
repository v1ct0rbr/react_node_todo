// import React from 'react';
import '../libs/libicons'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.min.css'
import '@trendmicro/react-breadcrumbs/dist/react-breadcrumbs.min.css';
import '@trendmicro/react-buttons/dist/react-buttons.min.css';
import '@trendmicro/react-dropdown/dist/react-dropdown.min.css';
import Breadcrumbs from '@trendmicro/react-breadcrumbs';
import ensureArray from 'ensure-array';



//import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle'

//import Todo from './todo_main'


/* import About from '../about/about'
import Header from './components/header' */


//import Crumbs from './template/trendmicro/BreadCrumbs'
import './App.css';



import React, { PureComponent } from 'react';
//import styled from 'styled-components';
import Nav, { pageTitle } from './template/trendmicro/SideNav'
import MenuHeader from './template/menuHeader'
import About from './pageFiles/About'
import TodoMain from './pageFiles/todo/TodoMain'
import TodoSecondary from './pageFiles/todo/TodoSecondary'
import Footer from './template/footer'
import { handleMenuExpanded, currentPathname } from './template/templateFuncions'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pageFiles/Home';

const initialState = {
    selected: currentPathname(),
    expanded: true
}



class Teste extends PureComponent {


    state = { ...initialState };



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
        const { expanded, selected } = this.state;
        const list = ensureArray(pageTitle[selected]);
        return (

            <Router >
                <Nav expanded={expanded} onSelect={this.onSelect} onToggle={this.onToggle} selected={selected} state={this.state} />
                <div className="wrapper" style={handleMenuExpanded(expanded)}>
                    <MenuHeader />
                    <div className="content-wrapper"  >
                        <div className="text-right" style={{ marginRight: '20px' }}> <Breadcrumbs>
                            {list.map((item, index) => (
                                <Breadcrumbs.Item
                                    active={index === list.length - 1}
                                    key={`${selected}_${index}`}
                                >
                                    {item}
                                </Breadcrumbs.Item>
                            ))}
                        </Breadcrumbs></div>

                        <Switch>
                            <Route path="/" exact={true} render={() => <Home />}></Route>
                            <Route path="/home" render={() => <Home />}></Route>
                            <Route path="/tasks/main" render={() => <TodoMain state={this.state} />}  ></Route>
                            <Route path="/tasks/secondary" render={() => <TodoSecondary />}></Route>
                            <Route path="/about" render={() => <About />}></Route>
                            <Redirect from="*" to='/tasks/main'></Redirect>
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>

        );
    }
}



function App() {
    return (
        <Teste />
    );
}

export default App;

/* <!-- jQuery -->
<script src="%PUBLIC_URL%/assets/plugins/jquery/jquery.min.js"></script>
<!-- jquery-validation -->

<!-- AdminLTE App -->
<script src="%PUBLIC_URL%/assets/js/adminlte.min.js"></script>
<!-- AdminLTE for demo purposes -->
<script src="%PUBLIC_URL%/assets/js/demo.js"></script> */