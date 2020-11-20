import React, { Component } from 'react';
import {Message, Grid, Popup, Divider} from "semantic-ui-react";
import '../../Styles/HomePage.css'
import EditableLabel from '../EditableLabel/EditableLabel'
import axios from "axios";
import {apiEndPoints, axiosConfig, serverURL} from "../../Utils/Config";



export default class DeviceList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    splitInCols(numOfCols){
        let items = this.props.devices
        if (items.length === 0){
            return undefined
        }
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
        const devicesList = this.splitInCols(numOfCols)
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
                    {   devicesList === undefined ?
                        <Message
                            icon='warning circle'
                            header='No devices yet'
                            content='Oops! it looks like there are no devices on your network yet.'
                        /> :
                        devicesList.map((row, idx)=>(
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
