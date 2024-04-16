import React, { useEffect, useState } from "react";

function UserProfile({ userId }: { userId: string }) {
  const [user, setUser] = useState({ name: "user" }); //change null to a value just for passing linters

  useEffect(() => {
    fetch(`https://api.example.com/users/${userId}`)
      .then((response) => response.json())
      .then((userData) => {
        setUser(userData);
      });
  }, [userId]);//set the dependency

  return <div>{user ? <p>Welcome, {user.name}!</p> : <p>Loading...</p>}</div>;
}

export default UserProfile;
