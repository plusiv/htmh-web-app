import React, {Component} from 'react'
import { Menu } from 'semantic-ui-react'
import logo from "../../htmh_logo.png"

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

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
          name='logout'
          active={activeItem === 'logout'}
          onClick={this.handleItemClick}
          position={'right'}
        >
          <span><b>Logout</b></span>
        </Menu.Item>
      </Menu>

        );
    }


}
