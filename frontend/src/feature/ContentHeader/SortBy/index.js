import { useState } from "react";
import SelectDropdown from "../../../components/SelectDropdown";

export default function SortBy () {
    const options = [
        { value: "name", label: "Название" },
        { value: "high-price", label: "Дорогие" },
        { value: "low-price", label: "Дешевые" },
        { value: "new", label: "Новые" },
        { value: "views", label: "Просмотры" }
    ];

    return <SelectDropdown options={options}/>
}