import React, { Component } from 'react' 
import Questions from './Questions';
import Category from './Category';
import Difficulty from './Difficulty';
import Answers from './Answers'; 
export default class QuizBar extends Component {
    constructor(props){
        super(props) 
        this.state={ 
            Stop:false,
            SuccessLabel:"", 
            opt:this.shuffle(this.props.data.incorrect_answers.concat(this.props.data.correct_answer)),
        } 
    }  
    checkans=(value)=>{ 
        if(value==this.props.data.correct_answer){
            this.setState({SuccessLabel:"Correct..!"});
            this.props.score(true);
        }else{
            this.setState({SuccessLabel:"Incorrect."});
            this.props.score(false);
        }
        this.props.AllowNext(false);
    }
   StopAns=(value)=>this.setState({Stop :value}) 
     shuffle=(array)=> {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }
 componentDidUpdate=(pre)=>pre.data != this.props.data? 
       this.setState({SuccessLabel:"",opt:this.shuffle(this.props.data.incorrect_answers.concat(this.props.data.correct_answer))})
 :null   
    render() {  
        return (
            <div> 
                <Category   text={this.props.data.category}     />
                <Difficulty text={this.props.data.difficulty}   />
                <Questions  text={this.props.data.question}     />
                <hr />
                <Answers    
                    text={this.state.opt} 
                    check={this.checkans} 
                    StopAns={this.StopAns}
                    IsInvokAns={this.props.IsInvokAns}
                    Invoke_Revoke={this.props.Invoke_Revoke}
                /> 
                <h1>{this.state.SuccessLabel}</h1> 
            </div>
        )
    }
}
