"use client";

export function OrderButton({ label }: { label: string }) {
  return (
    <button
      onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
      className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3.5 rounded-lg transition-colors">
      {label}
    </button>
  );
}
