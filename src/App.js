import React, { Component } from 'react';
import ResultComponent from './Components/ResultComponent';
import KeypadComponent from './Components/KeypadComponent';

class App extends Component {
    constructor() {
        super();

        this.state = {
            result: ""
        }
    }

    calculate = () => {
        try {
            this.setState({
                // eslint-disable-next-line no-eval
                result: (eval(this.state.result) || "") + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    onClick = (button) => {
        if (button === "=") {
            this.calculate();
        } else if (button === "C") {
            this.reset();
        } else {
            this.setState({
                result: this.state.result + button
            })
        }
    };

    render() {
        return (
            <div>
                <div className="container text-center mt-5">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="p-2">Basic Calculator</h1>
                            <ResultComponent result={this.state.result} />
                            <KeypadComponent onClick={this.onClick} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;