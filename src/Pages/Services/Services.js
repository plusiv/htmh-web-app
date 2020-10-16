import React, {Component} from "react";
import {Button, Divider, Form, Icon, Modal, Segment} from "semantic-ui-react";
import '../../Styles/HomePage.css'
import CreateNewL2VPN from "../../Components/Forms/CreateNewL2VPN";

export default class Services extends Component{

    constructor(props) {
        super(props);
        this.state = {
            openL2VPNForm: false
        };
    }


    render() {
        return(
            <div className="container">
                <Segment>
                    <h3>
                        L2VPN
                    </h3>
                    <Divider />
                    <Button
                        primary
                        icon
                        labelPosition={'left'}
                        onClick={()=>this.setState({openL2VPNForm:true})}
                    >
                        Create New
                        <Icon name={'plus circle'}/>
                    </Button>
                    <CreateNewL2VPN open={this.state.openL2VPNForm}/>
                </Segment>
            </div>

        );
    };
}
