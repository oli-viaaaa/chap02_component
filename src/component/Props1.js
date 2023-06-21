import React from "react";
import Props2 from "./Props2";

export default function Props1(props){
    return(
        <div>
            <h2>메인 과목(subject) : {props.subject}</h2>
            <Props2 name="풀스택" />
        </div>
    )
}