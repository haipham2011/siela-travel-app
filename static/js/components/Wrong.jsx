import React from "react";
import Navbar from "./Navbar";


export default class Wrong extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <>  
                <Navbar />
                <div className="row d-flex justify-content-center form">
                    <form>
                        <div className="form-group">
                            <label htmlFor="wrongBaggage">Wrong baggage ID</label>
                            <input type="text" className="form-control" id="wrongBaggage" placeholder="Enter baggage ID" name="baggageId" onChange={this.handleChange} />
                        </div>
                    </form>
                </div>
                <div className="row d-flex justify-content-center">
                    <button onClick={this.onSubmit} type="button" className="btn btn-primary">Submit</button>
                </div>
            </>
        );
    }
}