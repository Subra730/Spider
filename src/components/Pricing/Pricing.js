import React, { Component } from "react";
import './Pricing.css'


class Pricing extends Component {
    render() {
        return (

            <article className="cf">
                <div className="fl w-100 w-50-ns bg-near-white tc">

                    <h1 className="f4 bold center mw5">Driving Lesson Package</h1>

                    <ul className="list pl0 ml0 center mw5 ba b--light-silver br3">
                        <li className="ph3 pv2 bb b--light-silver">1  x 60 mins Lesson  $60</li>
                        <li className="ph3 pv2 bb b--light-silver">5  x 60 mins Lesson $270 - Save $30</li>
                        <li className="ph3 pv2 bb b--light-silver">10 x 60 mins Lesson $520 - Save $80</li>
                    </ul>

                </div>
                <div className="fl w-100 w-50-ns bg-light-gray tc">

                    <h1 className="f4 bold center mw5">Drive Test Services</h1>

                    <ul className="list pl0 ml0 center mw5 ba b--light-silver br3">
                        <li className="ph3 pv2 bb b--light-silver">45 mins Lesson + Drive Test - $170</li>
                        <li className="ph3 pv2 bb b--light-silver">60 mins Lesson + Drive Test - $190</li>
                        <li className="ph3 pv2 bb b--light-silver">90 mins Lesson + Drive Test - $210</li>
                    </ul>

                </div>
            </article>

        );
    }
}

export default Pricing;

