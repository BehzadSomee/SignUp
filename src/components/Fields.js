import React from 'react';
import styles from "./Fields.module.css";

const Fields = (props) => {
    return (
        <div className={styles.formField}>
            <label>{props.label}</label>
            <input 
             className={
                  (props.type !== "checkbox" && props.errors[props.name] && props.touched[props.name])? styles.uncompleted : styles.formInput
            }
            type={props.type} 
            name={props.name} 
            value={props.VAL} 
            onChange={props.CHANGE} 
            onFocus={props.TOUCH} />
            {props.errors[props.name] && props.touched[props.name] && <span>{props.errors[props.name]}</span> }
        </div>
    );
};

export default Fields;