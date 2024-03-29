import { UserButton } from "@clerk/nextjs";
import React from "react";

const Page = () => {
  return (
    <div>
      <p>Home</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Page;
