import React from 'react'
import { Typography } from '@material-ui/core';

export default function Questions(props) {
    return (<Typography style={{minHeight:"80px"}} variant="h6" gutterBottom>
                { props.text.toString().replace(/%20/g,' ')
                        .replace(/%3F/g,'?').replace(/%2C/g,',')
                        .replace(/%22/g,'"').replace(/%27/g,"'")} 
            </Typography> 
    )
}
