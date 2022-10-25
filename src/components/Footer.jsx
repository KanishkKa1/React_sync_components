import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { useStateContext } from "../contexts/ContextProvider";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

const Footerbutton = ({ title, customFunc, icon, color }) => (
    <TooltipComponent content={title} position="BottomCenter">
        <button
            type="button"
            onClick={() => customFunc()}
            style={{ color }}
            className="relative text-xl rounded-full p-3 hover:bg-light-gray hover:drop-shadow-2xl"
        >
            {icon}
        </button>
    </TooltipComponent>
);

const Footer = () => {
    const { currentColor } = useStateContext();
    return (
        <div className="mt-24">
            <div className="flex justify-center">
                <Footerbutton
                    title="Instagram"
                    customFunc={`https://instagram.com`}
                    color={currentColor}
                    icon={<AiOutlineInstagram />}
                />
                <Footerbutton
                    title="Github"
                    customFunc={`https://github.com/unnamedka1`}
                    color={currentColor}
                    icon={<BsGithub />}
                />
                <Footerbutton
                    title="Instagram"
                    customFunc={`https://www.linkedin.com/in/kanishkaga/`}
                    color={currentColor}
                    icon={<FaLinkedinIn />}
                />
            </div>
            <p className="dark:text-gray-200 text-gray-700 text-center m-20">
                <p
                    className="text-base hover:drop-shadow-2xl "
                    style={{ color: currentColor }}
                >
                    ©
                    <a href="https://github.com/unnamedka1" target="blank">
                        Kanishk Agarwal
                    </a>
                </p>
            </p>
        </div>
    );
};
export default Footer;
