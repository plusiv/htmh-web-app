import React, {Component} from "react";
import logo from "../../htmh_logo.png";
import words from "../../HTMH-words.png";
import {Button} from "semantic-ui-react";
import '../../Styles/WelcomePage.css'

class welcome extends Component{

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div className="Body">
                <div className="Imagotype">
                    <img src={logo} className="Isotype" alt="logo" />
                    <img src={words} className="Logo" alt="words" />
                    <p>HOME TO MULTIHOME SOLUTIONS</p>
                </div>
                <div className="Button">
                    <Button inverted color={'blue'}>Sign Up</Button>
                    <Button inverted color={'green'}>Log In</Button>
                </div>
            </div>

        );
    };


}

export default welcome;
