import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
        <div>
            <div>
                <h2>Teach Me 2 Drive</h2>
            </div>
            <div className="tc-l mt4 mt5-m mt6-l ph3">
                <h1 className="f2 f1-l fw2 white-90 mb0 lh-title">Developing safer drivers</h1>
                <h2 className="fw1 f3 white-80 mt3 mb4">with our structured lessons adapted to suit different learners</h2>
                <a className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" href="/">Call 1-800-999</a>
                <span className="dib v-mid ph3 white-70 mb3">or</span>
                <a className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3" href="/">Register your details for callback</a>
            </div>
        </div>
        );
    }
}

export default Home;