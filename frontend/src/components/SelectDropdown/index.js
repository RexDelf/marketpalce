import Select from "react-select";

export default function SelectDropdown(props) {
    const style = {
        control: base => ({
            ...base,
            border: 'none',
            boxShadow: 'none',
            '&:hover': {
                border: 'none',
            },
            backgroundColor: 'none',
            fontFamily: 'Source Sans Pro',
            width: '130px'
        }),
        menu:
            base => ({
                ...base,
                fontFamily: 'Source Sans Pro'
            }),
        option:
            (provided, state) => ({
                ...provided,
                color: state.isSelected ? 'white' : 'rgb(100, 100, 128)'
            }),
        singleValue:
            provided => ({
                ...provided,
                color: 'black'
            })

    }

    return (
        <Select styles={style}
                components={{
                    IndicatorSeparator: () => null
                }} options={props.options}/>
    )
}