import React from 'react'
import { Typography } from '@material-ui/core'; 
export default function Category(props) {
    return ( <Typography variant="h6" color="textSecondary" gutterBottom>
                {props.text.toString().replace(/%20/g,' ')
                            .replace(/%3A/,':').replace(/%26/,'&')}
            </Typography>
    )
}
