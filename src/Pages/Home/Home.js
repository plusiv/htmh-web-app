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
            userDevices: [],
            othersDevices: []
        };
    }

    componentDidMount() {
        axios.get(serverURL + apiEndPoints.device.list, axiosConfig)
        .then(res=>{
            console.log('response==>>', res.data);
            this.setState({userDevices: res.data.userDevices, othersDevices: res.data.othersDevices})
        })
        .catch(e=>{console.log(e)})
    }


    render() {
        console.log(this.props)
        return(
            <div className="container">
                <Segment>
                    <DeviceList
                        editable={true}
                        name={'My Devices'}
                        devices={this.state.userDevices}
                    />
                </Segment>
                {this.state.othersDevices.map(device=>(
                    <Segment key={device.equipment}>
                        <DeviceList
                            ditable={false}
                            name={device.name + "'s Devices"}
                            devices={device.devices}
                        />
                    </Segment>
                ))}
            </div>

        );
    };
}
