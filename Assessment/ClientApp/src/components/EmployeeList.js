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
        //this.disableNoNoEdit();
    }

    setEmployee(e) {
        // clear old data (or else Elmer's fax will show up on John's)
        for (let i = 0; i < this.state.inputs.length; i++) {
            let input = this.state.inputs[i];
            input.value = "";
        }

        // set the employee in the detail view
        this.setState({ employee: e })
    }


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
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.employeeList.map(e =>
                                <tr key={e.id} onClick={() => this.setEmployee(e)}>
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
                        { /* Not Working! has to do with this   button onClick={this.toggleEditMode}>Edit</button> */}
                        <button>Edit</button>

                        { /* editClicked, enable, click, save successful, disable */}
                        <button>Save</button>
                        <button>Delete</button>

                        { /* fudge - not clearing if empty */ }
                        <ul>
                            <li><label>Name:</label>        <input type="text" value={this.state.employee.name} /></li>
                            <li><label>Direct:</label>      <input type="text" value={this.state.employee.phoneDirect} /></li>
                            <li><label>Cell:</label>        <input type="text" value={this.state.employee.phoneCell} /></li>
                            <li><label>Home:</label>        <input type="text" value={this.state.employee.phoneHome} /></li>
                            <li><label>Fax:</label>         <input type="text" value={this.state.employee.faxDefault} /></li>
                            <li><label>Home Fax:</label>    <input type="text" value={this.state.employee.faxHome} /></li>
                            <li><label>Email:</label>       <input type="text" value={this.state.employee.emailDefault} /></li>
                            <li><label>Email Home:</label>  <input type="text" value={this.state.employee.emailHome} /></li>
                            <li><label>Is Active:</label>   <input type="checkbox" checked={this.state.employee.isActive} /></li>
                        </ul>
                    </div>
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