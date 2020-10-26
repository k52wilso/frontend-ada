import React, {useState } from "react";
import { Search } from "./Search";
import { useAppContext } from "../../AppContext";
import "./Sidebar.scss";
import { Title } from "./Title";
import AppService from "../../services/AppService";

export const Sidebar = () => {
    const {titles, setActiveTitle, setSearchTerm} = useAppContext();
    const [timeoutId, setTimeoutId] = useState(null);
    const [searchedTitles, setSearchedTitles] = useState([]);
    if (!titles) {
        return <div className="sidebar">
            <Search />
        </div>;
    }
    const getTitle = async (nodeId) => {
        const title = await AppService.getSpecificTitle(nodeId);
        setActiveTitle(title);
    };
    const debounce = (delay, fn) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        setTimeoutId(setTimeout(fn, delay));
    }
    const onChange = (ev) => {
        let value = ev.target.value;
        if (!value.length) {
            setSearchedTitles([]);
            setSearchTerm(null);
        }
        value = value.trim();
        debounce(1000, async () => {
            const filteredTitles = await AppService.search(value);
            setSearchTerm(value);
            setSearchedTitles(filteredTitles);
        });
    };
    return (
        <div className="sidebar">
            <Search onChange={onChange}/>
            <div className="inner_sidebar">
                {titles.map((title, index) => {
                    const { id } = title;
                    if (searchedTitles.length && searchedTitles.filter((f) => f.id === id).length === 0) {
                        return null;
                    }
                    return (
                        <>
                            <Title key={`title_${index}`} t={title} onClick={getTitle} />
                        </>
                    )
                })}
            </div>
        </div>
    );
};