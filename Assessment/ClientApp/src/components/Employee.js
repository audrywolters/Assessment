import React, { Component } from 'react';

export class Employee extends Component {



    render() {
        console.log(this.props);
        return (
            <>
                <ul>
                    <li><label>Is Active:</label>   <input type="checkbox" id="isActive" checked={this.props.employee.isActive} /></li>
                    <li><label>Name:</label>        <input type="text" id="name" value={this.props.employee.name} /></li>
                    <li><label>Direct:</label>      <input type="text" id="phoneDirect" /></li>
                    <li><label>Cell:</label>        <input type="text" id="phoneCell" /></li>
                    <li><label>Home:</label>        <input type="text" id="phoneHome" /></li>
                    <li><label>Fax:</label>         <input type="text" id="faxDefault" /></li>
                    <li><label>Home Fax:</label>    <input type="text" id="faxHome" /></li>
                    <li><label>Email:</label>       <input type="text" id="emailDefault" /></li>
                    <li><label>Email Home:</label>  <input type="text" id="emailHome" /></li>
                </ul>
            </>
        );
    }
}