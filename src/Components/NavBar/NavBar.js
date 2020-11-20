import React, {Component} from 'react'
import { Menu, Button } from 'semantic-ui-react'
import logo from "../../htmh_logo.png"
import {apiEndPoints, axiosConfig, endPoints, serverURL} from "../../Utils/Config";
import {removeAccessToken} from "../../AAA/Session";
import axios from "axios";


export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: ''
        }
    }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
        this.props.history.push(endPoints.defaultPage + `${name}` )

    }

    componentDidMount() {
        axios.get(serverURL + apiEndPoints.basic.fullname, axiosConfig)
            .then(res=>{
                if (res.status === 200){
                    this.setState({fullname: res.data.fullname})
                }
            })
            .catch(e=> console.log('A problem has occurred', e))
    }

    logOut(){
      removeAccessToken().then(res=>{
          if (res.status === 200){
              this.props.historyPush.push(endPoints.loginPage)
          }
      }
      );
    };

    render() {
        const { activeItem } = this.state;
        return(

            <Menu stackable inverted>
                <Menu.Item>
                  <img src={logo} />
                </Menu.Item>
                <Menu.Item
                  name='home'
                  active={activeItem === 'home'}
                  onClick={this.handleItemClick}
                >
                    <span><b>Home</b></span>
                </Menu.Item>


                <Menu.Item
                  name='services'
                  active={activeItem === 'services'}
                  onClick={this.handleItemClick}
                >
                    <span><b>Services</b></span>
                </Menu.Item>
                <Menu.Item
                  name='settings'
                  active={activeItem === 'settings'}
                  onClick={this.handleItemClick}
                >
                    <span><b>Settings</b></span>
                </Menu.Item>
                <Menu.Item
                  onClick={this.logOut.bind(this)}
                  position={'right'}
                  disabled={true}
                >
                    <Button
                        animated={'vertical'}
                        secondary
                        onClick={this.logOut.bind(this)}
                    >
                        <Button.Content visible>{this.state.fullname}</Button.Content>
                        <Button.Content hidden> Logout</Button.Content>
                    </Button>
                </Menu.Item>
            </Menu>

        );
    }
}
