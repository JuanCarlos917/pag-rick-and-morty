import styles from './Form.module.css';
import validation from './validate';
import { useState, useEffect } from 'react'

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
        setError(validation({
            ...userData,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(validation(userData))
    }
    useEffect(() => {
        if (Object.keys(error).length === 0) {
            login(userData)
        }
    },[error]);
    return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlfor='email'>Username</label>
					<input
						type='email'
						value={userData.userName}
						id='email'
						name='userName'
						placeholder='Email'
						className={error.userName && styles.warning}
						onChange={handleChange}
					/>
				</div>
				<p className='danger'>{error.userName}</p>
				<div>
					<label htmlfor='password'>Password</label>
					<input
						type='password'
						value={userData.password}
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
