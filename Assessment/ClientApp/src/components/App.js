import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { EmployeeList } from './EmployeeList';
import { ProjectList } from './ProjectList';
import './App.css';

export default class App extends Component {

    render() {
        return (
            <>
                {/* navigation in topmost page section */}
                <nav>
                    <Link to="/">Employees</Link>
                    <Link to="/projectList">Projects</Link>
                </nav>

                {/* get to and fro pages */}
                <main>
                    <Route exact path='/' component={EmployeeList} />
                    <Route path='/projectList' component={ProjectList} />
                </main>
            </>
        );
    }
}
