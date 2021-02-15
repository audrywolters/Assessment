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

        this.setState({
            inputs: allInputs
        });

        this.getEmployeeList();

        // AUDRY - fix
        //this.disableNoNoEdit();
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
    handleChange(evt) {
        const value = evt.target.value;
        
        //this.setState({
        //    employee.[evt.target.name]: value
        //});
    }

    // AUDRY - fix
    //disableNoNoEdit() {

    //    for (let i = 0; i < this.state.inputs.length; i++) {
    //        let input = this.state.inputs[i];
    //        if (this.state.isEditMode === true) {
    //            input.setAttribute("disabled", "false");
    //        } else {
    //            input.setAttribute("disabled", "true");
    //        }
    //    }
    //}

    // AUDRY - fix
    //toggleEditMode = () => {
    //    console.log('edit?', this.state.isEditMode);

    //    this.setState(prevState => ({
    //        isEditMode: !prevState.isEditMode
    //    }));

    //    this.disableNoNoEdit();
    //}

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
                                <th><button>New Employee</button></th>
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
                        <button onClick={() => this.updateEmployee(this.state.employee)}>Save</button>
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
    // AUDRY - try/catch for these

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

    // update
    async updateEmployee(employee) {
        const response = await fetch(`employeeList/${employee}`, { method: 'PUT' });
        const data = await response.json();
        this.setState({ employee: data });
    }

    // delete
    async deleteEmployee(id) {
        const response = await fetch(`employeeList/${id}`, { method: 'DELETE' });
        const data = await response.json();
        this.setState({ employeeList: data });
    }
}
