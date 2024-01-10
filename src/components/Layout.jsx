import React from "react";
import { Outlet } from "react-router-dom";
import Header from './Header';
import Drawer from './Drawer';
import { AppContext } from "../App";

function Layout() {

    return (
        <div className="wrapper clear">
            <Drawer />
            <Header />
            <div className="content p-40">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;