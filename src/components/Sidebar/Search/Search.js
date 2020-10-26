import React from "react";
import "./Search.scss";
export const Search = ({onChange}) => {
    return (
        <div className="search">
            <input type="text" placeholder="Search" onChange={(ev) => onChange(ev)}/>
        </div>
    )
};