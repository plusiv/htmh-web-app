import React, {Component} from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Home from "../Home/Home";
import '../../Styles/Layout.css'


export default class Layout extends Component{

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return(
            <div className={'Body'}>
                <NavBar/>
                <Home/>
            </div>
        );
    };
}
