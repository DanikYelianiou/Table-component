import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const TableBody = ({id, name, status, type, conditions, volume, roi, free, hedge, onBuy, onFilter}) => {
    const navigate = useNavigate();

    return (
        <tr
            className={
                status === "green" ? "tbody_green_section" : 
                status === "yellow" ? "tbody_yellow_section" : "tbody_red_section"
            }
        >
            <td className="status_circle" onClick={() => navigate(`/project/${id}`)}>
                <div className={
                    status === "green" ? "green_circle" : 
                    status === "yellow" ? "yellow_circle" : "red_circle"
                } /> 
                {name}
            </td>
            <td onClick={() => navigate(`/project/${id}`)}>
                {type}
            </td>
            <td onClick={() => navigate(`/project/${id}`)}>
                {conditions}
            </td>
            <td onClick={() => navigate(`/project/${id}`)}>
                ${volume}
            </td>
            <td onClick={() => navigate(`/project/${id}`)}>
                {roi} %
            </td>
            <td onClick={() => navigate(`/project/${id}`)}>
                {free}
            </td>
            <td onClick={() => navigate(`/project/${id}`)}>
                {hedge} %
            </td>
            <td>
                <button className="buy_btn" onClick={() => onBuy(id)}>
                    Buy
                </button>
            </td>
        </tr>
    )
}

export default TableBody