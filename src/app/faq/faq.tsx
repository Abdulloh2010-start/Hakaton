"use client";
import { useState } from "react";
import "@/styles/FAQ.scss";

const faqs = [
  {
    question: "Как зарегистрироваться?",
    answer: "Перейдите на страницу регистрации, укажите email и пароль. После подтверждения почты аккаунт будет активен.",
  },
  {
    question: "Я забыл пароль. Что делать?",
    answer: "На странице входа нажмите «Забыли пароль?» и следуйте инструкции для восстановления доступа.",
  },
  {
    question: "Как сменить тему сайта?",
    answer: "В правом верхнем углу есть кнопка переключения темного/светлого режима.",
  },
  {
    question: "Куда писать, если нашёл баг?",
    answer: "Используйте форму обратной связи на странице Feedback или напишите нам напрямую.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <h1>❓ FAQ / Центр помощи</h1>
      <p>Самые популярные вопросы и ответы</p>
      <div className="faq-list">
        {faqs.map((item, i) => (
          <div key={i} className={`faq-item ${openIndex === i ? "open" : ""}`} onClick={() => toggleFAQ(i)}>
            <div className="faq-question">
              <h2>{item.question}</h2>
              <span>{openIndex === i ? "−" : "+"}</span>
            </div>
            {openIndex === i && <div className="faq-answer"><p>{item.answer}</p></div>}
          </div>
        ))}
      </div>
    </div>
  );
}