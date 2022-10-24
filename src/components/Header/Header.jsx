import React from 'react';
import refreshIcon from "../../img/refresh.png";

const Header = () => {
    return (
        <header className='header'>
            <div className='wrapper'>
                <div className='header__wrapper flex'>
                    <div className='header__wrapper-block flex'>
                        <h1 className='header__title'>Hacker News</h1>
                        <span>
                        <img src={refreshIcon} alt="refresh"/>
                    </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;