import React from "react";
import {
    HtmlEditor,
    Image,
    Inject,
    Link,
    QuickToolbar,
    RichTextEditorComponent,
    Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";

import { Header } from "../components";
import { EditorData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Editor = () => {
    const { currentMode } = useStateContext();
    const bg_col = currentMode === "Dark" ? "#33373E" : "#fff";
    return (
        <div
            className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white
    rounded-3xl"
            style={{ background: bg_col }}
        >
            <Header category="App" title="Editor" />
            <RichTextEditorComponent>
                <EditorData />
                <Inject
                    services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]}
                />
            </RichTextEditorComponent>
        </div>
    );
};
export default Editor;
