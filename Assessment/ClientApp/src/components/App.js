import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Employees } from './Employees';
import { Projects } from './Projects';
import { FetchData } from './FetchData';
import '../index.css';

export default class App extends Component {

    render() {
        return (
            <>
                <nav>
                    <Link to="/">Employees</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/fetch-data">Fetch</Link>
                </nav>
                <main>
                    <Route exact path='/' component={Employees} />
                    <Route path='/projects' component={Projects} />
                    <Route path='/fetch-data' component={FetchData} />
                </main>
            </>
        );
    }
}
