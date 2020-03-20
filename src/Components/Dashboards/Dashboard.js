import React, { useEffect } from "react";
// placeholder images
import Crew from "../../img/CarPal-Construction-Desktop.png";
import MobileCrew from "../../img/Mobile-Construction.png";

import "./Dashboard.scss";

export default function Dashboard(props) {
    //retrieve auth cookie

    useEffect(() => {
        let token = document.cookie.replace(
            /(?:(?:^|.*;\s*)auth\s*\=\s*([^;]*).*$)|^.*$/,
            "$1"
        );
        console.log("inside effect", token);
        if (token) {
            localStorage.setItem("token", token);
            //destroy auth cookie
            document.cookie =
                "auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            //push user to profile page
            props.history.push("/profilepage");
        }
    }, []);

    return (
        <div className="dashboard-container">
            <img className="desktop-crew" src={Crew} alt="" />
            <img className="mobile-crew" src={MobileCrew} alt="" />
        </div>
    );
}
