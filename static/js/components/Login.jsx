import React from "react";
import { Redirect } from 'react-router-dom'

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
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
          return <Redirect to='/customer' />
        }
    }

    onSubmit = () => {
        let {email, password} = this.state;
        let {headers, api} = this.props;
        let request = api + `customers?customerId=${password}`;
        
        fetch(request, {
            headers: headers,
            method: 'GET'
        }).then(response => response.json())
        .then(response => {
            this.props.setCustomer(response['customers'])
            this.setRedirect();
        })
        
    }

    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        });
    }
    

    render() {
        return (
            <>
                {this.renderRedirect()}
                <div className="row d-flex justify-content-center form">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" name="email" onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Customer ID</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter customer ID" name="password" onChange={this.handleChange}/>
                        </div>
                    </form>
                </div>
                <div className="row d-flex justify-content-center">
                    <button id="continue" onClick={this.onSubmit} type="button" className="btn btn-primary">Continue</button>
                </div>
            </>
        );
    }
}