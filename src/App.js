import React, { Component } from 'react';
import './App.css';

import { HashRouter, NavLink, Route } from 'react-router-dom';

import Home from "./Home";
import Pricing from "./components/Pricing/Pricing";
import Register from "./components/Register/Register";
import TestTips from "./components/TestTips/TestTips";


class App extends Component {
    render() {
        return (
            <HashRouter>

                <div className="App">
                    <header className="sans-serif">

                        <div className="cover bg-left bg-center-l">
                            <div className="bg-black-80 pb5 pb6-m pb7-l">
                                <nav className="dt w-100 mw8 center">

                                    <div className="dtc v-mid tr pa3">
                                        <div className="dib w2 h2 pa1 ba b--white-90 grow-large border-box"></div>

                                        <div className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3">
                                            <NavLink className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" to="/">Home</NavLink>
                                            <NavLink className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" to="/Pricing">Pricing</NavLink>
                                            <NavLink className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" to="/Home">Test Tips</NavLink>
                                            <NavLink className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3 ba" to="/Home">Register</NavLink>
                                        </div>

                                        <div className="content">
                                            <Route exact path="/" component={Home}></Route>
                                            <Route exact path="/Pricing" component={Pricing}></Route>
                                            <Route exact path="/Home" component={Home}></Route>
                                            <Route exact path="/Home" component={Home}></Route>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </header>
                </div>

            </HashRouter>
        );
    }
}

export default App;
