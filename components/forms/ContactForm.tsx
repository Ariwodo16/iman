"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const schema = z.object({
  name:    z.string().min(2,  "Please enter your name"),
  email:   z.string().email("Please enter a valid email"),
  subject: z.string().min(1,  "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type Fields = z.infer<typeof schema>;

const field = "w-full rounded-xl border border-[#dcc6b0] bg-white px-4 py-3 text-sm text-[#2a1a10] placeholder-[#c7a280] focus:border-[#c97f1e] focus:outline-none focus:ring-2 focus:ring-[#c97f1e]/20 transition-all";
const label = "mb-1.5 block text-sm font-semibold text-[#6c412d]";
const err   = "mt-1 text-xs text-red-500";

export function ContactForm() {
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Fields>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: Fields) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="py-10 text-center">
        <CheckCircle size={36} className="mx-auto text-green-500" />
        <h3 className="mt-3 font-bold text-[#2a1a10]">Message Sent!</h3>
        <p className="mt-1 text-sm text-[#845235]">We&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label className={label}>Name *</label>
        <input {...register("name")} placeholder="Your name" className={cn(field, errors.name && "border-red-400")} />
        {errors.name && <p className={err}>{errors.name.message}</p>}
      </div>
      <div>
        <label className={label}>Email *</label>
        <input {...register("email")} type="email" placeholder="you@email.com" className={cn(field, errors.email && "border-red-400")} />
        {errors.email && <p className={err}>{errors.email.message}</p>}
      </div>
      <div>
        <label className={label}>Subject *</label>
        <select {...register("subject")} className={cn(field, errors.subject && "border-red-400")}>
          <option value="">Select a subject</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Catering">Catering</option>
          <option value="Feedback">Feedback</option>
          <option value="Order Issue">Order Issue</option>
          <option value="Other">Other</option>
        </select>
        {errors.subject && <p className={err}>{errors.subject.message}</p>}
      </div>
      <div>
        <label className={label}>Message *</label>
        <textarea {...register("message")} rows={5} placeholder="How can we help?" className={cn(field, "resize-none", errors.message && "border-red-400")} />
        {errors.message && <p className={err}>{errors.message.message}</p>}
      </div>
      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
          Something went wrong. Please try again.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-[#c97f1e] py-3.5 font-semibold text-white transition-colors hover:bg-[#a96315] disabled:opacity-60"
      >
        {status === "loading"
          ? <><Loader2 size={16} className="animate-spin" /> Sending...</>
          : "Send Message"}
      </button>
    </form>
  );
}
