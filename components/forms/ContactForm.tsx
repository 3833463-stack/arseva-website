"use client";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Field, TextInput, TextArea, Select } from "./Field";
import { Button } from "@/components/ui/Button";
import { products } from "@/data/products";

type Mode = "consult" | "partner" | "quiz";

export function ContactForm({ mode = "consult" }: { mode?: Mode }) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const next: Record<string, string> = {};
    if (!fd.get("name")) next.name = "Укажите имя";
    if (mode !== "quiz" && !fd.get("phone") && !fd.get("email")) next.phone = "Укажите телефон или email";
    setErrors(next);
    if (Object.keys(next).length) return;
    setLoading(true);
    // Placeholder submit — wire to CRM later.
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 700);
  }

  if (sent) {
    return (
      <div className="rounded-3xl bezel bg-bone-50 p-8 text-center">
        <CheckCircle size={32} className="text-champagne-600 mx-auto" />
        <h3 className="mt-4 font-display text-2xl">Заявка отправлена</h3>
        <p className="mt-2 text-ink-soft">Мы свяжемся с вами в ближайшее время.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <Field label="Имя" error={errors.name}>
        <TextInput name="name" placeholder="Как к вам обращаться" />
      </Field>

      {mode === "partner" && (
        <>
          <Field label="Компания">
            <TextInput name="company" placeholder="Название компании" />
          </Field>
          <Field label="Город">
            <TextInput name="city" placeholder="Город" />
          </Field>
        </>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Телефон" error={errors.phone}>
          <TextInput name="phone" type="tel" placeholder="+7 ___ ___ __ __" />
        </Field>
        <Field label="Email">
          <TextInput name="email" type="email" placeholder="email@example.com" />
        </Field>
      </div>

      {mode === "consult" && (
        <Field label="Какой товар интересует">
          <Select
            name="product"
            options={products.map((p) => ({ value: p.slug, label: p.name }))}
          />
        </Field>
      )}

      {mode === "quiz" && (
        <>
          <Field label="Задача">
            <TextInput name="task" placeholder="Например: восстановление после спорта" />
          </Field>
          <Field label="Для кого">
            <TextInput name="for" placeholder="Для себя, для семьи, для подарка..." />
          </Field>
        </>
      )}

      {mode === "partner" && (
        <Field label="Формат сотрудничества">
          <Select
            name="format"
            options={[
              { value: "wholesale", label: "Опт" },
              { value: "studio", label: "Студия / клуб" },
              { value: "specialist", label: "Специалист" },
              { value: "marketplace", label: "Маркетплейс" },
              { value: "other", label: "Другое" },
            ]}
          />
        </Field>
      )}

      <Field label="Комментарий">
        <TextArea name="comment" placeholder="Любая дополнительная информация" />
      </Field>

      <div className="flex items-center justify-between gap-4 mt-2">
        <p className="text-xs text-ink-muted max-w-xs">
          Отправляя форму, вы соглашаетесь с обработкой персональных данных.
        </p>
        <Button type="submit" size="lg" disabled={loading}>
          {loading ? "Отправка..." : "Отправить"}
        </Button>
      </div>
    </form>
  );
}
