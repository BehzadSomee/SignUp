import React from 'react';

const Fields = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <input type={props.type} name={props.name} value={props.VAL} onChange={props.CHANGE} onFocus={props.TOUCH} />
            {props.errors[props.name] && props.touched[props.name] && <span>{props.errors[props.name]}</span> }
        </div>
    );
};

export default Fields;