import React from 'react';
import {Route, Switch} from "react-router-dom";
import HomePageContainer from "../HomePage/HomePageContainer";

const Main = () => {
    return (
        <main className='main'>
            <div className='wrapper'>
                <div className='main__wrapper'>
                    <Switch>
                        <Route path={'/'} render={() => <HomePageContainer />}/>
                    </Switch>
                </div>
            </div>
        </main>
    );
};

export default Main;