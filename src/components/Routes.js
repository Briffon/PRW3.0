import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from './pages/signIn/SignIn';
import Inventory from './pages/inventory/Inventory';
import Analyics from './pages/analyics/Analyics';
import Home from './pages/home/Home';
import Events from './pages/events/Events';

const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={SignIn} />
                <Route exact path='/SignIn' component={SignIn} />
                <Route exact path='/Home' component={Home} />
                <Route exact path='/Inventory' component={Inventory} />
                <Route exact path='/Analyics' component={Analyics} />
                <Route exact path='/Events' component={Events} />
            </Switch>
        </>
    )
}
export default Routes
