import React, {useEffect, useState} from 'react';
import refreshIcon from "../../img/refresh.png";
import {NavLink} from "react-router-dom";

const Header = ({getNewsTC}) => {

    const [seconds, setSeconds] = useState(59)

    useEffect(() => {
        getNewsTC()
    }, [])

    useEffect(() => {
        let timer
        if (seconds > 0) {
            timer = setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
            getNewsTC().then(() => setSeconds(59));
        }
        return () => {
            clearTimeout(timer);
        }
    }, [getNewsTC, seconds])

    const refresh = () => {
        setSeconds(59)
        getNewsTC()
    }

    return (
        <header className='header'>
            <div className='wrapper'>
                <div className='header__wrapper flex'>
                    <div className='header__wrapper-block flex'>
                        <span>
                            {seconds}
                        </span>
                        <NavLink to={'/'} className='defaultLink'>
                            <h1 className='header__title'>Hacker News</h1>
                        </NavLink>
                        <span onClick={refresh}>
                            <img src={refreshIcon} alt="refresh"/>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;