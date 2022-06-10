import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])


    const deleteUser = id => {
        const procied = window.confirm('How can Tou Delete This User')
        if (procied) {
            const url = `http://localhost:5000/user/${id}`
            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    const remening = users.filter(user => user._id !== id);
                    setUsers(remening);
                }
            })
        }
        else {
            alert('thanku')
        }
    }
    return (
        <div>
            <h1>Welcome To Home Compponents {users.length}</h1>
            {
                users.map(user => <li key={user._id}>{user._id},{user.name},{user.email} 
                <Link to={`/update/${user._id}`}><button>update</button></Link>
                <button onClick={() => deleteUser(user._id)}>X</button></li>)
            }
        </div>
    );
};

export default Home;