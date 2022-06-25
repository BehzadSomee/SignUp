import React, { useEffect, useState } from 'react';
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

    // const [errors , setErrors] = useState({});
    useEffect(() => {
        // setErrors(validation(data))
        console.log(validation(data))
    },[data])
    const changeHandler = (event) => {
        if(event.target.type === "checkbox") {
            setData({...data , [event.target.name]:event.target.checked})
        }else {
            setData({...data , [event.target.name]:event.target.value}) 
        }
        console.log(data)
    }

    return (
        <div>
            <h2>Sign Up</h2>
            <form>
            <Fields label="Name" type="text" name="name" VAL={data.name} CHANGE={changeHandler} />
            <Fields label="Email" type="email" name="email" VAL={data.email} CHANGE={changeHandler} />
            <Fields label="Password" type="password" name="password" VAL={data.password} CHANGE={changeHandler} />
            <Fields label="Confirm Password" type="password" name="confirmPassword" VAL={data.confirmPassword} CHANGE={changeHandler} />
            <Fields label="I accept terms of privacy policy" type="checkbox" name="isAccepted" VAL={data.isAccepted} CHANGE={changeHandler} />
            <a href='#'>Login</a>
            <button>Sign Up</button>
            </form> 
        </div>
    );
};

export default SignUp;