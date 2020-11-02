import React, {Component, Fragment} from 'react'
import {Redirect, Route} from 'react-router-dom'

export class PrivateRoute extends Component{
    constructor(props) {
        super(props);
        this.state={
            authorization: null,
            response: false,
            redirectPath:'',
            propsToProtectedRoute:null
        };
    }

    componentDidMount() {
        this.props.authorization().then(auth=>{
            console.log("The response about authorization for rendering is ==>", auth.authResp);
            this.setState({authorization: auth.authResp, response: true, propsToProtectedRoute:auth.othersProps})
        });
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.redirectPath !== nextProps.redirectPath) {
          return {
            redirectPath: nextProps.redirectPath
          };
        }
        // Return null to indicate no change to state.
        return null;
    }

    render() {

        const props = this.state.propsToProtectedRoute;

        if(this.state.response){
            return (
                <Fragment>
                    {this.state.authorization
                        ? <Route path={this.props.path} render={
                            ()=>React.cloneElement(this.props.children, {props})}
                        />
                        : <Redirect to={this.state.redirectPath}/>}
                </Fragment>
            )
        }

        else {
            return null
        }
    }
}
