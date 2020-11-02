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
        console.log('klk', this.props)
        return(
            <Router>
                <div className={'Body'}>
                    <Route path={'/'} component={NavBar}/>
                    <Switch>
                        <Route path={'/services'} component={Services}/>
                        <Route path={'/home'} component={Home}/>
                    </Switch>
                </div>
            </Router>

        );
    };
}
