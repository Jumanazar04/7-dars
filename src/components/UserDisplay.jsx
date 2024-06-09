import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UserDisplay = () => {
    const { user } = useContext(UserContext);

    return (
        <div className='w-50vh h-100vh  flex flex-col gap-4'>
            <h2 className=' text-3xl font-bold'>User Information</h2>
            <p>Name: {user.name}</p>
            <p>Surname: {user.surname}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Address: {user.address}</p>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
            <p>Country: {user.country}</p>
            <p>Nationality: {user.nationality}</p>
        </div>
    );
};

export default UserDisplay;
