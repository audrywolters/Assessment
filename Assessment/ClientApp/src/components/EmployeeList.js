import React, { Component } from 'react';
import { Listing } from './Listing';
import { Details } from './Details';
import '../index.css';

export class EmployeeList extends Component {

    state = {
        employeeList: [],
        loading: true
    };

    componentDidMount() {
        this.populateEmployeeListData();
    }

    render() {
        return (
            <>
                <h1>Employees</h1>
                <div class="listing">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employeeList.map(employee =>
                                <tr key={employee.ID}>
                                    <td>{employee.Name}</td>
                                    <td>{employee.EmailDefault}</td>
                                </tr>
                            )}
                        </tbody>
                    </table?
                </div>
            </>
        );˚
    }

    // call server for data
    async populateEmployeeList() {
        const response = await fetch('employee');
        const data = await response.json();
        this.setState({employeeList: data, loading: false });      
    }
}
