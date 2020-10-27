import React, {Component} from 'react';
import { Modal, Button, Form, Icon } from 'semantic-ui-react';



export default class SubscribeToHTMH extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.open)
        this.state = {
            open: this.props.open

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
                //onClose={()=>this.setState({open: false})}
            >
                <Modal.Header>Create New L2VPN Service</Modal.Header>
                <Modal.Content>
                    <Form>
                        <Form.Group>
                            <Form.Input
                                label={'Service Token'}
                                placeholder={'Insert Service Token'}
                                width={5}
                            />
                            <Form.Input
                                label={'Host ID'}
                                placeholder={'Insert the Host ID'}
                                width={4}
                            />
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
