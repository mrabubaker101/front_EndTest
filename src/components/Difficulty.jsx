import React from 'react'
import { Rating } from '@material-ui/lab';

export default function Difficulty(props) {
    let rating=0;
        if (props.text=="hard") 
            rating=3
        else if (props.text=="easy")
            rating=1;
        else if (props.text=="medium")
            rating=2
    return (<Rating size="small" name="read-only" value={rating}  readOnly />)
}
