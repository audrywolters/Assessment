import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { EmployeeList } from './EmployeeList';
import { Projects } from './Projects';
import { FetchData } from './FetchData';
import '../index.css';

export default class App extends Component {

    render() {
        return (
            <>
                {/* navigation in topmost page section */}
                <nav>
                    <Link to="/">Employees</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/fetch-data">Fetch</Link>
                </nav>

                {/* get to and fro pages */}
                <main>
                    <Route exact path='/' component={EmployeeList} />
                    <Route path='/projects' component={Projects} />
                    <Route path='/fetch-data' component={FetchData} />
                </main>
            </>
        );
    }
}
