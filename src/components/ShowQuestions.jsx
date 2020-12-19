import Rating from '@material-ui/lab/Rating'; 

import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap';

export default class ShowQuestions extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }

    
    render() {
        console.log("Props",this.props ); 
        let ra=0;
        if (this.props.rat=="hard") {
            ra=3
        }
        else if (this.props.rat=="easy"){
            ra=1;
        }
        else if (this.props.rat=="medium"){
            ra=2
        } 
        return (
            <div>
            <h3>{this.props.cat.toString().replace(/%20/g,' ')}</h3>
            <Rating name="read-only" value={ra}  readOnly />
            <h3>{this.props.question}</h3> 
            </div>
        )
    }
}

