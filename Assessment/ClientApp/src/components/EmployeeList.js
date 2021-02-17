import React, { Component } from 'react';
import './Listing.css';
import './Detail.css';

export class EmployeeList extends Component {

    state = {
        employeeList: [],
        employee: {}
    };

    componentDidMount() {
        // calls the server and sets all employees into the listing view
        this.getEmployeeList();
    }

    clickNewEmployee() {
        this.resetEmployeeDetail();
    }

    clickSaveEmployee(emp) {
        // set the employee in the detail view
        this.setState({ employee: emp })
    }

    handleCheckboxChange = (evt) => {
        // make a copy of employee so state doesn't get upset about immutablity
        let copyOfEmployee = this.state.employee;

        // this is different because instead of "", we need ".checked"
        copyOfEmployee[evt.target.name] = evt.target.checked;

        // set that state!
        this.setState({
            employee: copyOfEmployee
        })
    }

    handleInputChange = (evt) => {
        // make a copy of employee so state doesn't get upset about immutablity
        let copyOfEmployee = this.state.employee;

        // use <input name="foo" as variable so this method works for each input
        copyOfEmployee[evt.target.name] = evt.target.value;

        // set that state!
        this.setState({
            employee: copyOfEmployee
        })

        // AUDRY - it would be nice if the changes didn't update in listing
    }

    resetEmployeeDetail() {
        let newEmployee =
        {
            name: '',
            title: '',
            phoneDirect: '',
            phoneCell: '',
            phoneHome: '',
            faxDefault: '',
            faxHome: '',
            emailDefault: '',
            emailHome: '',
            isActive: true
        }

        this.setState({
            employee: newEmployee
        })
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
                <div className="listing">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Direct</th>
                                <th>
                                    <button className="newButton" onClick={() => this.clickNewEmployee()}>New Employee</button>
                                </th>
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
                        <button onClick={() => this.saveEmployee(this.state.employee)}>Save</button>
                    </div>

                    <ul>
                        <li> <label>Name:</label>        <input name="name"          value={this.state.employee.name}          onChange={this.handleInputChange}    type="text" />    </li>
                        <li> <label>Title:</label>       <input name="title"         value={this.state.employee.title}         onChange={this.handleInputChange}    type="text" />    </li>
                        <li> <label>Direct:</label>      <input name="phoneDirect"   value={this.state.employee.phoneDirect}   onChange={this.handleInputChange}    type="text" />    </li>
                        <li> <label>Cell:</label>        <input name="phoneCell"     value={this.state.employee.phoneCell}     onChange={this.handleInputChange}    type="text" />    </li>
                        <li> <label>Home:</label>        <input name="phoneHome"     value={this.state.employee.phoneHome}     onChange={this.handleInputChange}    type="text" />    </li>
                        <li> <label>Fax:</label>         <input name="faxDefault"    value={this.state.employee.faxDefault}    onChange={this.handleInputChange}    type="text" />    </li>
                        <li> <label>Home Fax:</label>    <input name="faxHome"       value={this.state.employee.faxHome}       onChange={this.handleInputChange}    type="text" />    </li>
                        <li> <label>Email:</label>       <input name="emailDefault"  value={this.state.employee.emailDefault}  onChange={this.handleInputChange}    type="text" />    </li>
                        <li> <label>Email Home:</label>  <input name="emailHome" value={this.state.employee.emailHome} onChange={this.handleInputChange} type="text" />    </li>
                        <li> <label className="checkboxLabel">Is Active:</label>   <input name="isActive" checked={this.state.employee.isActive} onChange={this.handleCheckboxChange} type="checkbox" /> </li>
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

    // create/update - there is only one save button
    async saveEmployee(employee) {
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
