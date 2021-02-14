import React, { Component } from 'react';
import '../index.css';

export class EmployeeList extends Component {

    state = {
        employeeList: [],
        loading: true
    };

    componentDidMount() {
        this.populateEmployeeList();
    }

    render() {
        return (
            <>
                <h1>Employees</h1>
                <div className="listing">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.state.employeeList.map(employee =>
                                <tr key={employee.ID}>
                                    <td>{employee.Name}</td>
                                    <td>{employee.EmailDefault}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </>
        );
    }

    // call server for data
    async populateEmployeeList() {
        const response = await fetch('employeeList');
        const data = await response.json();
        this.setState({employeeList: data, loading: false });      
    }
}
