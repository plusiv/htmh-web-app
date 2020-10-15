import React, {Component} from "react";
import {Button, Form, Modal, Segment} from "semantic-ui-react";
import '../../Styles/HomePage.css'
import DeviceList from "../../Components/DeviceList/DeviceList";

export default class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return(
            <div className="container">
                <Segment>
                    <DeviceList name={'My Devices'}/>
                </Segment>
            </div>

        );
    };
}
