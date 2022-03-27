import React, {useState} from 'react';
import {authApi, cookieOpts, cookies} from '../../api/api';
import {useStyles} from './useStyles';
import {Button, Card, CardActions, CardContent, TextField} from '@mui/material';


export const Register = () => {

    const [registerData, setRegisterData] = useState({email: '', password: ''});

    const register = async () => {
        try {
            const {email, password} = registerData;

            const res = await authApi.register(email, password);

            cookies.set('nova-auth', res.token, cookieOpts);
            console.log(res);

        } catch (e: any) {
            console.error(e);
        }
    };

    const handleDownEnter = (e: any) => {
        if (e.key === 'Enter') {
            register();
            setRegisterData(e.target.value);
        }
    };

    const handleLogin = ({target: {name, value}}: any) => {
        setRegisterData({
            ...registerData,
            [name]: value
        });
    };

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Card variant='outlined' className='card-container'>
                <CardContent>
                    <h2>Registration</h2>
                    <TextField
                        className='text-input'
                        placeholder='email'
                        type='email'
                        name='email'
                        value={registerData.email}
                        onChange={handleLogin}
                        onKeyPress={handleDownEnter}
                    />
                    <TextField
                        className='text-input'
                        placeholder='password'
                        type='password'
                        name='password'
                        value={registerData.password}
                        onChange={handleLogin}
                        onKeyPress={handleDownEnter}
                    />
                </CardContent>
                <CardActions>
                    <Button onClick={register} variant='outlined'>Sing up</Button>
                </CardActions>
            </Card>
        </div>
    );
};

