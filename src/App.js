import React from 'react';
import UserForm from './components/UserForm';
import UserDisplay from './components/UserDisplay';
import { UserProvider } from './components/UserContext';


const App = () => {
    return (
        <UserProvider>
            <div className='flex items-start pt-12 w-screen h-screen justify-center gap-16'>
                <UserForm />
                <UserDisplay />
            </div>
        </UserProvider>
    );
};

export default App;
