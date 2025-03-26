import React from "react";

const UserCard = React.memo(({ user }) => {
    console.log(user)
  return (
    <div>
      <h3>{user.firstName} {user.lastName}</h3>
      <p>Age: {user.age}</p>
      <p>gender: {user.gender}</p>
    </div>
  );
});

export default UserCard;
