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
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@clerk/nextjs";
import { submitSyukur } from "./action";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  syukur: z.string().min(10).max(250),
});

export default function Post() {
  const { user } = useUser();
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      syukur: "",
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
      values.syukur
    );

    console.log(result)

    if (result.success) {
      form.reset();
      console.log("Terima kasih telah berbagi syukur!");
      router.push("/story")
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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
