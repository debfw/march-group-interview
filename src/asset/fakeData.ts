import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";

type userType = {
  name: string;
  email: string;
  pet: string;
  mobile: string;
  code: string;
};

export const useUsersData = () => {
  const [users, setUsers] = useState<userType[]>([]);

  useEffect(() => {
    let generatedUsers = [];
    for (let i = 0; i < 10; i++) {
      generatedUsers.push({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        pet: faker.animal.dog(),
        mobile: faker.phone.number(),
        code: faker.string.uuid(),
      });
    }
    setUsers(generatedUsers);
  }, []);

  return users;
};
