import React, { createContext, useState } from 'react';
import * as yup from 'yup';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        address: '',
        age: '',
        gender: '',
        country: '',
        nationality: ''
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};


const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    surname: yup.string().required('Surname is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    phone: yup.string().required('Phone number is required'),
    address: yup.string().required('Address is required'),
    age: yup.number().required('Age is required').positive().integer(),
    gender: yup.string().required('Gender is required'),
    country: yup.string().required('Country is required'),
    nationality: yup.string().required('Nationality is required'),
});

 ;


export { UserContext, UserProvider, validationSchema };
