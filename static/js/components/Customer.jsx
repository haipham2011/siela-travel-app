import React, { Fragment } from "react";
import { Timeline, Event } from "react-timeline-scribble";
import { Link } from 'react-router-dom'

class TimeLine extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      events: []
    }
  }

  trackingBaggage = (baggageId) => {
    let { headers, api } = this.props;
    let request = api + `events/${baggageId}`;

    fetch(request, {
      headers: headers,
      method: 'GET'
    }).then(response => response.json())
      .then(response => {
        this.setState({
          ...this.state,
          events: response['events']
        });
      })
  }

  renderTimeLine = () => {
    let events = this.state.events;
    let output = events.map((element, index) => {
      return(
        <Event interval={element['type']} key={index}>
          {element['airport']}
        </Event>
      );
     
    });
    return output;
  }

  componentDidMount(){
    this.trackingBaggage(this.props.baggageId);
  }

  render(){
    return(
      <Fragment>
        <Timeline>
          {this.renderTimeLine()}
        </Timeline>
      </Fragment>
    );
    
  }
}

export default class Customer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baggage: [],
      events: []
    }
  }

  getBaggage = () => {
    let { customerInfo, headers, api } = this.props;
    let request = api + `baggage?customerId=${customerInfo['customerId']}`;

    fetch(request, {
      headers: headers,
      method: 'GET'
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          ...this.state,
          baggage: response['baggage']
        });
      })
  }

  renderSpecial = (special) => {
    let specialCode = {
      'N': 'Normal',
      'L': 'Long',
      'A': 'Animal',
      'H': 'Heavy',
      'C': 'Special condition',
      'T': 'Toxic',
      'W': 'Weapon'
    }

    return specialCode[special];
  }

  renderBaggage = () => {
    let { baggage } = this.state;
    let { headers, api } = this.props;

    let output = baggage.map((element, index) => {
      return (
        <div className="row customer" key={index}>
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <div className="customer-name-baggage">
                    Baggage ID
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="customer-other-baggage">
                    {element['baggageId']}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="row">
                    <div className="col-12">
                      <div className="customer-name-baggage">
                        Weight
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="customer-other-baggage">
                        {element['weight']}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="row">
                    <div className="col-12">
                      <div className="customer-name-baggage">
                        Special
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="customer-other-baggage">
                        {this.renderSpecial(element['special'])}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="customer-name-baggage">
                    Status
                  </div>
                </div>
              </div>
              <div className="row timeline">
                <TimeLine baggageId={element['baggageId']} headers={headers} api={api}/>
              </div>
              <div id="report" className="row d-flex justify-content-center">
                <Link to="/report"><button onClick={this.onSubmit} type="button" className="btn btn-primary">Report missing</button></Link>
              </div>
            </div>
          </div>
        </div>
      );
    })

    return output;
  }

  renderCustomer = () => {
    let customerInfo = this.props.customerInfo;
    return (
      <div className="row customer">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <div className="customer-name">
                  {customerInfo['name']}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="customer-other">
                  {customerInfo['email']}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="customer-other">
                  {customerInfo['phone']}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.getBaggage();
  }


  render() {
    
    return (
      <>
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

            </ul>
          </div>
        </nav>
        {this.renderCustomer()}
        {this.renderBaggage()}
      </>
    );
  }
}