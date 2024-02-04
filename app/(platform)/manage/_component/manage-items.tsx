"use client";
import { useFormState } from "react-dom";
import { Trash2Icon } from "lucide-react";
import { ElementRef, useRef, useState } from "react";
import { FormEdit } from "./form-edit/form-edit";
import { DeleteFormButton } from "./form-delete-button";
import { deleteWord } from "@/actions/delete-word";
import { toast } from "sonner";

interface ManageItemsProps {
  word: {
    id: string;
    word: string;
  };
}

export const ManageItems = ({ word }: ManageItemsProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const editRef = useRef<ElementRef<"form">>(null);
  const [state, dispatch] = useFormState(deleteWord.bind(null, word.id), {
    errors: {},
  });
  if (state.success) {
    toast.success("successfully deleted");
  }
  return (
    <div
      onClick={(show) => setIsEditing((show) => !show)}
      role="button"
      className="flex items-center flex-cols max-w-[20rem] mx-auto border border-white rounded-md p-2 mb-2 justify-between mt-2"
    >
      {isEditing ? (
        <FormEdit
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          ref={editRef}
          word={word.word}
          id={word.id}
        />
      ) : (
        <h2 className="text-xl font-semibold text-white">{word.word}</h2>
      )}
      <form onClick={(e) => e.stopPropagation()} action={dispatch}>
        <DeleteFormButton>
          <Trash2Icon className="h-5 w-5" />
        </DeleteFormButton>
      </form>
    </div>
  );
};
