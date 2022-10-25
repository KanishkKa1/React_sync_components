import React from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

import { Header } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const change = (args) => {
    document.getElementById("preview").style.backgroundColor =
        args.currentValue.hex;
};

const CustomColorPicker = ({ id, mode }) => (
    <ColorPickerComponent
        id={id}
        mode={mode}
        modeSwitcher={false}
        inline
        showButtons={false}
        change={change}
    />
);

const ColorPicker = () => {
    const { currentColor, currentMode } = useStateContext();
    const bg_col = currentMode === "Dark" ? "#33373E" : "#fff";
    return (
        <div
            className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white  rounded-3xl"
            style={{ background: bg_col }}
        >
            <Header category="App" title="Color Picker" />
            <div className="text-center">
                <div id="preview" />
                <div className="flex justify-center items-center gap-20 flex-wrap space-x-5">
                    <div>
                        <p
                            className="text-2xl font-semibold mt-2 mb-4 "
                            style={{ color: currentColor }}
                        >
                            Inline Pallete
                        </p>
                        <CustomColorPicker id="inline-palette" mode="Palette" />
                    </div>
                    <div>
                        <p
                            className="text-2xl font-semibold mt-2 mb-4"
                            style={{ color: currentColor }}
                        >
                            Inline Picker
                        </p>
                        <CustomColorPicker id="inline-picker" mode="Picker" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ColorPicker;
