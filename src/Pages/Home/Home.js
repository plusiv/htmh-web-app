import React, {Component} from "react";
import { Segment } from "semantic-ui-react";
import '../../Styles/HomePage.css'
import DeviceList from "../../Components/DeviceList/DeviceList";
import axios from "axios";
import {apiEndPoints, axiosConfig, serverURL} from "../../Utils/Config";

export default class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {
            devicesList: []
        };
    }

    componentDidMount() {
        axios.get(serverURL + apiEndPoints.device.list, axiosConfig)
        .then(res=>{
            console.log('response==>>', res.data.data);
            this.setState({devicesList: res.data.data})
        })
        .catch(e=>{console.log(e)})
    }


    render() {
        console.log(this.props)
        return(
            <div className="container">
                <Segment>
                    <DeviceList name={'My Devices'} devices={this.state.devicesList}/>
                </Segment>
            </div>

        );
    };
}
