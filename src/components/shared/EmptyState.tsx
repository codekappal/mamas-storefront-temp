interface EmptyStateProps {
  message: string;
}

export default function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className="text-center py-20 bg-white rounded-2xl">
      <p className="text-5xl mb-4">🍛</p>
      <p className="text-neutral-500">{message}</p>
    </div>
  );
}
