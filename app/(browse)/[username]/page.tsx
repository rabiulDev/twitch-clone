import { db } from "@/lib/db";
import React from "react";

interface Props {
  params: {
    username: string;
  };
}

const UserPage = async ({ params }: Props) => {
  const username = params.username;
  const user = await db.user.findUnique({ where: { username } });
  console.log(user);
  console.log(username);
  return <div>UserPage: {username}</div>;
};

export default UserPage;
