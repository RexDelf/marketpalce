import { useState } from "react";
import SelectDropdown from "../../components/SelectDropdown";

export default function SearchLocation () {
    const options = [
        { value: "all", label: "Любой" },
        { value: "mogilev", label: "Могилев" },
        { value: "vitebsk", label: "Витебск" },
        { value: "brest", label: "Брест" },
    ];

    return <SelectDropdown options={options}/>
}