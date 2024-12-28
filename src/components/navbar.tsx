import { SignInButton, useUser } from "@clerk/nextjs";
import { SignedOut } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <section className="border">
      <header className="container mx-auto flex items-center justify-between p-4">
        <div className="logo">
          {/* <img src="/logo.png" alt="logo" /> */}
          <Link href={"/"}>
            <h1 className="indie-flower text-4xl font-bold">Makasih</h1>
          </Link>
        </div>
        <nav className="flex items-center gap-6">
          <Link href="/story" className="hover:underline">
            Kisah mereka
          </Link>
          <Link href="/support" className="hover:underline">
            Support
          </Link>
          <Link href="/makasih-ku" className="hover:underline">
            Makasih Ku
          </Link>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </nav>
      </header>
    </section>
  );
}

export default Navbar;
