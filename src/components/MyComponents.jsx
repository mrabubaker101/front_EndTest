import React, { Component } from 'react'
import q from "../questions.json"; 
import { 
  Button,
  Grid,
  LinearProgress,
  Paper, 
} from "@material-ui/core"; 
import QuizBar from './QuizBar';
import { ProgressBar } from 'react-bootstrap'; 
import { Typography } from '@material-ui/core'; 
export default class MyComponents extends Component {
    constructor(props){
        super(props);
        this.state={
            questions:q.map(({question})=>question),
            C_Answer:q.map(({correct_answer})=>correct_answer),
            AllowNext:false,
            IsInvokAns:false,
            Stepper:0,
            countRight:0,
            countWrong:0,
            DisableNext:true, 
        }
    }  
    setNext=()=>this.setState({Stepper:this.state.Stepper+1,DisableNext:true,IsInvokAns:false })
    AllowNext=(value)=>this.setState({DisableNext: value})
    getScore=(val)=>(val)? this.setState({countRight:this.state.countRight+1}):this.setState({countWrong:this.state.countWrong+1})
    Invoke_Revoke=(value)=>this.setState({IsInvokAns:value})
    showbtn=(va)=>this.setState({btndis:va})

    render() {
        let{countRight,countWrong,IsInvokAns,Stepper,questions}=this.state;
        let percentage = ((countRight/questions.length)*100);
        let Score = ((countRight/Stepper)*100); 
        if (Number.isNaN(Score)) 
            Score =0;
        if (!Number.isFinite(Score)) 
            Score=0;
 
        return (<div style={{margin:"20px"}}  >

        { Stepper < questions.length?<Grid container spacing={3}  > 
                <Grid item xs={2}  > 
                </Grid>
                <Grid item xs={8}  > 
                <LinearProgress variant="determinate" value={ Stepper*5} style={{height:"15px"}} />
                <br />
                    <Typography variant="h5" >Question { Stepper+1} of {  questions.length}</Typography>
                    
                    

                    <Paper style={{minHeight:"270px"}} elevation={1}>
                         <QuizBar  
                            data={q[Stepper]}
                            AllowNext={this.AllowNext}
                            Invoke_Revoke={this.Invoke_Revoke}
                            IsInvokAns= {IsInvokAns}
                            score={this.getScore}
                        />   
                    </Paper>
                    
                    
                    <br />
                    <Button style={{float:"right"}} size="large" color="secondary" variant ="contained"
                     onClick={this.setNext} disabled={this.state.DisableNext}>
                        NEXT
                    </Button>
                     
                    <br /><h5>Score {parseInt(Score) }%</h5>
                    <ProgressBar>
                        <ProgressBar striped variant="success" now={percentage} key={1} />
                        <ProgressBar variant="warning" now={Score} key={2} /> 
                    </ProgressBar> 
                    <br />
                    <ProgressBar striped variant="success" now={100} style={{height:"5px",width:"100px"}}/> Percent
                    <ProgressBar striped variant="warning" now={100} style={{height:"5px",width:"100px"}}/> Score

                </Grid>
                 <Grid item xs={2} >                        
</Grid>  
                 <br />
                 <br />              
            </Grid> :<Grid container spacing={3}  > 
                <Grid item xs={2}  > 
                </Grid>
                <Grid item xs={8} > 
                <Paper style={{minHeight:"350px",marginTop:"20px"}} elevation={5}>
                    
                <Grid container spacing={3}  >
                    <Grid item xs={2}  > 
                    </Grid>
                    
                    <Grid item xs={8}  > 
                         <h4>  <b> Thankyou for taking this Quiz.</b></h4><hr /><br />
                        <Typography variant="h6" >Exam Details : </Typography>
                    <hr />
                    <h6>Total Question: {<b style={{margin:"100px"}}>{questions.length}</b>}</h6>
                    <h6>Total Correct Answer(s):{<b style={{margin:"40px"}}>{countRight}</b>}</h6>
                    <h6>Total Wrong Answer(s):{<b style={{margin:"40px"}}>{countWrong}</b>}</h6>
                    <h6>Percentage:{<b style={{margin:"40px"}}>{percentage} %</b>}</h6>
                    <h6>Over All Score:{<b style={{margin:"40px"}}>{Score} </b>}</h6> 
                    <h6>Grade:{<b style={{margin:"40px"}}>{percentage>50?"Normal (above 50 or higher)":"Failed (less then 50 or lowest)"} </b>}</h6>
                    <hr />
                    <h6 >This App is Developed By : Muhammad Abu Baker</h6>
                    </Grid>
                    
                    <Grid item xs={2}>
                     </Grid>
                </Grid>

                </Paper>
               
                </Grid>
                 <Grid item xs={2} ></Grid> 
                 <br />              
            </Grid>}

        </div> )      
    }
} 