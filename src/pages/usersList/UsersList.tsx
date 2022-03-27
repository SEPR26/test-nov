import React, {useEffect, useState} from 'react';
import {usersApi} from '../../api/api';
import {StateUsersType} from '../../types';



export const UsersList = () => {

    const [page, setPage] = useState(1);

    const [pageSize, setPageSize] = useState(6);

    const [users, setUsers] = useState<StateUsersType>({
        usersInfo: [],
        total: 0,
        total_pages: 0
    });

    const fetchUsers = async () => {
        const {data, total, total_pages} = await usersApi().getUsers(page, pageSize);
        console.log(data);
        setUsers({
            usersInfo: data,
            total,
            total_pages
        });
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            {users.usersInfo.map((res) => {
                const {email, first_name, last_name, avatar, id} = res;
                return (
                    <div key={id}>
                        <div>{id}</div>
                        <div>{email}</div>
                        <div>{first_name}</div>
                        <div>{last_name}</div>
                        <img src={avatar}/>
                    </div>
                );
            })}
        </div>
    );
};