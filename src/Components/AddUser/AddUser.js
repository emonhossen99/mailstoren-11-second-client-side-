import React from 'react';

const AddUser = () => {

    const handleAddUser = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = { name, email }

        // fetch data and send Request 
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log('success',data);
            alert('Add A user SuccessFull')
            event.target.reset()
        })
    }
    return (
        <div>
            <h1>Places Add A New User</h1>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" id="" placeholder='Enter Name :' required />
                <br />
                <input type="email" name="email" id="" placeholder='Enter Name :' required />
                <br />
                <input type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default AddUser;