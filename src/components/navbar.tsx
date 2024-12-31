"use client";

import { cn } from "@/lib/utils";
import { SignInButton, useUser } from "@clerk/nextjs";
import { SignedOut } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";

function Navbar() {
  const user = useUser();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="border">
      <header className="container relative z-50 mx-auto flex items-center justify-between p-4">
        <div className="logo">
          {/* <img src="/logo.png" alt="logo" /> */}
          <Link href={"/"}>
            <h1 className="indie-flower text-4xl font-bold">Makasih</h1>
          </Link>
        </div>
        <div
          className="cursor-pointer md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu />
        </div>
        <nav
          className={cn(
            "absolute -z-10 flex w-full flex-col items-center justify-center gap-6 bg-white backdrop-blur-sm transition-all duration-300 md:static md:w-auto md:flex-row md:items-center md:justify-end",
            isOpen ? "top-[72px]" : "-top-[200px]"
          )}
        >
          <Link href="/story" className="hover:underline">
            Kisah mereka
          </Link>
          <Link href="/support" className="hover:underline">
            Support
          </Link>
          {user.isSignedIn && (
            <Link href="/makasih-ku" className="hover:underline">
              Makasih Ku
            </Link>
          )}
          <Button>
            <Link href="/post" className="hover:underline">
              Tulis cerita
            </Link>
          </Button>
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
