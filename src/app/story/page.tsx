import CardSyukur from "@/components/card-syukur";
import CommunityStory from "@/components/community-story";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Howitwork from "@/components/howitwork";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

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
  {
    id: 5,
    color: "bg-red-200",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
  },
  {
    id: 6,
    color: "bg-teal-200",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
  },
  {
    id: 7,
    color: "bg-red-200",
    title:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus explicabo distinctio reiciendis velit ipsum porro temporibus fugit unde laboriosam, voluptatum quidem aliquid alias recusandae rem ut itaque eligendi minus officia.",
  },
  {
    id: 8,
    color: "bg-emerald-200",
    title: "Alhamdulillah ceraaah :)",
  },
  {
    id: 9,
    color: "bg-cyan-200",
    title: "Puji Tuhan jalanannya lancar",
  },
  {
    id: 10,
    color: "bg-gray-200",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
  },
  {
    id: 11,
    color: "bg-purple-200",
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
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
      <div className="mt-10 gap-4 px-4 lg:columns-4">
        {stories.map((story) => (
         <CardSyukur key={story.id} story={story} />
        ))}
      </div>
    </section>
  );
}
