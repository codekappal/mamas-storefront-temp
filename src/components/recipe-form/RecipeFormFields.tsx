import type { RecipeFormState } from "@/hooks/useRecipeForm";

interface FieldProps {
  id: string;
}

interface TextInputProps extends FieldProps {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export function TextField({
  id,
  label,
  value,
  placeholder,
  onChange,
}: TextInputProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-neutral-700 mb-1"
      >
        {label}
      </label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none"
      />
    </div>
  );
}

interface TextAreaInputProps extends FieldProps {
  label: string;
  value: string;
  rows: number;
  placeholder?: string;
  onChange: (value: string) => void;
}

export function TextAreaField({
  id,
  label,
  value,
  rows,
  placeholder,
  onChange,
}: TextAreaInputProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-neutral-700 mb-1"
      >
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        rows={rows}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none resize-none"
      />
    </div>
  );
}

interface NumberInputProps extends FieldProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

export function NumberField({ id, label, value, onChange }: NumberInputProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-neutral-700 mb-1"
      >
        {label}
      </label>
      <input
        id={id}
        type="number"
        min={1}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value, 10) || 1)}
        className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none"
      />
    </div>
  );
}

export function SectionTitle({ icon, title }: { icon: string; title: string }) {
  return (
    <h2 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
      <span>{icon}</span> {title}
    </h2>
  );
}

export type { RecipeFormState };
