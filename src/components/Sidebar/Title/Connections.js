import React from "react";
export const Connections = ({connections, titles, onClick}) => {
    if (connections && connections.length === 0) {
        return (
            <ul className="connections no_connections">
                <h3>No connections</h3>
            </ul>
        );
    }
    return (
        <ul className="connections">
            {titles.map((t) => {
                const {id, title} =  t;
                if (connections.includes(id)) {
                    return (
                        <li className="connection">
                            <span onClick={onClick.bind(this, id)}>{title}</span>
                        </li>
                    )
                }
                return null;
            })}
        </ul>
    )
};