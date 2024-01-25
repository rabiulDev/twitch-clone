import { getSelfByUsername } from "@/lib/auth-service";
import { redirect } from "next/navigation";
import React from "react";
import { Navbar } from "./_components/navbar";

type Props = {
  children: React.ReactNode;
  params: { username: string };
};

const CreatorLayout = async ({ children, params }: Props) => {
  const username = params.username;
  const self = await getSelfByUsername(username);
  if (!self) {
    redirect("/");
  }
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">{children}</div>
    </>
  );
};

export default CreatorLayout;
