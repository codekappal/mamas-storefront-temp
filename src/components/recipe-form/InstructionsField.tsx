interface InstructionsFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export default function InstructionsField({
  value,
  onChange,
}: InstructionsFieldProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
        <span>👨‍🍳</span> Instructions *
      </h2>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={8}
        placeholder={"1. Heat oil in a pan...\n2. Add spices...\n3. ..."}
        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none resize-none"
      />
    </div>
  );
}
