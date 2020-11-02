import React, {Component} from 'react'
import { Menu } from 'semantic-ui-react'
import logo from "../../htmh_logo.png"
import {endPoints} from "../../Utils/Config";
import {removeAccessToken} from "../../AAA/Session";
import {Redirect} from "react-router-dom";

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
        this.props.history.push(endPoints.defaultPage + `${name}` )

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
        console.log(this.props)
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
                >
                  <span><b>Logout</b></span>
                </Menu.Item>
            </Menu>

        );
    }


}
