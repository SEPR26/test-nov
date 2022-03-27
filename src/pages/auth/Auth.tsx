import React, {useState} from 'react';
import {authApi, cookieOpts, cookies} from '../../api/api';
import {useStyles} from './useStyles';
import {Button, Card, CardActions, CardContent, TextField} from '@mui/material';


export const Auth = () => {

    const [loginData, setLoginData] = useState({email: '', password: ''});

    const login = async () => {
        try {
            const {email, password} = loginData;

            const res = await authApi.login(email, password);

            cookies.set('nova-auth', res.token, cookieOpts);

            console.log(res);

        } catch (e: any) {
            return console.error(e);
        }
    };

    const handleDownEnter = (e: any) => {
        if (e.key === 'Enter') {
            login();
            setLoginData(e.target.value);
        }
    };

    const handleLogin = ({target: {name, value}}: any) => {
        setLoginData({
            ...loginData,
            [name]: value
        });
    };

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Card variant='outlined' className='card-container'>
                <CardContent>
                    <h2>Аuth</h2>
                    <TextField
                        className='text-input'
                        placeholder='email'
                        type='email'
                        name='email'
                        value={loginData.email}
                        onChange={handleLogin}
                        onKeyPress={handleDownEnter}
                    />
                    <TextField
                        className='text-input'
                        placeholder='password'
                        type='password'
                        name='password'
                        value={loginData.password}
                        onChange={handleLogin}
                        onKeyPress={handleDownEnter}
                    />
                </CardContent>
                <CardActions>
                    <Button onClick={login} variant='outlined'>Sing in</Button>
                </CardActions>
            </Card>
        </div>
    );
};

