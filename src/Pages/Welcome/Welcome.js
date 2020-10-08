import React, {Component} from "react";
import logo from "../../htmh_logo.png";
import words from "../../HTMH-words.png";
import {Button, Form, Modal} from "semantic-ui-react";
import '../../Styles/WelcomePage.css'

export default class Welcome extends Component{

    constructor(props) {
        super(props);
        this.state = {
            logInModal: false
        };
    }

    OnLogInModal(state){
        this.setState({logInModal: state})
    }

    render() {
        return(
            <div className="Body">
                <Modal
                    open={this.state.logInModal}
                    size='mini'
                >
                    <Modal.Header>Sign into your client account</Modal.Header>
                    <Modal.Content>
                        <Form className='Form'>
                            <Form.Input label='Enter Username'/>
                            <Form.Input label='Enter Password' type='password' />
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                      <Button negative onClick={()=>this.OnLogInModal(false)}>
                        Cancel
                      </Button>
                      <Button positive>
                        Ok
                      </Button>
                    </Modal.Actions>
                </Modal>
                <div className="Imagotype">
                    <img src={logo} className="Isotype" alt="logo" />
                    <img src={words} className="Logo" alt="words" />
                    <p>HOME TO MULTIHOME SOLUTIONS</p>
                </div>
                <div className="Login-container">
                    {/*<Button inverted color={'blue'}>Sign In</Button>*/}
                    <Button
                        inverted
                        color={'green'}
                        onClick={()=>this.OnLogInModal(true)}
                        className="Login-Button"
                    >Log In</Button>
                    <a href='https://www.google.com/'>Click here for help</a>
                </div>
            </div>

        );
    };


}
