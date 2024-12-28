import CardSyukur from "@/components/card-syukur";

import { db } from "@/db";
import { syukurTable } from "@/db/schema";
import { desc } from "drizzle-orm";

let stories = [
  {
    id: 1,
    color: "bg-red-200",
    title: "Makasih ma bekal makanannya",
  },
  {
    id: 2,
    color: "bg-green-200",
    title: "Makasih pak gojek udah bantu aku ke kantor tepat waktu",
  },
  {
    id: 3,
    color: "bg-yellow-200",
    title: "Alhamdulillah ceraaah :)",
  },
  {
    id: 4,
    color: "bg-blue-200",
    title: "Puji Tuhan jalanannya lancar",
  },
];

export default async function story() {
  const allStories = await db
    .select()
    .from(syukurTable)
    .orderBy(desc(syukurTable.created_at));

  return (
    <section className="px-2 py-24">
      <h1 className="indie-flower text-center text-3xl font-bold">
        Cerita mereka
      </h1>
      {/* <div className="mt-10">
        <Link href={"/post"}>
          <Button className="w-full">mana ceritamu?</Button>
        </Link>
      </div> */}
      <div className="container mx-auto mt-10 gap-4 px-4 columns-1 md:columns-2 lg:columns-4">
        {allStories.map((story) => (
          <CardSyukur
            key={story.id}
            story={{
              id: story.id,
              color: "bg-"+story.color,
              title: story.syukur,
            }}
          />
        ))}

        {stories.map((story) => (
          <CardSyukur key={story.id} story={story} />
        ))}
      </div>
    </section>
  );
}
