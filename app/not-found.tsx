import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="pt-40 pb-24">
      <Container>
        <div className="max-w-xl">
          <div className="font-mono text-sm text-ink-muted">404</div>
          <h1 className="mt-4 text-display-lg font-display">Страница не найдена.</h1>
          <p className="mt-6 text-[17px] text-ink-soft">
            Возможно, страница была перемещена. Вернитесь на главную или перейдите в каталог.
          </p>
          <div className="mt-10 flex gap-3">
            <Button href="/">На главную</Button>
            <Button href="/catalog" variant="secondary">Каталог</Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
