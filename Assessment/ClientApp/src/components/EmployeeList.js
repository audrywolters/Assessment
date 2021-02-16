import React, { Component } from 'react';
import './Detail.css';

export class EmployeeList extends Component {

    state = {
        employeeList: [],
        employee: {}
    };

    componentDidMount() {
        // set all inputs in detail form to empty strings
        this.resetEmployeeDetail();

        // calls the server and sets employees into the listing view
        this.getEmployeeList();
    }

    handleInputChange = (evt) => {
        // make a copy of employee so state doesn't get upset about immutablity
        let newEmployee = this.state.employee;

        // use <input name="foo" as variable so this method works for each input
        newEmployee[evt.target.name] = evt.target.value;

        // set that state!
        this.setState({
            employee: newEmployee
        })

        // AUDRY - it would be nice if the changes didn't update in listing
    }

    resetEmployeeDetail() {
        // safely retrieve and set input data to empty string
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );

        this.setState({
            employee: [{}]
        });
	}

    setEmployeeDetail(emp) {
        // clear old data
        this.resetEmployeeDetail();

        // set the employee in the detail view
        this.setState({ employee: emp })
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
                                <th><button onClick={() => this.resetEmployeeDetail()}>New Employee</button></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.employeeList.map(emp =>
                                <tr key={emp.id}>
                                    <td>{emp.name}</td>
                                    <td>{emp.emailDefault}</td>
                                    <td>{emp.phoneDirect}</td>
                                    <td><button onClick={() => this.setEmployeeDetail(emp)}>Edit</button>
                                        <button onClick={() => this.deleteEmployee(emp.id)}>Delete</button></td>
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
                        <li> <label>Name:</label>        <input name="name"          value={this.state.employee.name}          onChange={this.handleInputChange}  type="text" /> </li>
                        <li> <label>Title:</label>       <input name="title"         value={this.state.employee.title}         onChange={this.handleInputChange}  type="text" /> </li>
                        <li> <label>Direct:</label>      <input name="phoneDirect"   value={this.state.employee.phoneDirect}   onChange={this.handleInputChange}  type="text" /> </li>
                        <li> <label>Cell:</label>        <input name="phoneCell"     value={this.state.employee.phoneCell}     onChange={this.handleInputChange}  type="text" /> </li>
                        <li> <label>Home:</label>        <input name="phoneHome"     value={this.state.employee.phoneHome}     onChange={this.handleInputChange}  type="text" /> </li>
                        <li> <label>Fax:</label>         <input name="faxDefault"    value={this.state.employee.faxDefault}    onChange={this.handleInputChange}  type="text" /> </li>
                        <li> <label>Home Fax:</label>    <input name="faxHome"       value={this.state.employee.faxHome}       onChange={this.handleInputChange}  type="text" /> </li>
                        <li> <label>Email:</label>       <input name="emailDefault"  value={this.state.employee.emailDefault}  onChange={this.handleInputChange}  type="text" /> </li>
                        <li> <label>Email Home:</label>  <input name="emailHome"     value={this.state.employee.emailHome}     onChange={this.handleInputChange}  type="text" /> </li>
                        { /*  checkbox will need a special event handler */ }
                        <li> <label>Is Active:</label>   <input name="isActive" type="checkbox" checked={this.state.employee.isActive} />                                    </li>
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

    // create/update - i know it's bad to combine the two... but I have some reason...
    async updateCreateEmployee(employee) {
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
        // clear detail of deleted emp
        this.resetEmployeeDetail();
    }
}
