import React, { Component } from "react";

class Card extends Component {
    render() {
        return (
            <div className="card mb-3">
                <h3 className="card-header">{this.props.title}</h3>
                <div className="card-body">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <fieldset>
                                {this.props.children}
                            </fieldset>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default Card