import SelectDropdown from "../../components/SelectDropdown";

export default function SearchLocation () {
    const options = [
        { value: "all", label: "All" },
        { value: "mogilev", label: "Mogilev" },
        { value: "vitebsk", label: "Vitebsk" },
        { value: "brest", label: "Brest" },
    ];

    return <SelectDropdown options={options}/>
}