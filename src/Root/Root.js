import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Adopt from '../Adopt/Adopt'
import Header from '../Header/Header'
import Landing from '../Landing/Landing'
import NavBar from '../NavBar/NavBar'


export default class Root extends Component {
    renderRoutes() {
        return (
            <Switch>
                <Route
                    exact
                    path={'/'}
                    component={Landing}
                />     
                <Route
                    path={'/adopt'}
                    component={Adopt}
                />          
            </Switch>
        )
    }

    render() {
        return (
            <div>
                <header>
                    <Header />
                    <NavBar />
                </header>
                <main className='root'>
                    {this.renderRoutes()}
                </main>
            </div>
        )
    }
}
