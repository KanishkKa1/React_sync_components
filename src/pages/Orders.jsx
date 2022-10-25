import React from "react";
import {
    GridComponent,
    ColumnsDirective,
    ColumnDirective,
    Resize,
    Sort,
    ContextMenu,
    Filter,
    Page,
    ExcelExport,
    PdfExport,
    Edit,
    Inject,
} from "@syncfusion/ej2-react-grids";

import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";
import { Header } from "../components";
import { useStateContext } from "../contexts/ContextProvider";

const Orders = () => {
    const editing = { allowDeleting: true, allowEditing: true };
    const { currentMode } = useStateContext();
    const bg_col = currentMode === "Dark" ? "#33373E" : "#fff";
    return (
        <div
            className="m-2 md:m-10 mt-24 p-2 md:p-10
         bg-white rounded-3xl"
            style={{ background: bg_col }}
        >
            <Header category="Page" title="Orders" />
            <GridComponent
                id="gridcomp"
                dataSource={ordersData}
                allowPaging
                allowSorting
                allowExcelExport
                allowPdfExport
                contextMenuItems={contextMenuItems}
                editSettings={editing}
            >
                <ColumnsDirective>
                    {ordersGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject
                    services={[
                        Resize,
                        Sort,
                        ContextMenu,
                        Filter,
                        Page,
                        ExcelExport,
                        Edit,
                        PdfExport,
                    ]}
                />
            </GridComponent>
        </div>
    );
};
export default Orders;
