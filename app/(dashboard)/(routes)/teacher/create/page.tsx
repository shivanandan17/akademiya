"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormDescription,
  FormLabel,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import toast from "react-hot-toast";

const formSchema = z.object({
  title: z.string().min(1, { message: "Title is Required" }),
});

const CreatePage = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { title: "" },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/course", values);
      router.push(`/teacher/courses/${response.data.id}`);
    } catch {
      toast.error("Something gone wrong!");
    }
  };

  return (
    <div className="max-w-5xl mx-auto flex md:item-center md:justify-center p-6">
      <div>
        <h1 className="text-white text-2xl">Name your Course</h1>
        <p className="text-sm text-stone-400">
          What would you like to name your course? Don&apos;t worry you can
          change later.
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-8"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Course title</FormLabel>
                  <FormControl>
                    <Input
                      className="focus:border-slate-900"
                      disabled={isSubmitting}
                      placeholder="e.g. Java Backend Development"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-stone-400">
                    What will you teach in this course?
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Link href="/">
                <Button
                  type="button"
                  className="bg-white text-stone-700 hover:bg-stone-700 hover:text-white"
                >
                  Cancel
                </Button>
              </Link>
              <Button
                type="submit"
                className="bg-rose-500 hover:bg-rose-700"
                disabled={!isValid || isSubmitting}
              >
                Continue
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreatePage;
