import React, { Component } from "react";
import './Pricing.css'


class Pricing extends Component {
    render() {
        return (
            <article className="cf fl w-50 bg-near-white tc" >

                <div className="fl w-50 bg-near-white tc" >
                    <h1>1  x 60 mins lesson</h1>
                    <h1>5  x 60 mins lesson</h1>
                    <h1>10 x 60 mins lesson</h1>
                    <h1>Drive Test Services</h1>
                    <h1>1 x 60 mins lesson and Drive Test</h1>
                    <h1>1 x 90 mins lesson and Drive Test</h1>
                </div>

                <div className="fl w-50 bg-light-gray tc">
                    <h1>$60</h1>
                    <h1>$270 - Save $30</h1>
                    <h1>$520 - Save $80</h1>
                    <h1>"-------------"</h1>
                    <h1>$190</h1>
                    <h1>$210</h1>
                </div>

            </article>
        );
    }
}

export default Pricing;
