import React, { Component } from "react";


export default class MainComponent extends Component {

	render: function() {
        return (
            <div>{this.props.message}</div>
        );
   } 
}