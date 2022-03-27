import React, {Fragment, useEffect, useState} from 'react';
import {usersApi} from '../../api/api';
import {StateUsersType} from '../../types';
import {MainLayout} from '../mainLayout/MainLayout';
import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    CircularProgress,
    Grid,
    Skeleton,
    Typography
} from '@mui/material';
import {useStyles} from './useStyles';

export const UsersList = () => {

    const [page, setPage] = useState(1);

    const [pageSize, setPageSize] = useState(2);

    const [loading, setLoading] = useState(false);


    const [users, setUsers] = useState<StateUsersType>({
        usersInfo: [],
        total: 0,
        total_pages: 0
    });

    const {usersInfo} = users;

    const totalPages = page < users.total_pages;

    const fetchUsers = async () => {
        setLoading(true);
        const {data, total, total_pages} = await usersApi.getUsers(page, pageSize);
        setLoading(false);
        setUsers({
            usersInfo: [...users.usersInfo, ...data],
            total,
            total_pages
        });
    };

    const paginationHandle = () => {
        setPage(page + 1);
    };

    const skeletonList = Array.from({length: usersInfo.length || pageSize});

    useEffect(() => {
        fetchUsers();
    }, [page]);

    const classes = useStyles();
    console.log(skeletonList);
    return (
        <MainLayout>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    {users.usersInfo.map((res) => {
                        const {id, email, first_name, last_name, avatar} = res;
                        return (
                            <Grid item lg={2} md={3} sm={6} xs={12} key={id}>
                                <Card sx={{maxWidth: 200}}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="128"
                                            image={avatar}
                                            alt="nova"
                                        />
                                        <CardContent className="user-content">
                                            <div className="user-name">
                                                <Typography variant="h6" color="text.primary">
                                                    {first_name}
                                                </Typography>
                                                <Typography variant="h6" color="text.primary">
                                                    {last_name}
                                                </Typography>
                                            </div>
                                            <Typography fontSize={15} color="text.secondary">
                                                {email}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
                <div className="show-more">
                    {loading
                        ? <CircularProgress/>
                        : totalPages && <Button
                        variant="contained"
                        onClick={paginationHandle}
                    >
                        Show more
                    </Button>}
                </div>
            </div>
        </MainLayout>
    );
};