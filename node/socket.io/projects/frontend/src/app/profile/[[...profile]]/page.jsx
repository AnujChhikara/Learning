import React from "react";
import {
  UserButton,
  UserProfile,
  SignOutButton,
  SignInButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function UserProfilePage() {
  return (
    <div className='flex flex-col space-y-4 justify-center items-center h-screen'>
      <SignedOut>
        <Button>
          <Link href='/signin'>Sign In First</Link>
        </Button>
      </SignedOut>
      <SignedIn>
        <UserProfile />
        <Button>
          <SignOutButton />
        </Button>
      </SignedIn>
    </div>
  );
}
