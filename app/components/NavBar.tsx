import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
        <Link href={"/dashboard"}>Dashboard</Link>
      </SignedIn>
    </nav>
  );
};

export default NavBar;
