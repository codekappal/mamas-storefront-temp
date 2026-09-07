import type { RecipeFormState } from "@/hooks/useRecipeForm";
import {
  SectionTitle,
  TextField,
  TextAreaField,
  NumberField,
} from "@/components/recipe-form/RecipeFormFields";

interface RecipeDetailsFormProps {
  form: RecipeFormState;
  onChange: (field: keyof RecipeFormState, value: string | number) => void;
}

export default function RecipeDetailsForm({
  form,
  onChange,
}: RecipeDetailsFormProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <SectionTitle icon="📋" title="Recipe Details" />
      <div className="space-y-4">
        <TextField
          id="title"
          label="Recipe Title *"
          value={form.title}
          placeholder="e.g. My Family Biryani"
          onChange={(value) => onChange("title", value)}
        />
        <TextAreaField
          id="description"
          label="Description"
          value={form.description}
          rows={3}
          placeholder="Describe your dish..."
          onChange={(value) => onChange("description", value)}
        />
        <div className="grid grid-cols-2 gap-4">
          <TextField
            id="cookTime"
            label="Cook Time"
            value={form.cookTime}
            placeholder="e.g. 45 minutes"
            onChange={(value) => onChange("cookTime", value)}
          />
          <NumberField
            id="servings"
            label="Servings"
            value={form.servings}
            onChange={(value) => onChange("servings", value)}
          />
        </div>
        <TextField
          id="tags"
          label="Tags (comma separated)"
          value={form.tags}
          placeholder="e.g. South Indian, Vegan, Quick"
          onChange={(value) => onChange("tags", value)}
        />
      </div>
    </div>
  );
}
