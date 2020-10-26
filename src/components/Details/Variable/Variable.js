import React, { useState } from "react";
import "./Variable.scss";
export const Variable = ({variable}) => {
    const {name, scope} = variable;
    const [showVariable, setVariable] = useState(false);
    return (
        <div className="variable">
            <div className="scope_div" onClick={() => setVariable((v) => !v)}>
                <span className="scope">{scope}</span>
                <div className="arrow_down"></div>
            </div>
            {showVariable && <div className="dropdown">
                <span className="name">{name}</span>
            </div>}
        </div>
    )
};
