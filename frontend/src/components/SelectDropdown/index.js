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
            fontFamily: 'Source Sans Pro'
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
        <Select defaultValue={props.options[0]} styles={style}
                components={{
                    IndicatorSeparator: () => null
                }} options={props.options} onChange={e => props.passedFunction(e)}/>
    )
}