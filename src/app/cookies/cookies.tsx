import "@/styles/Legal.scss";

export const metadata = {
  title: "Cookies | Hakaton",
  description: "Информация об использовании файлов cookie."
};

export default function CookiesPage() {
  return (
    <div className="legal-page">
      <h1>Cookies</h1>
      <p>
        Мы используем cookies, чтобы сайт работал корректно и было удобно им
        пользоваться.
      </p>

      <h2>Зачем нужны cookies?</h2>
      <ul>
        <li>Запоминают ваши настройки (тема, язык и т.д.).</li>
        <li>Помогают нам анализировать, как вы используете сайт.</li>
      </ul>

      <div className="updated">Последнее обновление: сентябрь 2025</div>
    </div>
  );
};