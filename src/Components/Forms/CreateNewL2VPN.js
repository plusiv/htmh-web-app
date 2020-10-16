import React, {Component} from 'react';
import { Modal, Button, Form, Label } from 'semantic-ui-react';



export default class CreateNewL2VPN extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSecretKey: 'password'
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

    render() {

        const {todayDatetime, dateTimeThirtyMinLater} = this.getDates()
        console.log(todayDatetime, dateTimeThirtyMinLater)

        return (
            <Modal
                dimmer={'blurring'}
                open={this.props.open}
            >
                <Modal.Header>Create New L2VPN Service</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Input fluid
                                        label='Start time'
                                        type={'datetime-local'}
                                        min={todayDatetime}
                                        value={todayDatetime}
                            />
                            <Form.Input fluid
                                        label='End time'
                                        type={'datetime-local'}
                                        min={dateTimeThirtyMinLater}
                                        value={dateTimeThirtyMinLater}
                            />
                            <Form.Input fluid
                                        label={'Subscribers'}
                                        type={'number'}
                                        min={2}
                                        width={2}
                            />
                            <Form.Input fluid
                                        label={'Secret Key'}
                                        placeholder={'Please enter a secret key'}
                                        type={this.state.showSecretKey}
                                        action={{
                                            icon: 'eye',
                                            onClick: this.toggleEye.bind(this)
                                        }}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Label
                                color={'green'}
                                size={'large'}
                            >
                                Total:
                            <Label.Detail>$50</Label.Detail>
                        </Label>
                        </Form.Group>

                        <Form.Checkbox label='I agree to the Terms and Conditions' />
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative>
                        Cancel
                    </Button>
                    <Button positive>
                        Accept
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}
