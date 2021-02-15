import React, { Component } from 'react';
import './EmployeeList.css';

export class EmployeeList extends Component {

    state = {
        employeeList: [],
        employee: {},
        loading: true
    };

    componentDidMount() {
        this.populateEmployeeList();
    }

    clickRow(id) {
        console.log("hi", id);
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
                                <th>Phone Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.employeeList.map(employee =>
                                <tr key={employee.id} onClick={() => this.getEmployee(employee.id)}>
                                    <td>{employee.name}</td>
                                    <td>{employee.emailDefault}</td>
                                    <td>{employee.phoneNumberDirect}</td>
                                </tr>
                            ) }
                        </tbody>
                    </table>
                </div>
                <div className="detail">
                    <ul>
                        <li>
                            {JSON.stringify()}</li>
                        <li>id: {this.state.employee.id}</li>
                        <li>name: {this.state.employee.name}</li>
                        <li>fax: {this.state.employee.faxDefault}</li>
                    </ul>
                </div>  
            </>
        );
    }

    // call server for data
    async populateEmployeeList() {
        console.log('calling for all!...');
        const response = await fetch(`employeeList`);
        const data = await response.json();
        this.setState({employeeList: data, loading: false });      
    }

    // call server for data
    async getEmployee(id) {
        console.log('calling for one!...', id);
        const response = await fetch(`employeeList/${id}`);
        const data = await response.json;
        console.log('employee obj ', data);
        this.setState({ employee: data, loading: false });
    }
}
