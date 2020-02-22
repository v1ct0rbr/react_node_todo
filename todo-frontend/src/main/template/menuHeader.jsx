import React from 'react'
// import itemMenu from './itemMenuHeader'
import Icon from './icon'
import RightNavbar from './rightNavbar'

export default props => (

    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <ul className="navbar-nav">

            <form className="form-inline ml-3">
                <div className="input-group input-group-sm">
                    <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                    <div className="input-group-append">
                        <button className="btn btn-navbar" type="submit">
                            <i className="fas fa-search"></i>
                            <Icon label={'search'} />
                        </button>
                    </div>
                </div>
            </form>

            
        </ul>
        <RightNavbar />
    </nav>


)