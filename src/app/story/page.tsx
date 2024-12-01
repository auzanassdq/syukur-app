import CommunityStory from "@/components/community-story";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Howitwork from "@/components/howitwork";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

let stories = [
  {
    id: 1,
    title: "Makasih ma bekal makanannya",
  },
  {
    id: 2,
    title: "Makasih pak gojek udah bantu aku ke kantor tepat waktu",
  },
  {
    id: 3,
    title:
      "Alhamdullih ceraaah"
  },
  {
    id: 4,
    title: "Puji Tuhan jalanannya lancar",
  },
  {
    id: 5,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
  },
  {
    id: 6,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
  },
  {
    id: 7,
    title:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus explicabo distinctio reiciendis velit ipsum porro temporibus fugit unde laboriosam, voluptatum quidem aliquid alias recusandae rem ut itaque eligendi minus officia.",
  },
];

export default function story() {
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
      <div className="mt-10 gap-4  px-4 lg:columns-4">
        {stories.map((story) => (
          <Card key={story.id} className="group inline-block w-full mt-4">
            <div className="p-8">
              <p className="indie-flower  text-xl font-medium group-hover:font-bold">
                "{story.title}"
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
