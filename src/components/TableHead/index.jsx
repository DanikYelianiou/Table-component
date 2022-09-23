import React, { useEffect } from "react";
import "./style.css";


const TableHead = ({onSort, tableHeadFields, filter}) => {

    useEffect(() => {
        return () => {};
    }, [tableHeadFields, filter])

    return (
        <thead className="thead">
            <tr>
                {tableHeadFields && tableHeadFields.map((field, id) => (
                    <td key={id} onClick={() => onSort(field)}>
                        {field}
                    </td>
                ))}
                <td/>
            </tr>
        </thead>
    )
}

export default TableHead