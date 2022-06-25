import React from 'react';

const Fields = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <input type={props.type} name={props.name} value={props.VAL} onChange={props.CHANGE} />
        </div>
    );
};

export default Fields;