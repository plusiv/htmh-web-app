import React, {Component} from 'react';
import {Modal, Button, Form, Label, Icon} from 'semantic-ui-react';
import axios from "axios";
import {apiEndPoints, axiosConfig, serverURL} from "../../Utils/Config";



export default class CreateNewHTMH extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            showSecretKey: 'password',
            totalFee: '--',
            agree: false,
            serviceData: {
                startDatetime: this.getDates().todayDatetime,
                endDatetime: this.getDates().dateTimeThirtyMinLater,
                subscribers: 2,
                secretKey: '',
            }
        }
    }


    toggleEye(){
        if (this.state.showSecretKey === 'password'){
            this.setState({showSecretKey:'input'})
        }
        else {
            this.setState({showSecretKey:'password'})
        }
    }

    getDates(){
        const today = new Date();
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.toTimeString().slice(0,5)
        const dateTime = date+ 'T' +time;

        today.setMinutes( today.getMinutes() + 30 )
        const thirtyMinLater = today.toTimeString().slice(0,5)
        const dateTimeThirtyMinLater = date+ 'T' + thirtyMinLater;

        return {
            todayDatetime: dateTime,
            dateTimeThirtyMinLater: dateTimeThirtyMinLater
        }
    }

    getFee() {
        const params = {
            startDatetime: this.state.serviceData.startDatetime,
            endDatetime: this.state.serviceData.endDatetime,
            subs: this.state.serviceData.subscribers}

        axios.post(serverURL + apiEndPoints.compute.fee, params, axiosConfig)
                .then(res=>{
                    this.setState({totalFee: res.data.fee})
                })
                .catch(e=> console.log('A problem has occurred ', e)
                )
    }

    componentDidMount() {
        this.getFee()
    }


    changeFormHandle(e, {name, value}){
        console.log('name and value ', name, value)
        this.setState((prevState)=>({
            ...prevState,
            serviceData: {
                ...prevState.serviceData,
                [name] : value
            }
        }))
    }

    onSubmit(){
        axios.post(serverURL + apiEndPoints.services.htmh.create, {serviceData: this.state.serviceData},
            axiosConfig)
                .then(res=>{
                    console.log(res.data)
                    this.closeModal()
                })
                .catch(e=> console.log('A problem has occurred', e))
    }


    closeModal = ()=> {this.setState({modalOpen: false})}
    checkboxHandler = ()=> {this.setState((prevState)=>({...prevState, agree: !prevState.agree}))}

    render() {
        const {todayDatetime, dateTimeThirtyMinLater} = this.getDates()

        return (
            <Modal
                dimmer={'blurring'}
                open={this.state.modalOpen}
                onOpen={()=>this.setState({modalOpen: true})}
                onClose={()=> this.closeModal()}
                trigger={
                    <Button
                        primary
                        icon
                        labelPosition={'left'}
                    >
                        Create New
                        <Icon name={'plus circle'}/>
                    </Button>
                }
            >
                <Modal.Header>Create New L2VPN Service</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Input fluid
                                        label='Start time'
                                        type={'datetime-local'}
                                        min={todayDatetime}
                                        defaultValue={this.state.serviceData.startDatetime}
                                        name={'startDatetime'}
                                        onChange={(e, {name, value})=>this.changeFormHandle(e, {name, value})}
                                        onBlur={this.getFee.bind(this)}
                            />
                            <Form.Input fluid
                                        label='End time'
                                        type={'datetime-local'}
                                        min={dateTimeThirtyMinLater}
                                        defaultValue={this.state.serviceData.endDatetime}
                                        name={'endDatetime'}
                                        onChange={(e, {name, value})=>this.changeFormHandle(e, {name, value})}
                                        onBlur={this.getFee.bind(this)}
                            />
                            <Form.Input fluid
                                        label={'Subscribers'}
                                        type={'number'}
                                        min={"2"}
                                        defaultValue={this.state.serviceData.subscribers}
                                        width={2}
                                        name={'subscribers'}
                                        onChange={(e, {name, value})=>this.changeFormHandle(e, {name, value})}
                                        onBlur={this.getFee.bind(this)}
                            />
                            <Form.Input fluid
                                        label={'Secret Key'}
                                        placeholder={'Please enter a secret key'}
                                        type={this.state.showSecretKey}
                                        action={{
                                            icon: 'eye',
                                            onClick: this.toggleEye.bind(this)
                                        }}
                                        name={'secretKey'}
                                        onChange={(e, {name, value})=>this.changeFormHandle(e, {name, value})}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Label
                                color={'green'}
                                size={'large'}
                            >
                                Total:
                            <Label.Detail
                                content={this.state.totalFee}
                            />
                        </Label>
                        </Form.Group>
                        <Form.Checkbox
                            label='I agree with the Terms and Conditions'
                            name={'agree'}
                            defaultValue={this.state.serviceData.agree}
                            onChange={()=>this.checkboxHandler()}
                        />
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button
                        negative
                        onClick={()=> this.closeModal()}
                    >
                        Cancel
                    </Button>
                    <Button
                        positive
                        disabled={!this.state.agree}
                        onClick={this.onSubmit.bind(this)}
                    >
                        Accept
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}
