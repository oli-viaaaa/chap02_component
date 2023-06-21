import React from "react";

export default function Logout({onLogout}){
    return(
        <div>
            <h2>Logout</h2>
            <button onClick={onLogout}>Log Out</button>
        </div>
    );
}