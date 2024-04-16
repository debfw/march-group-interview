"use client";
import { generateUsers } from "@/assets/fakeData";
import { DisplayList } from "@/components/ans1";
import Counter from "@/components/ans2";
import UserProfile from "@/components/ans3";
import UserProfile2 from "@/components/ans4";
import NumberList from "@/components/ans5";

export default function Home() {
  return (
    <main className="grid grid-cols-3 grid-rows-3 gap-10 m-6">
      <div>
        <h1>Question 1</h1>
        <DisplayList />
      </div>
      <div>
        <h1>Question 2</h1>
        <Counter />
      </div>
      <div>
        <h1>Question 3</h1>
        <UserProfile userId="0" />
        <h1>Question 4</h1>
        <UserProfile2 />
        <h1>Question 5</h1>
        <NumberList />
      </div>
    </main>
  );
}
