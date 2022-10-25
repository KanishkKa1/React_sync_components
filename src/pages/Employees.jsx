import React from "react";
import {
    GridComponent,
    Inject,
    Sort,
    ColumnsDirective,
    ColumnDirective,
    Search,
    Page,
    Toolbar,
} from "@syncfusion/ej2-react-grids";

import { employeesData, employeesGrid } from "../data/dummy";
import { Header } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const Employees = () => {
    const toolbarOptions = ["Search"];
    const editing = { allowDeleting: true, allowEditing: true };
    const { currentMode } = useStateContext();
    const bg_col = currentMode === "Dark" ? "#33373E" : "#fff";

    return (
        <div
            className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white  rounded-3xl"
            style={{ background: bg_col }}
        >
            <Header category="Pages" title="Employees" />
            <GridComponent
                dataSource={employeesData}
                width="auto"
                allowPaging
                allowSorting
                pageSettings={{ pageCount: 5 }}
                editSettings={editing}
                toolbar={toolbarOptions}
            >
                <ColumnsDirective>
                    {employeesGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Search, Page, Toolbar, Sort]} />
            </GridComponent>
        </div>
    );
};

export default Employees;
