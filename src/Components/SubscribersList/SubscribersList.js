import React, {Component} from 'react';
import {Modal, Button, List, Icon, Image} from 'semantic-ui-react';


export default class SubscribersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        }
    }


    closeModal = ()=> {this.setState({modalOpen: false})}

    render() {
        return (
            <Modal
                open={this.state.modalOpen}
                onOpen={()=>this.setState({modalOpen: true})}
                onClose={()=> this.closeModal()}
                trigger={
                    <Button animated>
                        <Button.Content visible>
                            <Icon name={'users'}/>
                            Subscribers
                        </Button.Content>
                        <Button.Content hidden>{this.props.subsNum}</Button.Content>
                    </Button>
                }
            >
                <Modal.Header>Subscribers List</Modal.Header>
                <Modal.Content scrolling>
                    <List ordered animated verticalAlign='middle'>
                        {this.props.subscribersList.map(subscriber=>
                            (
                                <List.Item key={subscriber.equipment}>
                                    <Icon size={'big'} name={'user circle'}/>
                                    <List.Content>
                                    <List.Header>{subscriber.name}</List.Header>
                                        {'Home Device: ' + subscriber.equipment}
                                    </List.Content>
                                </List.Item>
                            )
                        )}

                    </List>
                </Modal.Content>
                <Modal.Actions>
                    <Button
                        positive
                        onClick={this.closeModal}
                    >
                        Ok
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}
