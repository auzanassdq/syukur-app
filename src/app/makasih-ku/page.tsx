import CardSyukur from "@/components/card-syukur";

import { db } from "@/db";
import { syukurTable } from "@/db/schema";
import { desc, sql } from "drizzle-orm";
import { currentUser } from "@clerk/nextjs/server";

export default async function MakasihKu() {
  const user = await currentUser();
  const email = user?.emailAddresses[0].emailAddress;

  const allStories = await db
    .select()
    .from(syukurTable)
    .where(sql`${syukurTable.user_email} = ${email}`)
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
      <div className="container mx-auto mt-10 columns-1 gap-4 px-4 md:columns-2 lg:columns-4">
        {allStories.map((story) => (
          <CardSyukur
            key={story.id}
            story={{
              id: story.id,
              color: "bg-" + story.color,
              title: story.syukur,
            }}
          />
        ))}
      </div>
    </section>
  );
}
