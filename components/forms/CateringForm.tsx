"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const schema = z.object({
  name:      z.string().min(2,  "Please enter your full name"),
  phone:     z.string().min(10, "Please enter a valid phone number"),
  email:     z.string().email("Please enter a valid email"),
  eventDate: z.string().min(1,  "Please select a date"),
  eventSize: z.string().min(1,  "Please select event size"),
  eventType: z.string().min(1,  "Please select event type"),
  message:   z.string().min(20, "Please give us more detail (min 20 characters)"),
});

type Fields = z.infer<typeof schema>;

const field = "w-full rounded-xl border border-[#dcc6b0] bg-white px-4 py-3 text-sm text-[#2a1a10] placeholder-[#c7a280] focus:border-[#c97f1e] focus:outline-none focus:ring-2 focus:ring-[#c97f1e]/20 transition-all";
const label = "mb-1.5 block text-sm font-semibold text-[#6c412d]";
const err   = "mt-1 text-xs text-red-500";

export function CateringForm() {
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Fields>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: Fields) {
    setStatus("loading");
    try {
      const res = await fetch("/api/catering", {
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
      <div className="py-12 text-center">
        <CheckCircle size={40} className="mx-auto text-green-500" />
        <h3 className="mt-4 font-serif text-2xl font-bold text-[#2a1a10]">Inquiry Received!</h3>
        <p className="mt-2 text-[#845235]">We&apos;ll be in touch within 24 hours to discuss your event.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={label}>Full Name *</label>
          <input {...register("name")} placeholder="Your name" className={cn(field, errors.name && "border-red-400")} />
          {errors.name && <p className={err}>{errors.name.message}</p>}
        </div>
        <div>
          <label className={label}>Phone Number *</label>
          <input {...register("phone")} type="tel" placeholder="(678) 555-0100" className={cn(field, errors.phone && "border-red-400")} />
          {errors.phone && <p className={err}>{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label className={label}>Email Address *</label>
        <input {...register("email")} type="email" placeholder="you@email.com" className={cn(field, errors.email && "border-red-400")} />
        {errors.email && <p className={err}>{errors.email.message}</p>}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={label}>Event Date *</label>
          <input {...register("eventDate")} type="date" className={cn(field, errors.eventDate && "border-red-400")} />
          {errors.eventDate && <p className={err}>{errors.eventDate.message}</p>}
        </div>
        <div>
          <label className={label}>Number of Guests *</label>
          <select {...register("eventSize")} className={cn(field, errors.eventSize && "border-red-400")}>
            <option value="">Select range</option>
            <option value="10-25">10–25 guests</option>
            <option value="25-50">25–50 guests</option>
            <option value="50-100">50–100 guests</option>
            <option value="100-200">100–200 guests</option>
            <option value="200+">200+ guests</option>
          </select>
          {errors.eventSize && <p className={err}>{errors.eventSize.message}</p>}
        </div>
      </div>

      <div>
        <label className={label}>Event Type *</label>
        <select {...register("eventType")} className={cn(field, errors.eventType && "border-red-400")}>
          <option value="">Select type</option>
          <option value="Wedding / Reception">Wedding / Reception</option>
          <option value="Birthday Party">Birthday Party</option>
          <option value="Corporate Event">Corporate Event</option>
          <option value="Graduation">Graduation</option>
          <option value="Family Reunion">Family Reunion</option>
          <option value="Other">Other</option>
        </select>
        {errors.eventType && <p className={err}>{errors.eventType.message}</p>}
      </div>

      <div>
        <label className={label}>Tell Us About Your Event *</label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Describe your event, dietary needs, preferred dishes, venue, timing..."
          className={cn(field, "resize-none", errors.message && "border-red-400")}
        />
        {errors.message && <p className={err}>{errors.message.message}</p>}
      </div>

      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
          Something went wrong. Please try again or call us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-[#c97f1e] py-4 font-semibold text-white transition-colors hover:bg-[#a96315] disabled:opacity-60"
      >
        {status === "loading"
          ? <><Loader2 size={17} className="animate-spin" /> Sending...</>
          : "Submit Catering Inquiry"}
      </button>
    </form>
  );
}
