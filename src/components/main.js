import React, { Component } from "react";


export default class MainComponent extends Component {

	render() {
        return (
            <div>{this.props.message}</div>
        );
   }
}