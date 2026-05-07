import type { Metadata } from "next";
import { Quiz } from "./Quiz";

export const metadata: Metadata = { title: "Подбор массажера" };

export default function QuizPage() {
  return <Quiz />;
}
