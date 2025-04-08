import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './home.css'
import { Ring2 } from 'ldrs/react'
import 'ldrs/react/Ring2.css'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAllUser, deleteUser, fetchedUsers } from '../slices/userSlice'

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.user);
    const fetchNewData = useSelector((state) => state.toggle.fetchNewData);

    // useEffect(() => {
    //     console.log("fetchNewData.fetchNewData ", fetchNewData?.fetchNewData);
    // }, [fetchNewData])

    useEffect(() => {
        setIsLoading(true);
        async function getUserList() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                // dispatch(deleteAllUser());
                dispatch(fetchedUsers(response.data));
                // setTimeout(() => {
                setIsLoading(false);
                // }, 1000);
            } catch (error) {
                setIsLoading(false);
                console.log("error", error)
                if(confirm('Some error occured.\nWant to try again?')){
                    location.reload();
                }
            }
        }
        // console.log("fetchNewData.fetchNewData ", fetchNewData?.fetchNewData);
        !fetchNewData ? getUserList() : setIsLoading(false);
    }, [])

    function handleEdit(id) {
        navigate(`/editUser/${id}`);
    }
    function handleDelete(id, name) {
        if (confirm('Are you sure?\nYou want to delete ' + name + ' ?')) {
            dispatch(deleteUser(id));
        }
    }

    return (
        <>
            <button className="add-user-button" onClick={() => navigate('/addUser')}>+ Add User</button>

            {isLoading ? (<>
                <div className='loader'>
                    <Ring2
                        size="40"
                        stroke="5"
                        strokeLength="0.25"
                        bgOpacity="0.1"
                        speed="0.8"
                        color="black"
                    />
                    <p className='loaderMsg'>...Fetching User data</p>
                </div></>)

                : <div className="user-list">
                    <h2 style={{ textAlign: 'center' }}> Users data </h2>
                    <hr />
                    <br />
                    {userList.length > 0 ?
                        userList?.map((user) => (
                            <div key={user.id} className="user-card">
                                <h2>
                                    {user.name} <span className="username">(@{user.username})</span>
                                </h2>
                                <p><strong>Email:</strong> {user.email}</p>
                                <p><strong>Phone:</strong> {user.phone}</p>
                                <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noreferrer">{user.website}</a></p>
                                <p><strong>Company:</strong> {user.company?.name}</p>
                                <p><strong>Address:</strong> {user.address?.suite}, {user.address?.street}, {user.address?.city}, {user.address?.zipcode}</p>

                                <div className="button-group">
                                    <button className="edit-button" onClick={() => handleEdit(user.id)}>Edit</button>
                                    <button className="delete-button" onClick={() => handleDelete(user.id, user.name)}>Delete</button>
                                </div>
                            </div>
                        ))
                        : <h2 className='no-user'> No User Found </h2>}
                </div>}
        </>
    )
}

export default Home
