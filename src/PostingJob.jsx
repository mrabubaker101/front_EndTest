import React, { Component } from 'react'
import { CheckBox } from '@material-ui/icons';
import { TextField,Button, List, Radio } from '@material-ui/core'; 

export default class PostingJob extends Component {
    state={
        questions:[],
        q:""
    }
    handel=(e)=>{ 
        this.setState({q:e.target.value})
        console.log(e.target.value);
    }
    addmore=()=>{ 
let ques=this.state.q;
let ans=[];
let data =ans.push(ques)
this.setState({questions:this.state.questions.concat(ques),q:""})
 
    }
    render() { 
         return (
            <div style={{margin:"100px"}}>
                <h1>JOB Posting</h1>

                <TextField label="JOB Title" fullWidth/><br></br>
                <TextField label="JOB Description" fullWidth/><br></br><br />
                <TextField label="ADD Question" value ={this.state.q} fullWidth 
                onChange={e=>{
                    const {value} =e.target;
                    this.setState({q:value})}   
                }/><Button onClick={this.addmore}>Add</Button>
                
                {this.state.questions.length>0?
                <div>
            <b>Required Question</b><hr />
                {this.state.questions.map((a,b)=>(
                    <div key={b}>
                    <h5 >{a}</h5>
                    </div>
                ))} 

                </div>:null}
                
                <Button style={{float:"right"}} variant="contained" color="secondary">Post Job</Button> <br />
            </div>
        )
    }
}
