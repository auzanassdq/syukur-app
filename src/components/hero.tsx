import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

function Hero() {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="text-center">
        <h1 className="indie-flower text-5xl font-bold md:text-6xl">
          Sudah bersyukur hari ini ?
        </h1>
        <p className="mt-4 text-lg text-neutral-500/80">
          Tulis rasa syukurmu hari ini, dan biarkan dunia melihat keindahannya.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link href={"/post"}>
            <Button>Tulis di sini</Button>
          </Link>
          <Button variant={"secondary"}>lihat yg lain</Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
