import React from "react";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";
// import { UserButton } from "@clerk/nextjs";
const Navbar = () => {
  return (
    <div className="bg-zinc-800 flex p-3 items-center justify-between">
      <div>
        <Image
          src="/carpool-logo.jpg"
          width={50}
          height={50}
          alt="Picture of the author"
        />
      </div>
      <div>
        <h1 className="font-bold text-zinc-200 ml-2 text-2xl">CARPOOL-CLUB</h1>
      </div>
      <div>
        <SignedIn>
          <UserButton afterSignOutUrl="/"></UserButton>
        </SignedIn>
        <SignedOut>
          <Button>
            <Link href="/main">Login</Link>
          </Button>
        </SignedOut>
      </div>
    </div>
  );
};

export default Navbar;
