import React, { Component } from 'react'

import q from "../questions.json";
import TextField from "@material-ui/core/TextField";
import { 
  Button,
  Grid,
  LinearProgress,
  Paper, 
} from "@material-ui/core";
import ShowQuestions from './ShowQuestions'; 
import Prac from './Prac';
import { ProgressBar } from 'react-bootstrap';
export default class MyComponents extends Component {
    constructor(props){
        super(props);
        this.state={
            questions:q.map(({question})=>question.replace(/%20/g, ' ').replace(/%3F/,'?')),
            C_Answer:q.map(({correct_answer})=>correct_answer),
            Stepper:1,
            countCorrect:0,
            countWrong:0,
            btndis:false,
            //btnnext:true
        }
    } 

    componentDidMount(){  
    }
    setNext=()=>{
        this.setState({Stepper:this.state.Stepper+1 ,btndis:!this.state.btndis});
    }
    getScore=(val)=>{
       // console.log(val); 
if (val) {
    this.setState({countCorrect:this.state.countCorrect+1})
}
else{
    this.setState({countWrong:this.state.countWrong+1})
}
 
    }

showbtn=(va)=>{
this.setState({btndis:va});
//this.setState({btnnext:va}); 
    } 
    render() {
        let{countWrong,countCorrect}=this.state;
        let per = ((countCorrect/countWrong)*100); 
        return (<div style={{margin:"20px"}}>

{this.state.Stepper<20?<Grid container spacing={3}> 
                <Grid item xs={12}>
                <LinearProgress variant="determinate" value={this.state.Stepper*5} style={{height:"20px"}} />
                
                    <h3>Question {this.state.Stepper} of {this.state.questions.length}</h3>
                    
                    <Paper>
                         <Prac 
                         isnext={this.showbtn} 
                         dis={this.state.btndis} 
                         cr_Func={this.getScore} 
                         data={q[this.state.Stepper]}/> 
                    </Paper>

<h5>Score {per}%</h5>
                    <ProgressBar>
                        <ProgressBar striped variant="success" now={0} key={1} />
                         <ProgressBar variant="warning" now={per} key={2} />
                        <ProgressBar striped variant="danger" now={0} key={3} />
                    </ProgressBar> 
                </Grid>
                 <Button onClick={this.setNext} disabled={this.state.btnnext}>NEXT</Button>
                 
                 <br />
                 <br />              
            </Grid> :<h1>Good Luck</h1>}

        </div> )      
    }
} 