import "@/styles/Payment.scss";

export default function Payment() {
  return (
    <div className="payment-page">
      <h1>Оплата</h1>
      <p>Выберите способ оплаты и следуйте инструкциям.</p>
      <div className="payment-buttons">
        <button>Payme</button>
        <button>Click</button>
      </div>
    </div>
  );
}