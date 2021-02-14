import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './Layout';
import { Home } from './Home';
import { FetchData } from './FetchData';
import { Counter } from './Counter';
import { ItemList } from './ItemList';
import { SideView } from './SideView';
import '../custom.css';

export default class App extends Component {
  //static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/itemList' component={ItemList} />
        <Route path='/sideView' component={SideView} />
      </Layout>
    );
  }
}
