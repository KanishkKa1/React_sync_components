import React from "react";
import { useStateContext } from "../contexts/ContextProvider";

const ChartsHeader = ({ category, title }) => {
    const { currentColor } = useStateContext();
    return (
        <div className=" mb-10">
            <div>
                <p className="text-lg text-gray-400">Chart</p>
                <p
                    className="text-3xl font-extrabold tracking-tight dark:text-gray-200 "
                    style={{ color: currentColor }}
                >
                    {category}
                </p>
            </div>
            <p className="text-center dark:text-gray-200 text-xl mb-2 mt-3">
                {title}
            </p>
        </div>
    );
};

export default ChartsHeader;
