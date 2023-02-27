import styles from './Form.module.css';
import { useState } from 'react'

export default function FormLogin({login}) {
    const[userData, setUserData] = useState({
        userName: '',
        password: ''
    })
    const [error, setError] = useState({
        userName: '',
        password: ''
    })
    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const handleSubmit = (e) => {
        e.preventDefault();
        if(userData.userName === ''){
            setError({
                ...error,
                userName: 'El campo no puede estar vacio'
            })
        }else{
            setError({
                ...error,
                userName: ''
            })
        }
        if(userData.password === ''){
            setError({
                ...error,
                password: 'El campo no puede estar vacio'
            })
        }else{
            setError({
                ...error,
                password: ''
            })
        }
        if(userData.userName !== '' && userData.password !== ''){
            login(userData)
        }
        if(!regexEmail.test(userData.userName)){
            setError({
                ...error,
                userName: 'El email no es valido'
            })
        }
    }

    return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit}>
            <div>
				<label for='email'>User Name</label>
				<input
					type='email'
					id='email'
					name='userName'
					placeholder='Email'
					className={error.userName && styles.warning}
					onChange={handleChange}
				/>
            </div>
				<p className='danger'>{error.userName}</p>
                <div>
				<label for='password'>Password</label>
				<input
					type='password'
					id='password'
					name='password'
					placeholder='Password'
					className={error.password && 'warning'}
					onChange={handleChange}
				/>
                </div>
				<p className='danger'>{error.password}</p>
				<button type='submit'>Login</button>
			</form>
		</div>
	);
}
