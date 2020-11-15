import React, {Component} from "react";
import logo from "../../htmh_logo.png";
import words from "../../HTMH-words.png";
import {Button, Form, Modal} from "semantic-ui-react";
import '../../Styles/WelcomePage.css'
import {auth, isAuthenticated} from "../../AAA/Session";
import {endPoints} from "../../Utils/Config";

export default class Welcome extends Component{

    constructor(props) {
        super(props);
        this.state = {
            loginModal: false,
            username:'',
            password:'',
            failedAttempt: false,
            errorWithServer: false,
            validUsernameLength: false,
            validPasswordLength: false
        };
    }

    componentDidMount() {
       isAuthenticated().then(isAuth=>{
           if (isAuth){
               this.props.history.push(endPoints.homePage);
           }
       });
    }

    OnLogInModal(state){
        this.setState({loginModal: state})
    }

    onChangeUsername(e){
       this.setState({username:e.target.value});
    };

    onChangePassword(e){
        this.setState({password:e.target.value});
    };

    submitUser(){
        const user = {username: this.state.username, password: this.state.password};
        console.log("The user credentials is ==>", user);
        auth(user).then(
             validation=>{
                 console.log("the validation of authentication was ==>", validation);
                 if(validation){
                     this.setState({failedAttempt: false, loginModal: false});
                     this.props.history.push(endPoints.homePage);
                 }
                 else if(!validation){
                     this.setState({failedAttempt: true})
                 }

                 else {
                     this.setState({errorWithServer: true})
                 }
             }
         );
    }

    render() {
        return(
            <div className="Body">
                <Modal
                    open={this.state.loginModal}
                    size='mini'
                >
                    <Modal.Header>Sign into your client account</Modal.Header>
                    <Modal.Content>
                        <Form className='Form'>
                            <Form.Input
                                label='ID:'
                                placeholder={'XXX-YYYYYYY-Z'}
                                pattern={'[0-9]{3}-[0-9]{7}-[0-9]{1}'}
                                maxLength={13}
                                onChange={(e)=>this.onChangeUsername(e)}/>
                            <Form.Input
                                label='Password'
                                placeholder={'Insert Password'}
                                type='password'
                                onChange={(e)=>this.onChangePassword(e)}
                            />
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                      <Button
                          negative
                          onClick={()=>this.OnLogInModal(false)}>
                        Cancel
                      </Button>
                      <Button
                          positive
                          onClick={this.submitUser.bind(this)}
                      >
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
