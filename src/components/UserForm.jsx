import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserContext, validationSchema } from './UserContext';

const UserForm = () => {
    const { setUser } = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = (data) => {
        setUser(data);
    };

    return (
        <div className=''>
        <form className='flex flex-col w-50vw h-100vh mx-auto gap-4' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='text-3xl font-bold'>User Information App</h1>
            <div className='flex justify-between items-center'>
                <label>Name:</label>
                <input className='border rounded-lg p-2' type="text" {...register('name')} />
                <p>{errors.name?.message}</p>
            </div>
            <div className='flex justify-between items-center'>
                <label>Surname:</label>
                <input className='border rounded-lg p-2' type="text" {...register('surname')} />
                <p>{errors.surname?.message}</p>
            </div>
            <div className='flex justify-between items-center'> 
                <label>Email:</label>
                <input className='border rounded-lg p-2' type="email" {...register('email')} />
                <p>{errors.email?.message}</p>
            </div>
            <div className='flex justify-between items-center'>
                <label>Phone:</label>
                <input className='border rounded-lg p-2' type="text" {...register('phone')} />
                <p>{errors.phone?.message}</p>
            </div>
            <div className='flex justify-between items-center'>
                <label>Address:</label>
                <input className='border rounded-lg p-2' type="text" {...register('address')} />
                <p>{errors.address?.message}</p>
            </div>
            <div className='flex justify-between items-center'>
                <label>Age:</label>
                <input className='border rounded-lg p-2' type="number" {...register('age')} />
                <p>{errors.age?.message}</p>
            </div>
            <div className='flex justify-between items-center'>
                <label>Gender:</label>
                <input className='border rounded-lg p-2' type="text" {...register('gender')} />
                <p>{errors.gender?.message}</p>
            </div>
            <div className='flex justify-between items-center'>
                <label>Country:</label>
                <input className='border rounded-lg p-2' type="text" {...register('country')} />
                <p>{errors.country?.message}</p>
            </div>
            <div className='flex justify-between items-center'>
                <label>Nationality:</label>
                <input className='border rounded-lg p-2' type="text" {...register('nationality')} />
                <p>{errors.nationality?.message}</p>
            </div>
            <button className='border rounded-lg bg-blue-600 text-white py-1' type="submit">Submit</button>
        </form>
        </div>
    );
};

export default UserForm;
