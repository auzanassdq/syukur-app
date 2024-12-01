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
        <nav className="flex gap-4">
          <Link href="/story" className="hover:underline">Kisah mereka</Link>
          <Link href="/support" className="hover:underline">Support</Link>
        </nav>
      </header>
    </section>
  );
}

export default Navbar;
