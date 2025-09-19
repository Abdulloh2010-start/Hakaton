"use client";
import { useState } from "react";
import "@/styles/Feedback.scss";

export default function FeedbackPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Ошибка сети");

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      console.log(err)
    }
  };

  return (
    <div className="feedback-page">
      <h1>Обратная связь</h1>
      <p>Нашёл баг? Есть идея? Напиши нам 👇</p>
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_subject" value="Новое сообщение с Hakaton 🚀" />
        <input type="hidden" name="_redirect" value="https://hakaton.vercel.app/feedback?success=true" />
        <input type="hidden" name="_replyto" value="{email}" />

        <label>
          Имя
          <input type="text" name="name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Категория
          <select name="category" required>
            <option value="bug">🐞 Баг</option>
            <option value="idea">💡 Идея</option>
            <option value="question">❓ Вопрос</option>
          </select>
        </label>
        <label>
          Сообщение
          <textarea name="message" rows={5} required></textarea>
        </label>
        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Отправляем..." : "Отправить"}
        </button>
      </form>

      {status === "success" && <p className="success">✅ Спасибо! Сообщение отправлено.</p>}
      {status === "error" && <p className="error">❌ Ошибка при отправке. Попробуйте ещё раз.</p>}
    </div>
  );
};