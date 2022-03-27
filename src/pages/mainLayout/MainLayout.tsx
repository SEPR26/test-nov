import React, {FC} from 'react';
import {AppBar, Button, Container, Toolbar, Typography} from '@mui/material';
import {useStyles} from './useStyles';

export const MainLayout: FC = props => {

    const {children} = props;

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" color={'primary'}>
                <Toolbar style={{justifyContent: 'space-between'}}>
                    <div className="links">
                        <Typography variant="h6">
                            Users
                        </Typography>
                        <Typography variant="h6">
                            Products
                        </Typography>
                    </div>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container>
                {children}
            </Container>
        </div>
    );
};