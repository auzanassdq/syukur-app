import React from "react";
import { Button } from "./ui/button";

function Hero() {
  return (
    <section className="text-center py-56">
      <div className="">
        <h1 className="text-6xl font-bold indie-flower">
          Sudah bersyukur hari ini ?
        </h1>
        <p className="mt-4 text-lg text-neutral-500/80">
          yuk mulai mensyukuri dari hal-hal yg paling kecil
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button>Tulis di sini</Button>
          <Button variant={"secondary"}>lihat yg lain</Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
