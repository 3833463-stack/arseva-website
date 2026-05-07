"use client";
import { type InputHTMLAttributes, type TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

interface FieldProps {
  label: string;
  helper?: string;
  error?: string;
  children: React.ReactNode;
}

export function Field({ label, helper, error, children }: FieldProps) {
  return (
    <label className="block">
      <span className="block text-[12px] uppercase tracking-[0.18em] text-ink-muted mb-2">{label}</span>
      {children}
      {helper && !error && <span className="block mt-1.5 text-xs text-ink-muted">{helper}</span>}
      {error && <span className="block mt-1.5 text-xs text-red-700">{error}</span>}
    </label>
  );
}

export const TextInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(function TextInput(
  { className, ...props },
  ref,
) {
  return (
    <input
      ref={ref}
      {...props}
      className={cn(
        "w-full h-12 rounded-xl bg-bone-100 bezel px-4 text-[15px] outline-none",
        "focus:ring-2 focus:ring-graphite-900/20 transition",
        "placeholder:text-ink-subtle",
        className,
      )}
    />
  );
});

export const TextArea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(function TextArea(
  { className, ...props },
  ref,
) {
  return (
    <textarea
      ref={ref}
      rows={4}
      {...props}
      className={cn(
        "w-full rounded-xl bg-bone-100 bezel px-4 py-3 text-[15px] outline-none resize-none",
        "focus:ring-2 focus:ring-graphite-900/20 transition placeholder:text-ink-subtle",
        className,
      )}
    />
  );
});

export function Select({
  options,
  ...props
}: InputHTMLAttributes<HTMLSelectElement> & { options: { value: string; label: string }[] }) {
  return (
    <select
      {...(props as any)}
      className={cn(
        "w-full h-12 rounded-xl bg-bone-100 bezel px-4 text-[15px] outline-none",
        "focus:ring-2 focus:ring-graphite-900/20 transition",
      )}
    >
      <option value="">— выберите —</option>
      {options.map((o) => (
        <option key={o.value} value={o.value}>{o.label}</option>
      ))}
    </select>
  );
}
