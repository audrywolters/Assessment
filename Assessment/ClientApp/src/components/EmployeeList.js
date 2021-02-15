import React, { Component } from 'react';
import './Detail.css';

export class EmployeeList extends Component {

    state = {
        employeeList: [],
        employee: {},
        isEditMode: false,
        inputs: []
    };

    componentDidMount() {

        let allInputs = document.querySelectorAll("input");

        // AUDRY - react doesn't like this
        // ...can I leave them uncontrolled??
        this.setState({
            inputs: allInputs
        });

        this.getEmployeeList();
    }

    setEmployee(e) {
        // AUDRY - react doesn't like this
        // clear old data (or else Elmer's fax will show up on John's)
        for (let i = 0; i < this.state.inputs.length; i++) {
            let input = this.state.inputs[i];
            input.value = "";
        }

        // set the employee in the detail view
        this.setState({ employee: e })
    }

    // AUDRY - fix
    handleChange = (evt) => {
        let value = evt.target.value;

        // AUDRY - doesn't work either. there has got to be a way to update an object
        // i refuse to add each property to state. that's ridiculous. urg!

        let objAndProp = 'employee.' + evt.target.name;
        this.setState({
            [objAndProp]: value
        });
    }

    render() {
        return (
            <>
                {JSON.stringify(this.state.employee)}

                <h1>Employees</h1>
                <div className="listing">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Direct</th>
                                <th><button>New Employee</button></th> 
                                { /* <th><button onClick={() => this.setEmployee()}>New Employee</button></th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.employeeList.map(e =>
                                <tr key={e.id}>
                                    <td>{e.name}</td>
                                    <td>{e.emailDefault}</td>
                                    <td>{e.phoneDirect}</td>
                                    <td><button onClick={() => this.setEmployee(e)}>Edit</button>
                                        <button onClick={() => this.deleteEmployee(e.id)}>Delete</button></td>
                                </tr>
                            ) }
                        </tbody>
                    </table>
                </div>

                <div className="detail">
                    <div className="detailHeader"> 
                        <span>Employee</span>
                        { /* below wont work because of evil onChange business */ }
                        <button onClick={() => this.addNewEmployeeData(this.state.employee)}>Save</button>
                    </div>

                    <ul>
                        <li><label>Name:</label>        <input name="name"         onChange={this.handleChange} type="text" value={this.state.employee.name} /></li>
                        <li><label>Title:</label>       <input name="title"        onChange={this.handleChange} type="text" value={this.state.employee.title} /></li>
                        <li><label>Direct:</label>      <input name="phoneDirect"  onChange={this.handleChange} type="text" value={this.state.employee.phoneDirect} /></li>
                        <li><label>Cell:</label>        <input name="phoneCell"    onChange={this.handleChange} type="text" value={this.state.employee.phoneCell} /></li>
                        <li><label>Home:</label>        <input name="phoneHome"    onChange={this.handleChange} type="text" value={this.state.employee.phoneHome} /></li>
                        <li><label>Fax:</label>         <input name="faxDefault"   onChange={this.handleChange} type="text" value={this.state.employee.faxDefault} /></li>
                        <li><label>Home Fax:</label>    <input name="faxHome"      onChange={this.handleChange} type="text" value={this.state.employee.faxHome} /></li>
                        <li><label>Email:</label>       <input name="emailDefault" onChange={this.handleChange} type="text" value={this.state.employee.emailDefault} /></li>
                        <li><label>Email Home:</label>  <input name="emailHome"    onChange={this.handleChange} type="text" value={this.state.employee.emailHome} /></li>
                        { /* checkbox will need a special event handler */ }
                        <li><label>Is Active:</label>   <input name="isActive" type="checkbox" checked={this.state.employee.isActive} /></li>
                    </ul>
                </div>   
            </>
        );
    }

    //// call the server ////
    // AUDRY - try/catch 

    // get all
    async getEmployeeList() {
        const response = await fetch(`employeeList`);
        const data = await response.json();
        this.setState({ employeeList: data });
    }

    // get one
    async getEmployee(id) {
        const response = await fetch(`employeeList/${id}`);
        const data = await response.json();
        this.setState({ employee: data });
    }

    // create/update
    async addNewEmployeeData(employee) {
        let jsonEmployee = JSON.stringify(employee);
        const response = await fetch(`employeeList/${jsonEmployee}`, { method: 'POST' });
        const data = await response.json();
        this.setState({ employeeList: data });
    }

    // delete
    async deleteEmployee(id) {
        const response = await fetch(`employeeList/${id}`, { method: 'DELETE' });
        const data = await response.json();
        this.setState({ employeeList: data });
    }
}
