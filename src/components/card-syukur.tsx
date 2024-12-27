import { TooltipContent } from "@radix-ui/react-tooltip";
import React from "react";
import { Card } from "./ui/card";
import { Tooltip, TooltipProvider } from "./ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

interface Story {
  id: string | number;
  title: string;
  color: string;
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

const ReportIcon = () => (
  <svg
    fill="#000000"
    version="1.1"
    id="Capa_1"
    viewBox="0 0 124 124"
    className="absolute right-2 top-2 hidden size-5 fill-current text-black/80 hover:cursor-pointer group-hover:block"
  >
    <path d="M89.4,1.8C88.3,0.6,86.8,0,85.2,0H38.8c-1.6,0-3.1,0.6-4.2,1.8L1.8,34.6C0.6,35.7,0,37.2,0,38.8v46.4 c0,1.6,0.6,3.1,1.8,4.2l32.8,32.8c1.1,1.1,2.7,1.8,4.2,1.8h46.4c1.6,0,3.1-0.6,4.2-1.8l32.8-32.8c1.1-1.101,1.8-2.7,1.8-4.2V38.8 c0-1.6-0.6-3.1-1.8-4.2L89.4,1.8z M110,79.4c0,1.6-0.6,3.1-1.8,4.199L83.6,108.2c-1.1,1.1-2.699,1.8-4.199,1.8H44.6 c-1.6,0-3.1-0.6-4.2-1.8L15.8,83.6C14.6,82.5,14,81,14,79.4V44.6c0-1.6,0.6-3.1,1.8-4.2l24.6-24.6c1.1-1.1,2.7-1.8,4.2-1.8h34.8 c1.6,0,3.1,0.6,4.199,1.8L108.2,40.4c1.1,1.1,1.8,2.7,1.8,4.2V79.4z" />
    <path d="M65,23h-6c-3.3,0-6,2.7-6,6v41c0,3.3,2.7,6,6,6h6c3.3,0,6-2.7,6-6V29C71,25.7,68.3,23,65,23z" />
    <circle cx="62" cy="91.5" r="9" />
  </svg>
);

function CardSyukur({ story }: CardSyukurProps) {
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
              <ReportIcon />
            </TooltipTrigger>
            <TooltipContent>
              <p>report</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </Card>
  );
}

export default CardSyukur;
