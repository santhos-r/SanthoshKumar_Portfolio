import React from 'react'
import classes from "./Button.module.css"

const Button = (props) => {
    return (
        <button type="button"
            className={classes.button}
            onClick={() => {
                window.open(
                    "https://drive.google.com/file/d/1diUf9LUJt5dHaF8Wkm54DJR5pq6AyzXn/view?usp=share_link"
                )
            }}>
            Download CSV
        </button>
    )
}

export default Button;