import React, { Component } from 'react';
import '../style/index.css';

class KeypadComponent extends Component {
    render() {
        const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '+', '-', '*', '÷', '=', 'C'];
        return (
            <div className="row justify-content-center calculator">
                {keys.map((value, index) => {
                    return <button key={index} name={value} onClick={e => this.props.onClick(e.target.name)} className="btn btn-info btn-lg w-25 m-1">{value}</button>;
                })}
            </div>
        );
    }
}

export default KeypadComponent;