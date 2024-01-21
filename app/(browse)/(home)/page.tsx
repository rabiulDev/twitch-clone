import React from "react";
import { UserButton } from "@clerk/nextjs";
type Props = {};

const Home = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-4">
      <h1>Dashboard</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Home;
