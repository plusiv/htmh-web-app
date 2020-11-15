import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Welcome from "./Pages/Welcome/Welcome";
import Layout from "./Pages/Layout/Layout";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {PrivateRoute} from "./AAA/Restrict";
import {endPoints} from "./Utils/Config";
import {isAuthenticated} from "./AAA/Session";


function App() {
    return (

        <Router>
            <div className="App">
                <Switch>
                    <Route path={'/welcome'} component={Welcome}/>
                    <Route path={'/login'} component={Welcome}/>
                    <PrivateRoute path={'/'} redirectPath={endPoints.loginPage} authorization={ isAuthenticated }>
                        <Route path={'/'} component={Layout}/>
                    </PrivateRoute>
                </Switch>
            </div>
        </Router>

);
}

export default App;
