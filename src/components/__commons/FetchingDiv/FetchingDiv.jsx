import React from 'react';

const FetchingDiv = () => {
    return (
        <div className='fetchingDiv flexColumn wh100'>
            <div className='fetchingDiv-header flex'>
                <div className='fetchingDiv-header_left'>

                </div>
                <div className='fetchingDiv-header_right'>

                </div>
            </div>
            <div className='fetchingDiv-main'><span>Loading...</span></div>
        </div>
    );
};

export default FetchingDiv;