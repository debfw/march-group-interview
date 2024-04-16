// 1. Create a simple React component that displays a list of items.
//     - Use state to manage the list.
//     - Include functionality to add and remove items from the list.

import { generateUsers, userType } from "@/assets/fakeData";
import { ChangeEvent, useEffect, useState } from "react";

export const DisplayList = () => {
  const [updateData, setUpdateData] = useState<userType[]>(()=>generateUsers(5));
  const [isRemoveClicked, setIsRemoveClicked] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (isRemoveClicked && updateData.length === 0) {
      alert("new users generated!");
      setUpdateData(()=>generateUsers(10));
    }
  }, [updateData.length, isRemoveClicked]);

  const handleRemove = (index: number) => {
    const newUsersData = updateData.filter(
      (_, userIndex) => index !== userIndex
    );
    setUpdateData(newUsersData);
    setIsRemoveClicked(true);
  };

  const handleAdd = () => {
    const newList = [...updateData, ...generateUsers(parseInt(value))];
    setUpdateData(newList)
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value > "5") {
      alert("no more than 5");
    }
    setValue(e.target.value);
  };

  return (
    <div className="flex align-center justify-evenly flex-col ">
      <span className="flex flex-row justify-between">
        <input
          placeholder=" add 1-5 users"
          value={value}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>Add</button>
      </span>
      {updateData.map((user, index) => (
        <ul key={user.code}>
          <span className="flex flex-row justify-between">
            <li className="font-bold">{user.name} </li>
            <button onClick={() => handleRemove(index)}>remove</button>
          </span>
          <li>{user.mobile} </li>
          <li>{user.email} </li>
          <li>{user.pet} </li>
        </ul>
      ))}
    </div>
  );
};
