import React from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";

function Howitwork() {
  return (
    <section className="py-10">
      <div className="container mx-auto flex justify-center gap-4">
        <Card>
          <CardHeader>
            <CardTitle>
              
              <h1 className="text-center text-3xl font-bold">
                Tulis syukur
              </h1>
            </CardTitle>
          </CardHeader>
        </Card>

        <Card>
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-center text-3xl font-bold">Gimana caranya?</h1>
            <p className="text-center text-lg text-neutral-500/80">
              Tulis rasa syukurmu hari ini, dan biarkan dunia melihat
              keindahannya.
            </p>
          </div>
        </Card>

        <Card>
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-center text-3xl font-bold">Gimana caranya?</h1>
            <p className="text-center text-lg text-neutral-500/80">
              Tulis rasa syukurmu hari ini, dan biarkan dunia melihat
              keindahannya.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default Howitwork;
