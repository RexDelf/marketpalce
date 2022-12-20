import * as React from 'react';
import '../../assets/css/Dropdown.css';
import {useEffect, useRef} from "react";

const Dropdown = ({ trigger, menu }) => {
    const [open, setOpen] = React.useState(false);
    const btnRef = useRef();

    const handleOpen = () => {
        setOpen(true);
    };

    useEffect(() => {
        const closeDropdown = e => {
            if(e.path[0] !== btnRef.current){
                setOpen(false)
            }
        };

        document.addEventListener('click', closeDropdown);

        return () => document.removeEventListener('click', closeDropdown);
    }, [])

    return (
        <div className="dropdown">
            {React.cloneElement(trigger, {
                onClick: handleOpen,
                ref: btnRef
            })}
            {open ? (
                <ul className="menu">
                    {menu.map((menuItem, index) => (
                        <li key={index} className="menu-item">
                            {React.cloneElement(menuItem, {
                                onClick: () => {
                                    menuItem.props.onClick();
                                    setOpen(false);
                                },
                            })}
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};

export default Dropdown;