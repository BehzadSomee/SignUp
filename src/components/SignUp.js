import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from "./SignUp.module.css"
import Fields from './Fields';
import { validation } from './validation';



const SignUp = () => {
    const [data ,setData] = useState({
        name : "",
        email : "",
        password : "",
        confirmPassword : "",
        isAccepted : false
    },)

    const [errors , setErrors] = useState({});
    const [touched , setTouched] = useState({});

    useEffect(() => {
        setErrors(validation(data))
    },[data ,touched])
    const changeHandler = (event) => {
        if(event.target.type === "checkbox") {
            setData({...data , [event.target.name]:event.target.checked})
        }else {
            setData({...data , [event.target.name]:event.target.value}) 
        }
        // console.log(data)
    }

    const touchHandler = event => {
        setTouched({ ...touched , [event.target.name]:true })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        
        if (!Object.keys(errors).length) {
            notify("success");
        }else {setTouched({
            name : true,
            email : true,
            password : true,
            confirmPassword : true,
            isAccepted : true,
            
        })
        notify();
        }
    }

    const notify = (type) => {
        if(type === "success"){
            toast.success("BARIKALA"); 
        }else{
            toast.error("SHAME ON YOU")
        }
    }
    return (
        <div className={styles.container}>
            <form className={styles.formContainer} onSubmit={submitHandler}>
            <h2 className={styles.header}>Sign Up</h2>
            <Fields errors={errors} touched={touched} id="name" label="Name" type="text" name="name" VAL={data.name} CHANGE={changeHandler} TOUCH={touchHandler} />
            <Fields errors={errors} touched={touched} id="email" label="Email" type="email" name="email" VAL={data.email} CHANGE={changeHandler} TOUCH={touchHandler} />
            <Fields errors={errors} touched={touched} id="password" label="Password" type="password" name="password" VAL={data.password} CHANGE={changeHandler} TOUCH={touchHandler} />
            <Fields errors={errors} touched={touched} id="confirmPassword" label="Confirm Password" type="password" name="confirmPassword" VAL={data.confirmPassword} CHANGE={changeHandler} TOUCH={touchHandler} />
            <div className={styles.checkContainer}>
                <Fields errors={errors} touched={touched} id="isAccepted" label="I accept terms of privacy policy" type="checkbox" name="isAccepted" VAL={data.isAccepted} CHANGE={changeHandler} TOUCH={touchHandler} />
            </div>
            <div className={styles.formButtons}>
                <a href='#'>Login</a>
                <button type='submit'>Sign Up</button>
            </div>
            </form> 
            <ToastContainer />
        </div>
    );
};

export default SignUp;