import React, {useEffect, useState } from "react";
import { Connections } from "./Connections";
import { useAppContext } from "../../../AppContext";
import "./Title.scss";
export const Title = ({ t, onClick }) => {
    const {titles, activeTitle} = useAppContext();
    const { title, id} = t;
    const [showConnections, setConnections] = useState(false);
    useEffect(() => {
        if (activeTitle && activeTitle.id === id) {
            setConnections(true);
        } else {
            setConnections(false);
        }
    }, [activeTitle, id]);
    const activeClass = showConnections ? "title active" : "title";
    return (
        <div className="title_wrapper">
            <div className={activeClass} onClick={activeTitle && activeTitle.id === id ? null : onClick.bind(this, id) }>
                <h2>{title}</h2>
            </div>
            {showConnections && <Connections onClick={onClick} connections={activeTitle && activeTitle.connections ? activeTitle.connections: []} titles={titles} />}
        </div>
    );
};