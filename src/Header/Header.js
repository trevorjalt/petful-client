import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends Component {
    renderNavLinks = () => {
        return (
            <div className="navBar">
                <Link
                    to='/'
                    className='navItem'
                >
                    <p>Home</p>
                </Link>
                |
                <Link
                    to='/adopt'
                    className='navItem'
                >
                    <p>Adopt</p>
                </Link>
            </div>
        )
    }

    render() {
        return (
            <nav className='Header'>
                <span className='Header__text'>
                    <Link to='/' className='logo'>
                        petFul
                    </Link>
                </span>
                {this.renderNavLinks()}
            </nav>
        )
    }
}

export default Header