import React from "react";
import { Redirect } from 'react-router-dom'

export default class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        redirect: false
    }
  }

  setRedirect = () => {
    this.setState({
      ...this.state,
      redirect: true
    })
}

  renderRedirect = () => {
      if (this.state.redirect) {
        return <Redirect to='/' />
      }
  }

  render() {
    return (
      <>
        {this.renderRedirect()}   
        <nav className="navbar navbar-toggleable-md navbar-expand-md navbar-light" id="commRollover">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">SILEA TRAVEL</a>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Settings</a>
              </li>
              <li className="nav-item">
                <a onClick={this.setRedirect} className="nav-link" href="#">Logout</a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}