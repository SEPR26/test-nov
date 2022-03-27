import React from 'react';
import {Auth} from './pages/auth/Auth';
import {Register} from './pages/register/Register';
import {UsersList} from './pages/usersList/UsersList';
import {MainLayout} from './pages/mainLayout/MainLayout';
import './app.css'

function App() {
    return (
        <div>
            {/*<Auth/>*/}
            {/*<Register/>*/}
            <UsersList/>
            {/*<MainLayout/>*/}
        </div>
    );
}

export default App;
