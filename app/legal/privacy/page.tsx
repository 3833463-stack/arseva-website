import { Container, Eyebrow } from "@/components/ui/Container";

export const metadata = { title: "Политика конфиденциальности" };

export default function PrivacyPage() {
  return (
    <div className="pt-32 md:pt-40 pb-20">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>Юридическое</Eyebrow>
          <h1 className="mt-5 text-display-md font-display">Политика конфиденциальности</h1>
          <div className="mt-10 space-y-5 text-[16px] leading-relaxed text-ink-soft">
            <p>Настоящая политика описывает порядок обработки персональных данных, передаваемых пользователями при использовании сайта ARSEVA.</p>
            <p>Мы используем данные, которые вы предоставляете в формах (имя, контактные данные, комментарии), исключительно для обработки заявок, подбора товара и связи с вами.</p>
            <p>Мы не передаем персональные данные третьим лицам без необходимости, связанной с обработкой заказа или оказанием поддержки.</p>
            <p>Окончательная редакция политики уточняется. Для вопросов по обработке персональных данных свяжитесь с нами через форму на сайте или через Ozon.</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
