import React from "react";
import {
    GridComponent,
    ColumnsDirective,
    ColumnDirective,
    Page,
    Selection,
    Inject,
    Edit,
    Toolbar,
    Sort,
    Filter,
} from "@syncfusion/ej2-react-grids";

import { customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const Customers = () => {
    const selectionsettings = { persistSelection: true };
    const toolbarOptions = ["Delete", "Search"];
    const editing = { allowDeleting: true, allowEditing: true };
    const { currentMode } = useStateContext();
    const bg_col = currentMode === "Dark" ? "#33373E" : "#fff";
    return (
        <div
            className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white  rounded-3xl"
            style={{ background: bg_col }}
        >
            <Header category="Page" title="Customers" />
            <GridComponent
                dataSource={customersData}
                enableHover={false}
                allowPaging
                pageSettings={{ pageCount: 5 }}
                selectionSettings={selectionsettings}
                toolbar={toolbarOptions}
                editSettings={editing}
                allowSorting
            >
                <ColumnsDirective>
                    {customersGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject
                    services={[Page, Selection, Toolbar, Edit, Sort, Filter]}
                />
            </GridComponent>
        </div>
    );
};

export default Customers;
