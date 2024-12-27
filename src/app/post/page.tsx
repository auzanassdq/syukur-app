"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@clerk/nextjs";
import { submitSyukur } from "./action";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";

const formSchema = z.object({
  syukur: z.string().min(10).max(250),
  color: z.string().default("slate-200"),
});

const colors = [
  "slate-200",
  "red-200",
  "yellow-200",
  "lime-200",
  "green-200",
  "cyan-200",
  "blue-200",
  "indigo-200",
  "purple-200",
];

export default function Post() {
  const { user } = useUser();
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState("slate-200");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      syukur: "",
      color: selectedColor,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    if (!user) {
      alert("Please login first");
      return;
    }

    const result = await submitSyukur(
      user.emailAddresses[0].emailAddress,
      values.syukur,
      values.color
    );

    console.log(result);

    if (result.success) {
      form.reset();
      console.log("Terima kasih telah berbagi syukur!");
      router.push("/story");
    } else {
      alert(result.error);
    }
  }

  return (
    <section className="container mx-auto py-24">
      <div className="px-4">
        <h1 className="indie-flower py-4 text-center text-2xl font-bold">
          Apa yg kamu syukuri?
        </h1>

        <div className="grid grid-cols-2 gap-8">
          <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex-">
              <FormField
                control={form.control}
                name="syukur"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>Ceritakan Syukur mu</FormLabel> */}
                    <FormControl>
                      <Textarea
                        placeholder="shadcn"
                        {...field}
                        className="h-[200px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="color"
                render={({ field }) => (
                  <FormItem>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn("w-full font-normal")}
                        >
                          Pilih Warna
                          <div
                            className={`h-4 w-4 rounded text-center bg-${field.value}`}
                          />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-36">
                        <div className="grid grid-cols-3 gap-2">
                          {colors.map((color) => (
                            <Button
                              key={color}
                              variant="outline"
                              className={cn("h-8 w-8", `bg-${color}`)}
                              onClick={() => {
                                field.onChange(color);
                                setSelectedColor(color);
                              }}
                            />
                          ))}
                        </div>
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </Form>

          <CardSyukur
            story={{
              title: form.watch("syukur"),
              color: form.watch("color")
            }}
          />
        </div>
      </div>
    </section>
  );
}

interface Story {
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
function CardSyukur({ story }: CardSyukurProps) {
  return (
    <Card
      className={cn(
        "group relative mt-4 inline-block w-full transition-all duration-300 hover:-translate-x-2 hover:-translate-y-2 hover:border-2",
        `bg-${story.color}`
      )}
    >
      <QuoteIcon />
      <div className="p-8">
        {/* Text */}
        <p className="text-xl font-medium italic">{story.title}</p>

      </div>
    </Card>
  );
}
