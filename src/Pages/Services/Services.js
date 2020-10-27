import React, {Component} from "react";
import {Button, Divider, Icon, Segment} from "semantic-ui-react";
import '../../Styles/HomePage.css'
import CreateNewHTMH from "../../Components/Forms/CreateNewHTMH";
import SubscribeToHTMH from "../../Components/Forms/SubscribeToHTMH";

export default class Services extends Component{

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return(
            <div className="container">
                <Segment>
                    <h3>
                        Home-To-Multi-Home
                    </h3>
                    <Divider/>
                    <Button.Group>
                        <CreateNewHTMH/>
                        <Button.Or/>
                        <SubscribeToHTMH/>
                    </Button.Group>
                </Segment>
            </div>
        );
    };
}
