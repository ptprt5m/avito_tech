import React from 'react';
import {Route, Switch} from "react-router-dom";
import HomePageContainer from "../HomePage/HomePageContainer";
import NewsPageContainer from "../NewsPage/NewsPageContainer";

const Main = () => {
    return (
        <main className='main'>
            <div className='wrapper'>
                <div className='main__wrapper'>
                    <Switch>
                        <Route path={'/'} exact render={() => <HomePageContainer />}/>
                        <Route path={'/:newsId'} render={() => <NewsPageContainer />}/>
                    </Switch>
                </div>
            </div>
        </main>
    );
};

export default Main;