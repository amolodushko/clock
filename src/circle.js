import React from "react";

const Circle = ({children}) => <div className={"circle"}>
    <span className="twelve"/>
    <span className="three"/>
    <span className="six"/>
    <span className="nine"/>
    <div className="rounder"/>
    {children}
</div>

export default Circle;