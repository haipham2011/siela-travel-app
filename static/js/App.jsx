import React from "react";
import Login from "./components/Login";
import Customer from "./components/Customer";
import Report from "./components/Report";
import Missing from "./components/Missing";
import Wrong from "./components/Wrong";

import '../css/app.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

const headers = new Headers({
  'Content-Type': 'application/json',
  'x-api-key': 'jmdSHjy6WPaXwoR75E6mJ1ImhxKPRJb51v6DBS0A'
});
const api = 'https://junction.dev.qoco.fi/api/';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      customer: {}
    }
  }

  setCustomer = customer => {
    this.setState({
      ...this.state,
      customer: customer
    });
  }

  render() {
    
    return (
      <>
        <div id="app">
          <Router>
            <div>
              <Switch>
                <Route exact path="/" render={
                  (props) => <Login {...props} setCustomer={this.setCustomer} headers={headers} api={api}/>
                } />
                <Route path="/customer" render={
                  (props) => <Customer {...props} customerInfo={this.state.customer} headers={headers} api={api}/>
                } />
                <Route path="/report" render={
                  (props) => <Report {...props} />
                } />
                <Route path="/missing" render={
                  (props) => <Missing {...props} />
                } />
                <Route path="/wrong" render={
                  (props) => <Wrong {...props} />
                } />
              </Switch>
            </div>
          </Router>
        </div>
      </>
    );
  }
}