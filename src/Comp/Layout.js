import React from "react";
import Nav from "./Nav/Nav";
import Body from "./Body/Body";
import Foot from "./Foot/Foot";

export default function Layout() {
    return (
        <div>
            <Nav />
            <Body />
            <Foot />
        </div>
    );
}
