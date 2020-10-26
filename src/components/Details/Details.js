import React, {useEffect, useState } from "react";
import reactStringReplace from "react-string-replace";
import { useAppContext } from "../../AppContext";
import "./Details.scss";
import { Variable } from "./Variable";

export const Details = () => {
    const {activeTitle, searchTerm, variables} = useAppContext();
    const [details, setDetails] = useState({content: []});
    const { content } = details;
    useEffect(() => {
        if (activeTitle) {
            setDetails(activeTitle);
        }
    }, [activeTitle]);
    const createBody = (body) => {
        let replacedText;
        if (body) {
            
 
            // Match for variable|fallbackValue
            replacedText = reactStringReplace(body, /(\{\S+\})/g, (match, i) => {
                let parsedValues = match.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '').split("|");
                const [variableId, fallbackValue] = parsedValues;
                if (variables.length) {
                    const [variable] = variables.filter((v) => v.id === variableId);
                    if (variable) {
                        return <Variable variable={variable} />;
                    } else {
                        return <span className="fallback">{fallbackValue}</span>;
                    }
                }
            });
            if (searchTerm) {
                replacedText = reactStringReplace(replacedText, searchTerm.toLowerCase(), (match, i) => (
                    <span className="highlight">{match}</span>
                ));
            }
        }
        return replacedText;
    }
    const createImage = (url) => {
        return <div className="image_div">
            <img src={url} alt="content_image"/>
        </div>;
    };
    if (!activeTitle) {
        return (
            <div className="details no_title_selected">
                <h1>Select a title to display</h1>
            </div>
        )
    }
    return (
        <div className="details">
            <div className="inner_details">
                {content.map((section, index) => {
                    const { body, type, url } = section;
                    if ((type === "text" && !body) || (type === "image" && !url)) return null;
                    return (
                        <div className="section" key={`type_${body}_${index}`}>
                            <h3>{type}</h3>
                            <div className="body">
                                {type === "text" && createBody(body)}
                                {type === "image" && createImage(url)}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};