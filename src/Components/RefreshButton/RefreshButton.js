import React, {Component} from 'react';
import {Button} from 'semantic-ui-react';


export default class RefreshButton extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <Button
                floated={'left'}
                toggle
                content={'Refresh'}
                icon={'refresh'}
                labelPosition={'left'}
                onClick={()=>window.location.reload(false)}
            />
        )
    }
}
