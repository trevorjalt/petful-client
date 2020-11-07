import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import Landing from '../Landing/Landing'
import Adopt from '../Adopt/Adopt'


class Root extends Component {
    render() {
        return (
            <div>
                <header>
                    <Header />
                </header>
                <main className='root'>
                    <Switch>
                        <Route
                            exact
                            path='/'
                            component={Landing}
                        />
                    </Switch>
                    <Switch>
                        <Route
                            path='/adopt'
                            component={Adopt}
                        />
                    </Switch>
                </main>
            </div>
        )
    }
}

export default Root
