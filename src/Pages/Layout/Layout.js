import React, {Component} from "react";
import NavBar from "../../Components/NavBar/NavBar";
import '../../Styles/Layout.css'
import Services from "../Services/Services";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "../Home/Home";

export default class Layout extends Component{

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return(
            <Router>
                <div className={'Body'}>
                    <NavBar/>
                    <Switch>
                        <Route path={'/services'} component={Services}/>
                        <Route path={'/'} component={Home}/>
                    </Switch>
                </div>
            </Router>

        );
    };
}
