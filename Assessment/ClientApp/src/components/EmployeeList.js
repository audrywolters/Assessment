import React, { Component } from 'react';
import './EmployeeList.css';

export class EmployeeList extends Component {

    state = {
        employeeList: [],
        employee: {},
        loading: true
    };

    componentDidMount() {
        this.getEmployeeList();
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
                                <th>Direct Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.employeeList.map(e =>
                                <tr key={e.id} onClick={() => this.setState({ employee: e })}>
                                    <td>{e.name}</td>
                                    <td>{e.emailDefault}</td>
                                    <td>{e.phoneDirect}</td>
                                </tr>
                            ) }
                        </tbody>
                    </table>
                </div>
                <div className="detail">
                    <ul>
                        <li><h3>Employee</h3></li>
                        <li>name: {this.state.employee.name}</li>
                        <li>fax: {this.state.employee.faxDefault}</li>
                    </ul>
                </div>  
            </>
        );
    }

    //// call the server ////
    // get all
    async getEmployeeList() {
        const response = await fetch(`employeeList`);
        const data = await response.json();
        this.setState({employeeList: data, loading: false });      
    }

    // get one
    async getEmployee(id) {
        const response = await fetch(`employeeList/${id}`);
        const data = await response.json();
        this.setState({ employee: data, loading: false });
    }
}