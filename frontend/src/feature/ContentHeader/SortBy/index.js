import { useState } from "react";
import SelectDropdown from "../../../components/SelectDropdown";

export default function SortBy ({setSort}) {
    const options = [
        { value: "new", label: "New" },
        { value: "expensive", label: "Expensive" },
        { value: "cheap", label: "Cheap" }
    ];

    const mappings = {
        new: ['desc', 'createdAt'],
        expensive: ['desc', 'price'],
        cheap: ['asc', 'price']
    };

    const handleChange = (e) => {
        setSort({sortDir: mappings[e.value][0], sortBy: mappings[e.value][1]});
    }

    return <SelectDropdown passedFunction={handleChange} options={options}/>
}