import React from "react";
import UserCard from "./UserCard";


const UserList = ({ users }) => {
    // console.log(users);
    return (
        <div>
            user UserList
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    )
}

export default UserList;