"use client";

import CommunityStory from "@/components/community-story";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Howitwork from "@/components/howitwork";
import Navbar from "@/components/navbar";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Image from "next/image";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  syukur: z.string().min(10).max(250),
});

export default function Post() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      syukur: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section className="container mx-auto py-24">
      <div className="px-4">
        <h1 className="indie-flower text-2xl font-bold py-4 text-center">
          Apa yg kamu syukuri?
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="syukur"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Ceritakan Syukur mu</FormLabel> */}
                  <FormControl>
                    <Textarea placeholder="shadcn" {...field} className="h-[200px]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">Submit</Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
