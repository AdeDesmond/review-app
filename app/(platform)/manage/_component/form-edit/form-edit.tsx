"use client";
import { useFormState } from "react-dom";
import { WordSubmitButton } from "@/components/form/word-submit-button";
import { Input } from "@/components/ui/input";
import { ElementRef, forwardRef, useRef } from "react";
import { updateWord } from "@/actions/update-word";
import { toast } from "sonner";

interface FormEditProps {
  id: string;
  word: string;
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
}

export const FormEdit = forwardRef(
  ({ isEditing, setIsEditing, word, id }: FormEditProps, ref) => {
    const inputRef = useRef<ElementRef<"input">>(null);
    if (isEditing) {
      setTimeout(() => {
        inputRef.current?.focus();
      });
    }
    const [state, dispatch] = useFormState(updateWord.bind(null, id), {
      errors: {},
    });
    if (state.success) {
      setIsEditing(false);
      toast.success("word updated");
    }
    return (
      <div>
        <form
          onClick={(e) => e.stopPropagation()}
          action={dispatch}
          className="flex items-center gap-x-1"
        >
          <Input
            name="word"
            id="word"
            ref={inputRef}
            type="text"
            placeholder="Update word"
            defaultValue={word}
          />
          <WordSubmitButton>Update</WordSubmitButton>
        </form>
      </div>
    );
  }
);

FormEdit.displayName = "FormEdit";
