import React from 'react'
import classes from './Preloader.module.css'

let Preloader = ({width = ''}) => {
    return (
        <div className={classes.ldsRollerWrapper} style={(width === '50') ? {height: '50px'} : null}>
            <div className={classes.ldsRoller}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Preloader