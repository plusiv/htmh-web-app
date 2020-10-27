import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Welcome from "./Pages/Welcome/Welcome";
import Layout from "./Pages/Layout/Layout";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path={'/welcome'} component={Welcome}/>
                    <Route path={'/'} component={Layout}/>
                </Switch>
            </div>
        </Router>

);
}

export default App;
