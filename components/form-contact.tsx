"use client";
import React, { useState } from "react";
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
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { toast } from "sonner";
import { fetcher } from "@/lib/utils";
import optionStore from "@/store/option";

const ContactFromSchema = z.object({
  platform: z.enum(["WEB_APP", "MOBILE_APP", "BOTH", "NOTHING"]).optional(),
  companyName: z.string({ required_error: "companyName is required" }),
  customerName: z.string({ required_error: "customerName is required" }),
  email: z
    .string({ required_error: "email is required" })
    .email({ message: "field is invalid email address" }),
  governmentSupport: z.string().optional(),
  phone: z.string({ required_error: "phone is required" }),
  position: z.string({ required_error: "position is required" }),
  projectName: z.string({ required_error: "projectName is required" }),
  description: z.string().optional(),
  presenter: z.string({ required_error: "presenter is required" }),
  planFile: z.any().optional(),
  maximumBudget: z
    .number({ required_error: "maximumBudget is required" })
    .int("maximumBudget must be a number"),
  mobile: z.boolean().default(false).optional(),
  web: z.boolean().default(false).optional(),
  options: z.any().optional(),
  estimatedCost: z.number().optional(),
});
type ContactFormValues = z.infer<typeof ContactFromSchema>;
const FormContact = () => {
  const { options, getTotalPrice, clearOption } = optionStore((state) => state);
  const [files, setFiles] = useState<HTMLInputElement["files"]>(null);
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(ContactFromSchema),
    defaultValues: { platform: "NOTHING", web: false, mobile: false },
    mode: "onChange",
  });
  const { formState, reset } = form;
  const handleSubmit = async (data: ContactFormValues) => {
    try {
      if (data.web && data.mobile) {
        data.platform = "BOTH";
      } else if (!data.web && !data.mobile) {
        data.platform = "NOTHING";
      } else if (!data.web) {
        data.platform = "MOBILE_APP";
      } else {
        data.platform = "WEB_APP";
      }
      const formData = new FormData();
      let resFile: {
        code: number;
        success: boolean;
        data: Array<string>;
      };
      if (files && files.length) {
        for (let x = 0; x < files.length; x++) {
          formData.append("files", files[x]);
        }
        resFile = await fetcher<{
          code: number;
          success: boolean;
          data: Array<string>;
        }>("/system/multiple-file", {
          method: "POST",
          body: formData,
        });
        data.planFile = resFile.data;
      }
      if (options && options.length) {
        data.options = options;
        data.estimatedCost = getTotalPrice();
      }
      const res = await fetcher("/order-project", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res && res.success) {
        toast.success("Order has been created");
      }
    } catch (e) {
      toast.error("Something went wrong");
    }
    clearOption();
  };
  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        platform: "NOTHING",
        web: false,
        mobile: false,
        projectName: "",
        companyName: "",
        customerName: "",
        description: "",
        email: "",
        governmentSupport: "",
        phone: "",
        planFile: "",
        maximumBudget: 0,
        position: "",
        presenter: "",
      });
    }
  }, [formState, reset]);
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
              <FormItem className="z-50">
                <FormLabel className="text-sm font-medium text-[#D2D0DD] z-10">
                  프로젝트명
                  <span className="text-red-600 text-sm font-medium">
                    &#160;*
                  </span>
                </FormLabel>
                <FormControl>
                  <Input
                    className="px-4 py-2 text-base"
                    placeholder="프로젝트에 참여"
                    autoFocus
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
                  <div>
                    <div className="w-full p-1 text-base h-[42px] rounded-full border border-[#484848] bg-input-gradient flex justify-between">
                      <div className="flex gap-1 items-center">
                        {files &&
                          Array.from(files).map((file, index) => {
                            return (
                              <div key={index} className="w-fit">
                                {file.name}
                              </div>
                            );
                          })}
                      </div>
                      <Label
                        htmlFor="planFile"
                        className="h-full py-1 px-7 text-[12px] bg-gradient-to-b from-[#396FFD] to-[#0744E6] rounded-full text-white cursor-pointer"
                      >
                        업로드
                      </Label>
                    </div>
                    <Input
                      id="planFile"
                      type="file"
                      multiple
                      className="px-4 py-2 text-base hidden"
                      placeholder="프로젝트에 참여"
                      {...field}
                      onChange={(e) => setFiles(e.target.files)}
                    />
                  </div>
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

          {/* Maximum Budget*/}
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
                    type="number"
                    min={0}
                    className="px-4 py-2 text-base"
                    placeholder="최대예상금액 참여"
                    {...field}
                    onChange={(event) => field.onChange(+event.target.value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/*  government Support*/}
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
          <div>
            <p className="text-sm font-medium text-[#D2D0DD] mb-3">
              출시 플랫폼
            </p>
            <div className="flex items-center">
              <FormField
                control={form.control}
                name="mobile"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <div className="flex items-center gap-2">
                      <FormControl>
                        <Checkbox
                          className="h-6 w-6 rounded-md border-[#616A82] border-2 box-border data-[state=checked]:bg-gradient-to-r from-[#396FFD] to-[#0744E6] data-[state=checked]:border-0 data-[state=checked]:text-black"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="text-[15px] font-medium text-[#D2D0DD]">
                        모바일앱
                      </FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="web"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <div className="flex items-center gap-2">
                      <FormControl>
                        <Checkbox
                          className="h-6 w-6 rounded-md border-[#616A82] border-2 box-border data-[state=checked]:bg-gradient-to-r from-[#396FFD] to-[#0744E6] data-[state=checked]:border-0 data-[state=checked]:text-black"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="text-[15px] font-medium text-[#D2D0DD]">
                        반응형웹
                      </FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* customerName*/}
          <FormField
            control={form.control}
            name="customerName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-[#D2D0DD]">
                  성함
                  <span className="text-red-600 text-sm font-medium">
                    &#160;*
                  </span>
                </FormLabel>
                <FormControl>
                  <Input
                    className="px-4 py-2 text-base"
                    placeholder="이름과 성을 입력하세요"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* companyName and position  */}
          <div className="flex max-md:flex-col gap-8 justify-center">
            {/* companyName*/}
            <div className="w-full">
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-[#D2D0DD]">
                      회사이름
                      <span className="text-red-600 text-sm font-medium">
                        &#160;*
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="px-4 py-2 text-base"
                        placeholder="프로젝트명"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* position*/}
            <div className="w-full">
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-[#D2D0DD]">
                      직책
                      <span className="text-red-600 text-sm font-medium">
                        &#160;*
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="px-4 py-2 text-base"
                        placeholder="직위를 입력하세요"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* email and phone  */}
          <div className="flex max-md:flex-col gap-8 justify-center">
            {/* email*/}
            <div className="w-full">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-[#D2D0DD]">
                      이메일
                      <span className="text-red-600 text-sm font-medium">
                        &#160;*
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="px-4 py-2 text-base"
                        placeholder="이메일을 입력하세요"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            {/* phone*/}
            <div className="w-full">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium text-[#D2D0DD]">
                      휴대폰번호(응대문발송)
                      <span className="text-red-600 text-sm font-medium">
                        &#160;*
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="px-4 py-2 text-base"
                        placeholder="전화번호를 입력하세요"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* presenter*/}
          <FormField
            control={form.control}
            name="presenter"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-[#D2D0DD]">
                  추천인 또는 지엠포컴퍼니를 알게 된 경로
                  <span className="text-red-600 text-sm font-medium">
                    &#160;*
                  </span>
                </FormLabel>
                <FormControl>
                  <Input
                    className="px-4 py-2 text-base"
                    placeholder="유입경로"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="mt-2">
            제출하기
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FormContact;
