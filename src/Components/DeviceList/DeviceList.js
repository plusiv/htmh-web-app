import React, { Component } from 'react';
import {Icon, Grid, Popup, Divider} from "semantic-ui-react";
import '../../Styles/HomePage.css'
import EditableLabel from '../EditableLabel/EditableLabel'
import axios from "axios";
import {apiEndPoints, axiosConfig, serverURL} from "../../Utils/Config";



export default class DeviceList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {ip:'10.10.0.1', mac: 'ff:ff:ff:ff:00', virtualIp: '10.10.1.1', friendlyName: '10.10.0.1'},
                {ip:'10.10.0.2', mac: 'ff:ff:ff:ff:01', virtualIp: '10.10.1.2', friendlyName: '10.10.0.2'},
                {ip:'10.10.0.3', mac: 'ff:ff:ff:ff:02', virtualIp: '10.10.1.3', friendlyName: '10.10.0.3'},
                {ip:'10.10.0.4', mac: 'ff:ff:ff:ff:03', virtualIp: '10.10.1.4', friendlyName: '10.10.0.4'},
                {ip:'10.10.0.5', mac: 'ff:ff:ff:ff:04', virtualIp: '10.10.1.5', friendlyName: '10.10.0.5'},
                {ip:'10.10.0.6', mac: 'ff:ff:ff:ff:05', virtualIp: '10.10.1.6', friendlyName: '10.10.0.6'},
                {ip:'10.10.0.7', mac: 'ff:ff:ff:ff:06', virtualIp: '', friendlyName: '10.10.0.7'},
            ]
        };
    }

    splitInCols(numOfCols){
        console.log(this.props.devices)
        let items = this.props.devices
        const itemsLength = items.length;
        const rowsNum = itemsLength/numOfCols;
        let matrix = [];
        for (let i=0; i < rowsNum; i++){
            let subArray = []
            for (let j=i*numOfCols; j<(i+1)*numOfCols; j++){
                if (j === itemsLength){
                    break;
                }
                subArray.push(items[j])
            }
            matrix.push(subArray)
        }

        return matrix
    }


    onEditFriendlyName(textValue, macValue){
        if (textValue !== macValue){
            axios.put(serverURL + apiEndPoints.device.setFriendlyName, {newFriendlyName: textValue,
                device:macValue }, axiosConfig)
                .then(res=>{
                    console.log(res.data)
                })
                .catch(e=> console.log('A problem has occurred while setting new friendly name ', e)
                )
        }
    }

    render() {
        const numOfCols = 4
        return(
            <div>
                <h3>
                    {this.props.name}
                </h3>
                <Divider />
                <Grid
                    columns={numOfCols}
                    divided
                    stackable
                    textAlign={'left'}
                >
                    {
                        this.splitInCols(numOfCols).map((row, idx)=>(
                            <Grid.Row key={idx}>
                                {row.map((item)=>(
                                    <Grid.Column key={item.mac}>
                                        <Popup
                                        trigger={
                                            <span className="device-list-text">
                                                {<EditableLabel
                                                    disable={!this.props.editable}
                                                    text={item.friendlyName}
                                                    onChange={(textValue)=>this.onEditFriendlyName(textValue, item.mac)}
                                                />}
                                            </span>

                                        }
                                        >
                                            <Popup.Content>
                                                <p><b>MAC:</b> {item.mac.toUpperCase()}</p>
                                                <p><b>IP:</b> {item.ip}</p>
                                                {(item.virtualIp !== '') && <p><b>VIRTUAL IP:</b> {item.virtualIp}</p>}
                                            </Popup.Content>

                                        </Popup>
                                    </Grid.Column>
                                ))}
                            </Grid.Row>
                        ))
                    }

                </Grid>
            </div>
        );


    }


}
