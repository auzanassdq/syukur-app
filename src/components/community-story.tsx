import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

function CommunityStory() {
  return (
    <section className="container mx-auto py-10">
      {/* <div className="p-10">
        <h1 className="indie-flower text-center text-4xl font-bold">
        "Hal-hal kecil yang kita syukuri adalah jembatan menuju kebahagiaan
        besar."
        </h1>
        </div> */}

      <p className="text-center text-3xl font-bold text-black/80 indie-flower">
        cerita mereka hari ini
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 px-4 md:grid-cols-4">
        <Card className="w-full">
          <div className="p-8">
            <p className="indie-flower text-xl font-medium">
              "makasih ma bekal makanannya"
            </p>
          </div>
        </Card>

        <Card className="w-full">
          <div className="p-8">
            <p className="indie-flower text-xl font-medium">
              "makasih pak gojek udah bantu aku ke kantor tepat waktu"
            </p>
          </div>
        </Card>

        <Card className="w-full">
          <div className="p-8">
            <p className="indie-flower text-xl font-medium">
              "alhamdulillah bisa bangun pagi"
            </p>
          </div>
        </Card>

        <Card className="w-full">
          <div className="p-8">
            <p className="indie-flower text-xl font-medium">
              "puji tuhan jalanannya lancar"
            </p>
          </div>
        </Card>
      </div>

      <Link href={"/post"}>
        <Button className="mx-auto mt-10 flex">More</Button>
      </Link>
    </section>
  );
}

export default CommunityStory;
