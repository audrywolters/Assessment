import React, { Component } from 'react';

export class Listing extends Component {

    state = {
        movie: [],
        genres: [],
        title: '',
        description: ''
    }

    componentDidMount() {
        console.log('made it to item list');
    }

    render() {
        return (
            <ul>
                <li>hi</li>
                <li>you are in item list</li>
            </ul>
            );
        }
    }