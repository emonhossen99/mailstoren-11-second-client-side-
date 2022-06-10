import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const UpdateUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    

    useEffect(() => {
        const url = `http://localhost:5000/user/${id}`
        console.log(url)
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);

    const handleUpdateUser = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const updatedUser = { name, email }

        // fetch data and send Request 
        const url = `http://localhost:5000/user/${id}`;
        fetch(url, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('update SuccessFul')
                event.target.reset()
            })
    }

    return (
        <div>
            <h1>Update User{id}</h1>
            <h3>User Name : {user.name}</h3>

            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" id="" placeholder='Enter Name :' required />
                <br />
                <input type="email" name="email" id="" placeholder='Enter Name :' required />
                <br />
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default UpdateUser;

































