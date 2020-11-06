import React, { Component } from 'react';
import {Label, Input, Icon} from "semantic-ui-react";
import '../../Styles/HomePage.css'


export default class EditableLabel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            text: this.props.text,
            prevText: ''
        };
    }

    onClickLabel(){
        this.setState((prevState)=>(
            {
                ...prevState,
                edit: true,
                prevText: prevState.text
            }
        ))
    }

    handleKeyPress(e){
        if (e.key === 'Enter'){
            this.setState({edit:false})
            this.props.onChange(this.state.text)
        }
    }

    render() {
        return(
            (!this.state.edit || this.props.disable) ?
                    <Label style={{backgroundColor:'white'}} size={'large'} onClick={()=>this.onClickLabel()}>
                        <Icon size={'large'} name={'computer'}/>{this.state.text}
                    </Label>
                    :
                    <Input
                        size={'large'}
                        defaultValue={this.state.text}
                        icon={'computer'}
                        iconPosition={'left'}
                        autoFocus
                        onKeyPress={(e)=> this.handleKeyPress(e)}
                        onChange={(e, {value})=>this.setState({text: value})}
                        onBlur={()=> {
                            this.setState({edit: false})
                            this.props.onChange(this.state.text)
                        }}
                    />
        );


    }


}
