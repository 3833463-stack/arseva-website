import { Container, Eyebrow } from "@/components/ui/Container";

export const metadata = { title: "Пользовательское соглашение" };

export default function TermsPage() {
  return (
    <div className="pt-32 md:pt-40 pb-20">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Юридическое</Eyebrow>
          <h1 className="mt-5 text-display-md font-display">Пользовательское соглашение</h1>
          <div className="mt-10 space-y-5 text-[16px] leading-relaxed text-ink-soft">
            <p>Использование сайта ARSEVA подразумевает согласие с настоящими условиями. Информация на сайте носит справочный характер.</p>
            <p>Товары ARSEVA не являются медицинскими изделиями. При наличии заболеваний и хронических состояний рекомендуем проконсультироваться со специалистом перед использованием.</p>
            <p>Все права на материалы сайта (тексты, изображения, дизайн) принадлежат ARSEVA. Воспроизведение возможно только с письменного согласия.</p>
            <p>Окончательная редакция соглашения уточняется. Для вопросов свяжитесь с нами через форму на сайте или через Ozon.</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
