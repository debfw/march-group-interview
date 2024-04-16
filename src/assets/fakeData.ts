import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";

export type userType = {
  name: string;
  email: string;
  pet: string;
  mobile: string;
  code: string;
};
faker.seed(123);
export const generateUsers = (amount: number): userType[] => {
  let users: userType[] = [];

  for (let i = 0; i < amount; i++) {
    users.push({
      name: faker.person.fullName(),
      email: faker.internet.email(),
      pet: faker.animal.dog(),
      mobile: faker.phone.number(),
      code: faker.string.uuid(),
    });
  }
  return users;
};
