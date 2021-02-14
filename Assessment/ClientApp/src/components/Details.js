import React, { Component } from 'react';

export class Details extends Component {

    state = {
        hi: 'hihi state'
    }

    componentDidMount() {
        console.log('made it to details');
    }

    render() {
        return (
            <ul>
                <li>hi</li>
                <li>you are in details view</li>
                <li>{this.state.hi}</li>
            </ul>
        );
    }
}