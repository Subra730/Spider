import React, { Component } from "react";

class Pricing extends Component {
    render() {
        return (
            <div className="App-header">

                <ol>
                    <h4>Lesson Packages</h4>
           
                    <li>1 x 60 mins lesson $60</li>
                    <li>5 x 60 mins lesson $270 - 10% Savings</li>
                    <li>10 x 60 mins lesson $520 - 13% Savings</li>
                    <li>1 x 60 mins lesson and 1 x Drive Test Services $190</li>
                    <li>1 x 90 mins lesson + 1 x Drive Test Services $210</li>
                </ol>
            </div>
        );
    }
}

export default Pricing;
