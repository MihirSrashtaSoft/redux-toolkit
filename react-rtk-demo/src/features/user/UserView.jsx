// @ts-nocheck
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import userSlice, { fetchUsers } from './userSlice'

export const UserView = () => {
    const user = useSelector((state) => state.user)
    // console.log(user);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
    return (
        <div>
            <h2>List of Users</h2>
            {user.loading && <div>loading...</div>}
            {/* {!user.loading && user.error ? <div>Error: {user.error}</div> : null} */}
            {user.users.length ? (
                <ul>
                    {user.users.map(u => {
                       return <li key={u.id}>{u.name}</li>
                    })}
                </ul>
            ) : null}
        </div>
    )
}



