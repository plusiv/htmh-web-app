import React, { Component } from 'react';
import {Icon, Grid, Popup, Divider} from "semantic-ui-react";


export default class DeviceList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {ip:'10.10.10.1', mac: 'ff:ff:ff:ff:00'},
                {ip:'10.10.10.2', mac: 'ff:ff:ff:ff:01'},
                {ip:'10.10.10.3', mac: 'ff:ff:ff:ff:02'},
                {ip:'10.10.10.4', mac: 'ff:ff:ff:ff:03'},
                {ip:'10.10.10.5', mac: 'ff:ff:ff:ff:04'},
                {ip:'10.10.10.6', mac: 'ff:ff:ff:ff:05'},
                {ip:'10.10.10.7', mac: 'ff:ff:ff:ff:06'},
            ]
        };
    }

    splitInCols(numOfCols){
        let items = this.state.list
        const itemsLength = this.state.list.length;
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

    render() {
        console.log(this.splitInCols(3))
        return(
            <div>
                <h3>
                    Device List
                </h3>
                <Divider />
                <Grid columns={3} divided>
                    {
                        this.splitInCols(3).map((row, idx)=>(
                            <Grid.Row key={idx}>
                                {row.map((item, idx)=>(
                                    <Grid.Column>
                                        <Popup
                                        trigger={
                                            <Icon key={item.mac} size={'large'} name={'computer'}>
                                                {item.ip}
                                            </Icon>
                                        }
                                        >
                                            <Popup.Content>
                                                <p><b>MAC:</b> {item.mac.toUpperCase()}</p>
                                                <p><b>IP:</b> {item.ip.toUpperCase()}</p>
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
