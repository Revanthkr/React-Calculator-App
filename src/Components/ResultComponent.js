import React from 'react';

function ResultComponent(props) {

    return (
        <div className="alert alert-secondary result">
            <p className="m-0">{props.result}&nbsp;</p>
        </div>
    );

}

export default ResultComponent;