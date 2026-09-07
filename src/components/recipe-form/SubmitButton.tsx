interface SubmitButtonProps {
  onSubmit: () => void;
}

export default function SubmitButton({ onSubmit }: SubmitButtonProps) {
  return (
    <button
      type="button"
      onClick={onSubmit}
      className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3.5 rounded-xl transition-colors shadow-md text-lg"
    >
      Submit Recipe
    </button>
  );
}
