export const validation = (entrance) => {

    const error = {};
    
    if (!entrance.name.trim()) {
        error.name = "enter your name"
    } else {
        delete error.name;
    };

    if (!entrance.email.trim()) {
        error.email = "please enter your email"
    }else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(entrance.email)){
        error.email = "invalid email"
    }else {
        delete error.email;
    }

    if (!entrance.password.trim()) {
        error.password = "password is required"
    }else if (entrance.password.length < 6) {
        error.password = "must be 6 or more characters"
    }else {
        delete error.password
    }

    if (!entrance.confirmPassword.trim()) {
        error.confirmPassword = "confirm your password"
    }else if (entrance.confirmPassword !== entrance.password) {
        error.confirmPassword = "is not match"
    }else{
        delete error.confirmPassword
    }

    if (entrance.isAccepted) {
        delete error.isAccepted;
    }else {
        error.isAccepted = "accept our regulations"
    }

    return error
} 