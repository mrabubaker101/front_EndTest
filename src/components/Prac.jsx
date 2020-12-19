import { Button } from '@material-ui/core';
import React, { Component } from 'react'
import ShowQuestions from './ShowQuestions';
 
export default class Prac extends Component {
    constructor(props){
        super(props) 
        this.state={ 
            lbl:""
        }
    }  
    checkans=(val)=>{ 
        let answ=this.props.data.correct_answer;
        if (val==answ) {
            this.setState({lbl:"Correct..!"}) 
            this.props.cr_Func(true);
        }   
        else{
            this.setState({lbl:"Incorrect."})
            this.props.cr_Func(false);
        }    
        this.props.isnext(true);
    }
 
    render() { 
        console.log(this.props.isDisa);
        let{isdisabled}=this.state;
        let{question}=this.props.data; 
        let ans=this.props.data.incorrect_answers;
        ans.push(this.props.data.correct_answer);
        //console.log("cate",this.props.data.category);

        return (
            <div> 
                <ShowQuestions rat={this.props.data.difficulty} cat={this.props.data.category} question={question.toString().replace(/%20/g,' ').replace(/%3F/g,'?')}/>
                {ans.map((d,i) =>
                <div > 
                <Button variant="contained" color="primary" 
                disabled={this.props.dis} 
                key={i} onClick={(va)=>this.checkans(d)}>
                    {d.toString().replace(/%20/g,' ')}
                </Button>  
                </div> )}
                <h1>{this.state.lbl}</h1> 
            </div>
        )
    }
}
