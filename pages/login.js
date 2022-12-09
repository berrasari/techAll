
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import cookie from 'cookie';

export const getStaticProps = async () => {
    const request = await fetch(
        `http://localhost:2000/api/users`
    );
    const users = await request.json();
    
    return {
        props: {
            users,
        },
    };
}



const Login = ({users}) => {
    const router = useRouter();
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Get the username and password values from the form
        const username = event.currentTarget.username.value;
        const password = event.currentTarget.password.value;

// Convert the users variable to an array
const usersArray = Array.from(users.data);

        const hasMatch = usersArray.some(
            (user) => user.username === username && user.password === password
        );

        
        // If a user was found, set a cookie and redirect to the dashboard
        if (hasMatch) {
            

            router.push('/posts');
        } else {
            // If no user was found, show an error
            setError('Invalid username or password');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">username:</label>
            <input type="username" name="username" />

            <label htmlFor="password">Password:</label>
            <input type="password" name="password" />

            {error && <p>{error}</p>}

            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
