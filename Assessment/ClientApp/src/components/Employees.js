import React, { Component } from 'react';
import { Listing } from './Listing';
import { Details } from './Details';
import '../index.css';

export class Employees extends Component {

    state = {
        employees: [],
        loading: true
    };

    render() {
        return (
            <>
                <h1>Employees</h1>
                <div class="listing">
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                        <tr>
                        </tr>
                </div>
            </>
        );
    }

                
    async populateEmployeesData() {
        const response = await fetch('employees');
        const data = await response.json();
        this.setState({forecasts: data, loading: false });      
    }
}
