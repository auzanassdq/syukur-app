'use client'

import React from "react";
import { OctagonAlert, OctagonX } from "lucide-react";

import { cn, showDate } from "@/lib/utils";

import { Card } from "./ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { db } from "@/db";
import { syukurTable } from "@/db/schema";
import { sql } from "drizzle-orm";
import { deleteStory } from "@/app/post/action";
import { useRouter } from "next/navigation";

interface Story {
  id: string | number;
  title: string;
  color: string;
  createdAt?: Date;
  delete?: boolean;
}

interface CardSyukurProps {
  story: Story;
}

const QuoteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="absolute start-2 top-2 z-0 h-8 w-8 text-black/10 dark:text-gray-700"
  >
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
  </svg>
);

function CardSyukur({ story }: CardSyukurProps) {
  const router = useRouter();

  const handleAction = async () => { 
    if (story.delete) {
      try {
        const result = await deleteStory(story.id);
        router.refresh();
      } catch (error) {
        // console.log(error);
      }
    } else {
      // await deleteStory(story.id);
    }
  }

  return (
    <Card
      key={story.id}
      className={cn(
        "group relative mt-4 inline-block w-full transition-all duration-300 hover:-translate-x-2 hover:-translate-y-2",
        story.color
      )}
    >
      <QuoteIcon />
      <div className="p-8">
        {/* Text */}
        <p className="text-xl font-medium italic">{story.title}</p>

        {/* REPORT */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="absolute right-3 top-2 hidden size-5 fill-current font-bold text-black/80 hover:cursor-pointer group-hover:block"
              onClick={handleAction}
              >
                {story.delete ? <OctagonX /> : <OctagonAlert />}
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{story.delete ? "delete" : "report"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* DATE */}
        <p className="absolute bottom-2 right-3 text-xs font-medium text-black/50">
          {story.createdAt && showDate(story.createdAt)}
        </p>
      </div>
    </Card>
  );
}

export default CardSyukur;
