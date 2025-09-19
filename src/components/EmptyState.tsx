"use client";
import "@/styles/EmptyState.scss";

type EmptyStateProps = {
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
};

export default function EmptyState({
  title = "Ничего не найдено",
  description = "Попробуйте изменить запрос или обновить страницу.",
  actionLabel,
  onAction
}: EmptyStateProps) {
  return (
    <div className="empty-state">
      <div className="illustration">
        <span role="img" aria-label="empty">📭</span>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      {actionLabel && (
        <button onClick={onAction} className="action-btn">
          {actionLabel}
        </button>
      )}
    </div>
  );
};