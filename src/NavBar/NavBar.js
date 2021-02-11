import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

export default class NavBar extends Component {
    renderNavLinks = () => {
        return (
            <nav className="navigation-wrapper">
                <Link
                    to='/'
                    className='navigation-item'
                >
                    Home
                </Link>               
                <Link
                    to='/adopt'
                    className='navigation-item'
                >
                    Adopt
                </Link>
            </nav>
        )
    }

    render() {
        return (
            <div className='navigation'>
                {this.renderNavLinks()}
            </div>
        )
    }
}
