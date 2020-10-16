import React, {Component} from "react";
import NavBar from "../../Components/NavBar/NavBar";
import '../../Styles/Layout.css'
import Services from "../Services/Services";


export default class Layout extends Component{

    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return(
            <div className={'Body'}>
                <NavBar/>
                {/*<Home/>*/}
                <Services/>
            </div>
        );
    };
}
