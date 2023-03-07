import React from 'react'
import classes from "./Button.module.css"

const Button = (props) => {
    return (
        <button type={props.type === "submit" ? "submit" : "button"}
            className={classes.button}
            onClick={props.btnClick}>
            {props.btnName}
        </button>
    )
}

export default Button;