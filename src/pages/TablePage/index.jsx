import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux"
import { TableHead } from "../../components";
import { TableBody } from "../../components";

const TablePage = () => {

    const [filter, setFilter] = useState({status: null, type: null})

    const tableData = useSelector((state) => state.table.tableData)
    const tableHeadFields = useSelector((state) => state.table.tableHead)

    const [newTableHeadFields, setNewTableHeadFields] = useState(tableHeadFields)

    const onBuy = (id) => {
        return id
    }

    const onSort = (fieldName) => {
        setNewTableHeadFields([])
        tableHeadFields.map((el, id) => (
            setNewTableHeadFields(prevArray => [...prevArray, el === fieldName ? "-" + tableHeadFields[id] : el])
        ))
    }

    document.addEventListener('DOMContentLoaded', () => {
        const getSort = ({ target }) => {
            const order = (target.dataset.order = -(target.dataset.order || -1));
            const index = [...target.parentNode.cells].indexOf(target);
            const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
            const comparator = (index, order) => (a, b) => order * collator.compare(
                a.children[index].innerHTML,
                b.children[index].innerHTML
            );
            
            for(const tBody of target.closest('table').tBodies)
                tBody.append(...[...tBody.rows].sort(comparator(index, order)));
    
            for(const cell of target.parentNode.cells)
                cell.classList.toggle('sorted', cell === target);
        };
        
        document.querySelectorAll('.table_sort thead').forEach(tableTH => tableTH.addEventListener('click', (event) => getSort(event)));
    });

    const onFilter = (status, type) => {
        let updateValue = {status, type}
        setFilter(filter => ({
            ...filter,
            ...updateValue
        }))
        // TODO
    }

    useEffect(() => {
        return () => {};
    }, [newTableHeadFields, filter])

    return (
        <table className="table_sort" cellSpacing='0' cellPadding='0' style={{"borderCollapse": "collapse"}}>
            <TableHead 
                onSort={onSort}
                tableHeadFields={newTableHeadFields}
                filter={filter}
            />
            <tbody>
                {tableData && tableData.map((data, id) => (
                    <TableBody 
                        key={id}
                        id={data.id}
                        name={data.name}
                        status={data.status}
                        type={data.type}
                        conditions={data.conditions}
                        volume={data.volume}
                        roi={data.roi}
                        free={data.free}
                        hedge={data.hedge}
                        onBuy={onBuy}
                        onFilter={onFilter}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default TablePage