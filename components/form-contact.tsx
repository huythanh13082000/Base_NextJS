"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const ContactFromSchema = z.object({
  platform: z
    .enum(["WEB_APP", "MOBILE_APP", "BOTH", "NOTHING"])
    .default("NOTHING")
    .optional(),
  companyName: z.string(),
  customerName: z.string(),
  email: z.string().email(),
  governmentSupport: z.string(),
  phone: z.string(),
  position: z.string(),
  projectName: z.string().max(2),
  description: z.string().optional(),
  presenter: z.string(),
  planFile: z.any(),
  maximumBudget: z.number(),
});
type ContactFormValues = z.infer<typeof ContactFromSchema>;
const FormContact = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(ContactFromSchema),
    defaultValues: { platform: "NOTHING" },
    mode: "onChange",
  });
  const handleSubmit = () => {};
  return (
    <div>
      <Form {...form}>
        <form
          className="flex flex-col m-0 gap-8"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          {/*  Project Name*/}
          <FormField
            control={form.control}
            name="projectName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-[#D2D0DD]">
                  프로젝트명
                  <span className="text-red-600 text-sm font-medium">
                    &#160;*
                  </span>
                </FormLabel>
                <FormControl>
                  <Input
                    className="px-4 py-2 text-base"
                    placeholder="프로젝트에 참여"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/*  Plan file*/}
          <FormField
            control={form.control}
            name="planFile"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-[#D2D0DD]">
                  화면기획서
                </FormLabel>
                <FormControl>
                  <Input
                    className="px-4 py-2 text-base"
                    placeholder="프로젝트에 참여"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/*  Description*/}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-[#D2D0DD]">
                  서비스의 주요 기능
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="예: 인테리어 업체와 소비자 매칭 서비스"
                    className="resize-none text-base rounded-xl h-[156px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/*  Project Name*/}
          <FormField
            control={form.control}
            name="maximumBudget"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-[#D2D0DD]">
                  최대예상금액
                  <span className="text-red-600 text-sm font-medium">
                    &#160;*
                  </span>
                </FormLabel>
                <FormControl>
                  <Input
                    className="px-4 py-2 text-base"
                    placeholder="최대예상금액 참여"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/*  Plan file*/}
          <FormField
            control={form.control}
            name="governmentSupport"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-[#D2D0DD]">
                  정부지원사업 집행 여부
                </FormLabel>
                <FormControl>
                  <Input
                    className="px-4 py-2 text-base"
                    placeholder="예: 예비창업패키지 사업비"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/*  Platform*/}
          <div className="flex justify-between items-center">
            <FormField
              control={form.control}
              name="platform"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Checkbox />
                  </FormControl>
                  <FormLabel className="text-sm font-medium text-[#D2D0DD]">
                    출시 플랫폼
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="platform"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Checkbox />
                  </FormControl>
                  <FormLabel className="text-sm font-medium text-[#D2D0DD]">
                    정부지원사업 집행 여부
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FormContact;
