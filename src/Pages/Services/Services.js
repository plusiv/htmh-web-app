import React, {Component} from "react";
import {Button, Divider, Segment} from "semantic-ui-react";
import '../../Styles/HomePage.css'
import CreateNewHTMH from "../../Components/Forms/CreateNewHTMH";
import SubscribeToHTMH from "../../Components/Forms/SubscribeToHTMH";
import {apiEndPoints, axiosConfig, serverURL} from "../../Utils/Config";
import axios from "axios";
import HTMHInfo from "../../Components/HTMHInfo/HTMHInfo";
import RefreshButton from "../../Components/RefreshButton/RefreshButton";

export default class Services extends Component{

    constructor(props) {
        super(props);
        this.state = {
            htmhStatus: undefined,
            htmhInfo: {
                serviceToken: '',
                active: '',
                startDatetime: '',
                endDatetime: '',
                subscribersList: [],
                equipments: [],
                subsNum: '',
                secretKey: '',
                permitRun: false,
                isOwner: false,
                isRunning: false
            },
            submitButtonStatus: true
        };
    }

    componentDidMount() {
        axios.get(serverURL + apiEndPoints.services.htmh.getService, axiosConfig)
            .then(res=>{
                if (res.status === 200){
                    this.setState({htmhStatus: true, htmhInfo: res.data})
                }
                else {
                    this.setState({htmhStatus: false})
                }
            })
            .catch(e=> console.log('A problem has occurred', e))
    }

    requestStartHtmh(){
        this.setState({submitButtonStatus: false})
        axios.get(serverURL + apiEndPoints.services.htmh.start, axiosConfig)
            .then(res=>{
                if (res.status === 200){
                    this.setState(prevState=>({
                        ...prevState,
                        submitButtonStatus: true,
                        htmhInfo: {
                            ...prevState.htmhInfo,
                            isRunning: true,
                            active: 'Yes'
                        }
                    }))
                }
                else {

                }
            })
            .catch(e=> console.log('A problem has occurred', e))

    }

    requestStopHtmh(){
        this.setState({submitButtonStatus: false})
        axios.delete(serverURL + apiEndPoints.services.htmh.delete, axiosConfig)
            .then(res=>{
                if (res.status === 200){
                    window.location.reload(false)
                }
            })

    }

    render() {
        return(
            <div className={"container"} >>
                <RefreshButton/>
                <Segment style={{marginTop: '3vmin'}}>
                    <h3>
                        Home-To-Multi-Home
                    </h3>
                    <Divider/>
                    { !this.state.htmhStatus ? <Button.Group>
                        <CreateNewHTMH/>
                        <Button.Or/>
                        <SubscribeToHTMH/>
                    </Button.Group>
                    :
                    <div>
                        <HTMHInfo htmhInfo={this.state.htmhInfo}/>
                        {(this.state.htmhInfo.isOwner && !this.state.htmhInfo.isRunning) && <Button
                                positive
                                loading={!this.state.submitButtonStatus}
                                disabled={!this.state.htmhInfo.permitRun || !this.state.submitButtonStatus}
                                style={{marginTop:'5%'}}
                                onClick={this.requestStartHtmh.bind(this)}
                        >
                            Go
                        </Button>}
                        <Button
                            onClick={this.requestStopHtmh.bind(this)}
                            loading={!this.state.submitButtonStatus}
                            disabled={!this.state.submitButtonStatus}
                            negative
                            style={{marginTop:'5%'}}
                        >
                            Delete
                        </Button>
                    </div>
                    }
                </Segment>
            </div>
        );
    };
}
