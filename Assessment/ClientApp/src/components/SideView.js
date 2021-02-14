import React, { Component } from 'react';

export class SideView extends Component {

    state = {
        hi: 'hihi state'
    }

    componentDidMount() {
        console.log('made it to side view');
    }

    render() {
        return (
            <ul>
                <li>hi</li>
                <li>you are in side view</li>
                <li>{this.state.hi}</li>
            </ul>
        );
    }
}