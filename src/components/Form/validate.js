
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = new RegExp('[0-9]')
export default function validation (inputs){
    const errors = {};
    if(!inputs.userName){
        errors.userName = 'Name is required'
    }
    if(!inputs.userName){
        errors.userName = 'Email is required'
    }
    if(!regexEmail.test(inputs.userName)){
        errors.userName = 'Email is invalid'
    }
    if(inputs.userName.length > 35){
        errors.userName = 'Email is too long'
    }
    if(!regexPassword.test(inputs.password)){
        errors.password = 'Password must contain at least one number'
    }
    if(inputs.password.length < 7 || inputs.password.length > 10){
        errors.password = 'Password must be between 7 and 10 characters'
    }
    if(!inputs.password){
        errors.password = 'Password is required'
    }
    return errors;

}