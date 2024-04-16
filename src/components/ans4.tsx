import React from "react";

const user = {
  username: "JaneDoe",
  email: "jane.doe@example.com",
};

type propsType = {
  user: {
    username: string;
    email: string;
  };
};

function UserProfile2() {
  return (
    <div>
      <h1>User Profile</h1>
      <UserDetails user={user} />
    </div>
  );
}

function UserDetails(props: propsType) {
  const { username, email } = props.user;
  return (
    <div>
      <p>Name: {username}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default UserProfile2;
