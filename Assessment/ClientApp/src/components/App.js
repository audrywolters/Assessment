import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { Home } from './Home';
import { FetchData } from './FetchData';
import { Counter } from './Counter';
import { ItemList } from './ItemList';
import { SideView } from './SideView';
import '../custom.css';

export default class App extends Component {

    render() {
        return (
            <Router>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/counter">Counter</Link>
                    <Link to="/fetch-data">Fetch</Link>
                    <Link to="/itemList">Item List</Link>
                    <Link to="/sideView">Side View</Link>
                </nav>
                <main>
                    <Route exact path="/" component={Home} />
                    <Route path='/counter' component={Counter} />
                    <Route path='/fetch-data' component={FetchData} />
                    <Route path='/itemList' component={ItemList} />
                    <Route path='/sideView' component={SideView} />
                </main>
            </Router>
        );
    }
}
