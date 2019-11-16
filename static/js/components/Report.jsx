import React from "react";
import { Link } from 'react-router-dom'

export default class Report extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="report-page">
                <div className="row d-flex justify-content-center">
                    <h1>Don’t panic!</h1>
                </div>
                <div className="row d-flex justify-content-center">
                    We had your luggage information in our system.
                </div>
                <div className="row d-flex justify-content-center">
                    <Link to="/missing"><button type="button" className="btn btn-primary">My luggage is missing</button></Link>
                    <Link to="/wrong"><button type="button" className="btn btn-primary">I took wrong luggage</button></Link>
                </div>
            </div>
        );
    }
}