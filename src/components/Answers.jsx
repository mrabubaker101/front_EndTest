import React,{Component} from 'react'
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';

export default class Answers extends Component {
    constructor(props){
        super(props)   
    }   
    check=(val)=>{
        this.props.check(val); 
        this.props.Invoke_Revoke(true);
    }
    
    render() {
        return (
            <Grid container spacing={1} alignContent="centre"> 
             <Grid item xs={1}  > 
                </Grid>
                 {this.props.text.map((d,i) => 
                <Grid item sm key={i} item xs={10}>
                        <Button
                         size="small"
                         style={{minWidth:"200px"}}
                         variant="contained" 
                         color="primary"
                         disabled={this.props.IsInvokAns}   
                         onClick={()=>this.check(d)}
                         >
                            {d.toString().replace(/%20/g,' ').replace(/%24/g,'$').replace(/%2C/g,',')}
                        </Button>
                </Grid> 
                     )} 
                      <Grid item xs={1}  > 
                </Grid>
             </Grid>    
        )
    }
}
