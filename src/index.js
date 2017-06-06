import React from "react";
import ReactDOM from "react-dom";
import MainComponent from "./components/main";


ReactDOM.render(
    <MainComponent message="React Demo" />,
    document.querySelector( '.root' )
);