import React, {Component} from 'react';
import { Modal, Button, Form, Icon } from 'semantic-ui-react';
import axios from "axios";
import {apiEndPoints, axiosConfig, serverURL} from "../../Utils/Config";



export default class SubscribeToHTMH extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.open)
        this.state = {
            openModal: true,
            showSecretKey: 'password',
            open: this.props.open,
            agree: false,
            serviceData:{
                serviceToken: '',
                secretKey: ''
            }

        }
    }

    toggleModal(state){
        if (state){
            this.setState({open:true})
        }
        else {
          this.setState({open:false})
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
        axios.post(serverURL + apiEndPoints.services.htmh.subscribe, {serviceData: this.state.serviceData},
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

        console.log(this.state.open)
        return (
            <Modal
                dimmer={'blurring'}
                trigger={<Button
                            icon
                            labelPosition={'right'}
                            color={"green"}
                        >
                            Subscribe
                            <Icon name={'pencil alternate'}/>
                        </Button>}
                onClose={()=>this.setState({openModal: false})}
                onOpen={()=>this.closeModal()}
            >
                <Modal.Header>Create New L2VPN Service</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Group>
                            <Form.Input
                                label={'Service Token'}
                                placeholder={'Insert Service Token'}
                                width={5}
                                name={'serviceToken'}
                                onChange={(e, {name, value})=>this.changeFormHandle(e, {name, value})}
                            />
                            <Form.Input
                                fluid
                                width={5}
                                label={'Secret Key'}
                                placeholder={'Please type the secret key'}
                                type={this.state.showSecretKey}
                                action={{
                                    icon: 'eye',
                                    onClick: this.toggleEye.bind(this)
                                }}
                                name={'secretKey'}
                                onChange={(e, {name, value})=>this.changeFormHandle(e, {name, value})}
                            />
                        </Form.Group>
                        <Form.Checkbox
                            label='I agree with the Terms and Conditions'
                            onChange={()=>this.checkboxHandler()}
                        />
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button
                        negative
                        onClick={()=>this.closeModal()}
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
