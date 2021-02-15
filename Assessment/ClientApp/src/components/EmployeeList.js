import React, { Component } from 'react';
import { Employee } from './Employee';
import './Detail.css';

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
                                <th>Direct</th>
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
                    <div className="detailHeader">
                        <span>Employee</span>
                        <button>Edit/Save</button>
                        <button>Delete</button>
                    </div>
                    <Employee employee={this.state.employee} />
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